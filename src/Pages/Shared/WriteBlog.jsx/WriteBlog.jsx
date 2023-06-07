import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider';

const WriteBlog = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const imageHostingKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()
    const handleblog = data => {
        const image = data.image[0];
        const formdata = new FormData();
        formdata.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
        fetch(url, {
            method: 'POST',
            body: formdata
        })
            .then(res => res.json())
            .then(imgdata => {
                if (imgdata.success) {
                    console.log(imgdata.data.url);
                    const blog = {
                        name: data.name,
                        email: data.email,
                        texts: data.texts,
                        date: data.date,
                        title: data.title,
                        image: imgdata.data.url
                    }
                    fetch('https://blogging-site-server.vercel.app/blogs', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged > 0) {
                                toast('Your Blog is Published')
                                console.log(result);
                                navigate('/')
                            }
                        })
                }
            })
    }
    return (
        <div className='font-serif'>
            <h1 className='text-xl font-bold text-center'>Share Your Opinion</h1>
            <form onSubmit={handleSubmit(handleblog)} noValidate="" className="container w-full max-w-2xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50 ng-untouched ng-pristine ng-valid text-black mb-5">
                <fieldset className="w-full text-center space-y-1 dark:text-gray-900 mt-4 mb-4">
                    <label htmlFor="files" className="block text-sm font-medium ">Attachments Your Image or other Document</label>
                    <div className="mx-auto">
                        <input type="file" name="files" {...register('image')} id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-400 dark:bg-white" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text dark:text-violet-900">Type your name</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register('name')} required className="input input-bordered w-full" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text dark:text-violet-900">Your email</span>
                        </label>
                        <input type="email" placeholder="Type here" {...register('email')} readOnly required defaultValue={user?.email} className="input input-bordered w-full dark:text-violet-900" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text dark:text-violet-900">Enter Title.</span>
                        </label>
                        <input type="title" placeholder="Type here" {...register('title')} className="input input-bordered w-full dark:text-violet-900" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text dark:text-violet-900">Published Date</span>
                        </label>
                        <input type="date" placeholder="Put the date" {...register('date')} required defaultValue={user?.email} className="input input-bordered w-full dark:text-violet-900" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text dark:text-violet-900 ">Tell us about your story.</span>
                        </label>
                        <textarea {...register('texts')} className="textarea w-full h-full" placeholder="Tell your story ..."></textarea>
                    </div>
                </fieldset>
                <div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-100">Publish</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WriteBlog;