import React from 'react';
import { useSelector } from 'react-redux';
import ShowHistory from './ShowHistory';

const HistoryBlogs = () => {
    const history = useSelector((state) => state.history);
    return (
        <div className='text-center'>
            {
                history.sort((a, b) => a._id - b._id).map(blog => <ShowHistory key={blog.blog} blog={blog}></ShowHistory>)
            }
        </div>
    );
};

export default HistoryBlogs;