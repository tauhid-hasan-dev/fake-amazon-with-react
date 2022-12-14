import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'

const Header = () => {
   const {user, logOut} = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-nav-color text-white shadow-lg px-[5%] py-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-nav-color rounded-box w-52 ">
                            <li><Link to ='/'>Shop</Link></li>
                            <li><Link to = '/orders'>Orders</Link></li>
                            <li><Link to = '/inventory'>Inventory</Link></li>
                            <li><Link to = '/about'>About</Link></li>
                            <li><Link to = '/login'>Login</Link></li>
                            <li><Link to = '/signup'>SignUp</Link></li>
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-end hidden lg:flex w-[90%]">
                    <ul className="menu menu-horizontal p-0 text-white">
                        <li><Link to ='/'>Shop</Link></li>
                        <li><Link to = '/orders'>Orders</Link></li>
                        <li><Link to = '/inventory'>Inventory</Link></li>
                        <li><Link to = '/about'>About</Link></li>
                        {  user?.uid ?
                               <li><Link className='bg-btn-color text-black' onClick={logOut}>Log Out</Link></li>
                            : <>
                                <li><Link to = '/login'>Login</Link></li>
                                <li><Link to = '/signup'>SignUp</Link></li>
                             </>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;