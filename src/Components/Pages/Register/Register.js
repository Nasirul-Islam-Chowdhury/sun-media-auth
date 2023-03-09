import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UseContexts';
import Swal from 'sweetalert2'

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { signUp, googleSignup } = useContext(AuthContext)
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.displayName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;
        if (password !== confirmPassword) {
            setError("Password didn't match")
        };
        if (!/[*@!#%&()^~{}]+/.test(password)) {
            setError("Please input atleast one special character");
        } 
      
        if (password.length < 6) {
            setError("Pasword should be 6 character or more")
        }
         
        signUp(email, password)
            .then(result => {
                Swal.fire("Successfully Registered")
                console.log(result.user)
                navigate("/")
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="bg-background min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={handleRegister} className="bg-gradient-to-r from-first to-second px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center text-white font-sans font-bold">Register</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="displayName"
                        placeholder="Full Name" />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-2"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        required
                    />
                    <div className='text-white'>{error}</div>
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-custom-blue text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                
                    <div className="text-white mt-6 text-center">
                        Already have an account?
                        <Link to='/login' className="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </Link>.
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;