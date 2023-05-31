import React from 'react';
import { useSelector } from 'react-redux';
import Allblogs from '../Pages/ShowBlogs/Allblogs';

const HistoryBlogs = () => {
    const history = useSelector((state) => state.history);
    return (
        <div className='text-center'>
            {
                history.map(blog => <Allblogs blog={blog}></Allblogs>)
            }
        </div>
    );
};

export default HistoryBlogs;