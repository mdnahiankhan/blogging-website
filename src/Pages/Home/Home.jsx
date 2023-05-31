import React from 'react';
import { Link } from 'react-router-dom';
import Myblog from '../Shared/Myblog';
import About from '../../About/About';
import Messages from '../Message/Messages';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen mb-5 " style={{ backgroundImage: `url("https://www.impactbnd.com/hubfs/best-blogging-platform-featured.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Hellow You have to write this website your blog your valueable opinion.There you should be share your daily work history.Which make you very glad to see.</p>
                        <Link to='/writeblog'><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <Myblog></Myblog>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Messages></Messages>
            </div>
        </div>
    );
};

export default Home;