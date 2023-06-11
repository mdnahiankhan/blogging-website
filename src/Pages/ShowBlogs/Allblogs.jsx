import { toast } from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToHistory } from '../../redux/actionCreators/blogAction';

const Allblogs = ({ blog, refetch }) => {
    const { name, image, email, texts, _id, date, title } = blog;
    // const { user } = useContext(AuthContext);
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
    const { pathname } = useLocation()

    return (
        <div>
            <div className="max-w-[1440px] mx-auto p-4 h-full shadow-md dark:bg-gray-100 dark:text-gray-900 font-serif mb-2">
                <div className="">
                    <div className="card h-96 lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='h-full w-screen' src={image} alt="Album" /></figure>
                        <div className="card-body">
                            <div>
                                <h2 className="card-title">{name}</h2>
                            </div>
                            <p>{email}</p>
                            <p>Publish Date: {date}</p>

                            <h1 className='text-lg font-bold'>{title}</h1>
                            <>{
                                texts.length > 150 ?
                                    <h1>{texts.slice(0, 150) + "..."} <Link onClick={() => dispatch(addToHistory(blog))}
                                        className='font-bold ' to={`/blog/${_id}`}>Read  More</Link></h1>
                                    :
                                    <h2>{texts}</h2>
                            }</>
                            <div className="card-actions justify-end">
                                {pathname.includes("user") && (<div className='flex justify-between'>
                                    <button onClick={() => handledelete(_id)} className="-ml-2 btn btn-sm btn-error">Delete</button>
                                </div>)}
                                {pathname.includes("user") && (<Link to={`/update/${blog._id}`}>
                                    <button className=" btn btn-sm btn-primary">Edit</button>
                                </Link>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allblogs;