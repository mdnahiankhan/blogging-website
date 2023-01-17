import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Allblogs = ({ blog, refetch }) => {
    const { name, image, email, texts, _id } = blog;
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
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-100 dark:text-gray-900 mb-4">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>{email}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold dark:text-violet-400">{name}</h3>
                        <p className="leading-snug dark:text-gray-400">{texts}</p>
                    </div>
                    <div className='flex justify-between'>
                        <button onClick={() => handledelete(_id)} className="btn btn-outline btn-accent">Delete</button>
                        <Link to={`/update/${blog._id}`}>
                            <button className="btn btn-outline btn-accent">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allblogs;