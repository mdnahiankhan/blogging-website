import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const storeduser = useLoaderData();
    const [user, setUser] = useState(storeduser)
    const handleUpdate = event => {
        event.preventDefault();
        console.log(user);
    }
    const handleInputchange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h1>You have to Update for :{storeduser?.name}</h1>
            <h1 className='text-xl font-bold text-center'>Update Your Opinion</h1>
            <form onSubmit={handleUpdate} noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-200 ng-untouched ng-pristine ng-valid text-black">
                <fieldset className="w-full text-center space-y-1 dark:text-gray-900 mt-4 mb-4">
                    <label htmlFor="files" className="block text-sm font-medium ">Update Your whole document.</label>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text">Update your name</span>
                        </label>
                        <input onChange={handleInputchange} type="text" name='name' placeholder="Type here" defaultValue={storeduser.name} className="input input-bordered w-full" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text">Update Your email</span>
                        </label>
                        <input onChange={handleInputchange} type="email" name='email' placeholder="Type here" defaultValue={storeduser.email} className="input input-bordered w-full" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text">Update your story.</span>
                        </label>
                        <textarea onChange={handleInputchange}
                            defaultValue={storeduser.texts} name="texts" className="textarea w-full" placeholder="Tell your story ..."></textarea>
                    </div>
                </fieldset>
                <div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-100">Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;