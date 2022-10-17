import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='p-20  flex flex-col items-center'>
            <form className="p-10 shadow-2xl w-[450px] ">
                    <div className="form-control">
                        <label className="label">
                                 <span className="label-text">Email</span>
                         </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                         </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
            </form>
        </div>
       
                
          
    );
};

export default Login;