import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Allblogs from '../ShowBlogs/Allblogs';

const Myblog = () => {
    const { data: blogs, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/blogs');
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
    return (
        <div className='mx-auto'>
            <h1 className='text-center font-bold text-xl'>All Your Blogs</h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    blogs?.map(blog => <Allblogs key={blog._id}
                        blog={blog}
                        refetch={refetch}
                    ></Allblogs>)
                }
            </div>
        </div>
    );
};

export default Myblog;