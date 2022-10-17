import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='p-20  flex flex-col items-center'>
            <form className="p-10 shadow-2xl w-[450px] ">
                    <p className='text-center text-3xl font-regular'>Login</p>
                    <div className="form-control">
                        <label className="label">
                                 <span className="label-text">Email</span>
                         </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-btn-color text-black border-btn-color hover:bg-orange-300 hover:border-orange-300">Login</button>
                    </div>
                    <div className='text-center'>
                            <small className='mr-2'>New to Ema-john?</small>   
                            <Link to='/signup' className="label-text-alt link link-hover text-orange-400">Create New Account</Link>
                    </div>
            </form>
        </div>
       
                
          
    );
};

export default Login;