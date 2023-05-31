import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToHistory } from '../../redux/actionCreators/blogAction';

const Allblogs = ({ blog, refetch }) => {
    const { name, image, email, texts, _id } = blog;

    const dispatch = useDispatch()

    const handledelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete this blog')
        if (proceed) {
            fetch(`https://blogging-site-server.vercel.app/blogs/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        console.log(data);
                        refetch()
                        toast('Your Blog is Deleted Successfully.')
                    }
                })
        }
    }


    return (
        <div>
            <div className="max-w-[1440px] mx-auto p-4 shadow-md dark:bg-gray-100 dark:text-gray-900 mb-4">
                <div className="">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={image} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{email}</p>
                            <p>{
                                texts.length > 150 ?
                                    <h1>{texts.slice(0, 150) + "..."} <Link onClick={() => dispatch(addToHistory(blog))}
                                        className='font-bold ' to={`/blog/${_id}`}>Read  More</Link></h1>
                                    :
                                    <h2>{texts}</h2>
                            }</p>
                            <div className="card-actions justify-end">
                                <div className='flex justify-between'>
                                    <button onClick={() => handledelete(_id)} className="-ml-2 btn btn-sm btn-error">Delete</button>
                                </div>
                                <Link to={`/update/${blog._id}`}>
                                    <button className=" btn btn-sm btn-primary">Edit</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Allblogs;