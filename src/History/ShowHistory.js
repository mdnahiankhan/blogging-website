import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { removeHistory } from '../redux/actionCreators/blogAction';
import { useDispatch } from 'react-redux';

const ShowHistory = ({ blog }) => {
    const { email, image, name, texts } = blog;
    const dispatch = useDispatch();
    return (
        <div>
            <div className="hero bg-base-200 border-spacing-1">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <h1>Email: {email}</h1>
                        <p className="py-6">{texts}</p>
                        <h1>You read This :{blog?.quantity} Times In a row.</h1>
                        <div className=''>
                            <button onClick={() => dispatch(removeHistory(blog))}
                                title='Clear History'
                                className='flex justify-between px-3 bg-red-500 text-white p-1 rounded-full flex-1'
                            >
                                <p>Clear History</p>
                                <MdDeleteForever size='25' />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShowHistory;