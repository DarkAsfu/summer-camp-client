import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const { handleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const signIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        handleSignIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('Successfully login!!');
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                setSuccess('')
            })
    }
    return (
        <div className='pt-20'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2 py-20">
                    <div className="text-center px-14">
                        <img src="https://i.ibb.co/x5XdLRF/login.gif" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-8">

                        <form onSubmit={signIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p className="label-text-alt p-8">Are you new? please <Link to='/register' className='text-blue-400'>Register</Link></p>
                        <SocialLogin></SocialLogin>
                        <label className="label">
                            <p className="label-text-alt text-red-600">{error}</p>
                            <p className="label-text-alt text-green-600">{success}</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;