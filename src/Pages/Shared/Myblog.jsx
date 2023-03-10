import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Allblogs from '../ShowBlogs/Allblogs';

const Myblog = () => {
    const { data: blogs, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            try {
                const res = await fetch('https://blogging-site-server.vercel.app/blogs');
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
    return (
        <div className='mx-auto'>
            <h1 className='text-center font-bold text-xl mb-5'>See all the Blogs</h1>
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