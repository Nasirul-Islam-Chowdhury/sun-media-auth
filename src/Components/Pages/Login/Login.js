import React, { useContext} from 'react';
import { Link, useNavigate , useLocation} from 'react-router-dom';
import { AuthContext } from '../../Contexts/UseContexts';
import Swal from 'sweetalert2'


const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const {signin, googleSignup } = useContext(AuthContext);
    const handleGoogleSignin = () => {
        googleSignup()
            .then(result => {
                console.log(result.user)
                Swal.fire("Successfully Logged in")
                navigate("/")
            })
            .catch(error => console.log(error))
    }
    const handleSignin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
  
        signin(email, password)
        .then(res=>{
            console.log(res.user)
            form.reset();
            Swal.fire("Successfully Logged In")
            navigate(from, {replace: true})
        }
        )
        .catch(error=>console.log(error))

    }
    return (
        <div className="bg-background min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form onSubmit={handleSignin} className="bg-gradient-to-r from-first to-second px-6 py-20 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center text-white font-bold font-sans">Login</h1>

                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" />

                <input 
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" />

                <button
                    type="submit"
                    className="w-full text-center py-3 font-sans rounded bg-custom-blue text-white hover:bg-green-dark focus:outline-none my-1"
                >Login</button>
                    <button onClick={handleGoogleSignin}
                        className="w-full text-center py-3 rounded bg-custom-blue text-white hover:bg-green-dark focus:outline-none my-1"
                    >SignIn With Google</button>

            </form>

            <div className="text-white mt-6">
                New Here?   <Link to='/register' className="border-b border-blue text-blue">
                Create an account
                </Link>.
            </div>
        </div>
    </div>
    );
};

export default Login;