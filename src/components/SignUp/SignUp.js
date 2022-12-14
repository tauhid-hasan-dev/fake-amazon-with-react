import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
    const [error, setError] = useState('');
    const [match, setMatch] = useState('');

    const {createUser} = useContext(AuthContext)

    const handleSubmit = (event)=> {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if(password.length < 6){
            setError('Password must be atleast 6 character!!')
        }else{
            setError('');
        }
        if(password !== confirm){
            setMatch('Password did not match')
        }else{
            setMatch('')
        }

        //creating user with email and password 
        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            console.log(user);
        })
        .catch(error => {
            console.error(error)
        })

        //sign in with firebase
        
    }
    return (
        <div className='p-20  flex flex-col items-center'>
            <form className="p-10 shadow-2xl w-[450px] " onSubmit={handleSubmit}>
                    <p className='text-center text-3xl font-regular'>Sign Up</p>
                    <div className="form-control">
                        <label className="label">
                                 <span className="label-text">Email</span>
                         </label>
                        <input type="email" name='email' placeholder="Your email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your password" className="input input-bordered" required/>
                        <p className='text-red-500 mt-2'>{error}</p>
                       
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name='confirm' placeholder="Confirm password" className="input input-bordered" required/>
                        <p className='text-red-500'>{match}</p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-btn-color text-black border-btn-color hover:bg-orange-300 hover:border-orange-300">Sign Up</button>
                    </div>
                    <div className='text-center'>
                            <small className='mr-2'>Already have an account?</small>   
                            <Link to='/login' className="label-text-alt link link-hover text-orange-400">Please Login</Link>
                    </div>
            </form>
        </div>
    );
};

export default SignUp;