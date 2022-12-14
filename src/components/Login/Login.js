import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
   const {signIn} = useContext(AuthContext);
   const nevigate = useNavigate();
   //to nevigate current location after log in (integrated from react router dom)
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';

    const handleSumbit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password) 

        signIn(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            console.log(user);
            nevigate(from, {replace:true});
        })
        .catch(error => {
            console.error(error)
        })
    }

 
    return (
        <div className='p-20  flex flex-col items-center'>
            <form className="p-10 shadow-2xl w-[450px] " onSubmit={handleSumbit}>
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