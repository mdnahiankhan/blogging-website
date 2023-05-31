import React from 'react';

const ShowHistory = (blog) => {
    const { name, image, email, texts } = blog;
    return (
        <div>
            <div className="max-w-[1440px] mx-auto p-4 shadow-md dark:bg-gray-100 dark:text-gray-900 mb-4">
                <div className="">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={image} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{email}</p>
                            <p>{texts}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowHistory;