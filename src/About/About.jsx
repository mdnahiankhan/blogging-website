import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="p-6 py-12 dark:bg-violet-100 dark:text-gray-900 mt-4 mb-4">
                <div className="container mx-auto font-serif">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-xl tracking-tighter font-bold">Write your own way which you want to say publicly.
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Think your way try to understand situation and grow up. </span>
                            <span className="font-bold text-lg">Write Blog for future.</span>
                        </div>
                        <Link to='/writeblog' rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 btn btn-primary">Your Opinion</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;