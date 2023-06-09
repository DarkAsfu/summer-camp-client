import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Register = () => {
    const {handleCreateUser, updateInfo} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please enter at least one uppercase');
            setSuccess('')
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please enter at least one special character');
            setSuccess('')
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please enter at least one number');
            setSuccess('')
            return;
        } else if (!/.{6}/.test(password)) {
            setError('Please enter minimum 6 character');
            setSuccess('')
            return;
        }
        handleCreateUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateInfo(name, photo);
            setSuccess('Register Succesfully!!!');
            setError('');
            form.reset();

        })
        .catch(e =>{
            console.log(e.message);
            setError(e.message);
            setSuccess('')
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 py-20">
                <div className="text-center px-10">
                    <h1 className="text-4xl font-bold">Please Register !</h1>
                    <img src="https://i.ibb.co/Prv3X1W/Pngtree-purple-office-ui-registration-illustration-4978562.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered" required />
                        </div>
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
                            <p><small className="text-gray-500">[*Password must be one capital letter, one number, one special character and six digit*]</small></p>
                            <label className="label">
                                <p className="label-text-alt ">Already have an account? please <Link to='/login' className='text-blue-400'>Sign in</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <SocialLogin></SocialLogin>
                        <label className="label">
                            <p className="label-text-alt text-red-600">{error}</p>
                            <p className="label-text-alt text-green-600">{success}</p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;