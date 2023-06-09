import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const Login = () => {

    const signIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
    }
    return (
        <div className=''>
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
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;