import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider';

const Navbar = () => {
    const { user, Logout } = useContext(AuthContext);
    const handleLogout = () => {
        Logout()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/myblog'>My Blog</Link></li>
        <li><Link to='/writeblog'>Write Blog</Link></li>
        <li><Link to='/history'>History</Link></li>
    </React.Fragment>
    return (
        <div className='  bg-gray-500'>
            <div className="navbar max-w-[1440px] mx-auto bg-base-900 lg:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl sm:text-white">Blogging Website</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.uid ?
                        <li><button onClick={handleLogout} to='/login' className="btn">Sign Out</button></li> :
                        <li><Link to='/login' className="btn">LogIn</Link></li>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;