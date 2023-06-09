import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navItem = <>
        <li className="md:text-black font-semibold text-lg"><Link to="/">Home</Link></li>
        <li className="md:text-black font-semibold text-lg"><Link to="/instructors">Instructor</Link></li>
        <li className="md:text-black font-semibold text-lg"><a>Classes</a></li>
        {
            user &&
            <>
                <li className="md:text-black font-semibold text-lg"><a>Dashboard</a></li>
                <li className="md:text-black font-semibold text-lg">
                    <div className="avatar">
                        <div className="w-12 mask mask-squircle">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </li>
            </>
        }
    </>
    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(e => e.message)
    }
    return (
        <div>

            <div className="navbar bg-blue-100 opacity-100  relative z-10">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navItem}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold btn btn-ghost text-black hidden md:block">Global Language</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleLogOut} className="btn">Logout</button> :
                        <Link className="btn" to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;