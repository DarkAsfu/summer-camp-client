import { Link, NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome} from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
const Dashboard = () => {
    const [cart] = useCart();

    // const isAdmin = false;
    // const isInstructor = false;
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-11/12 mx-auto py-10">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-slate-200">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                   {
                    isAdmin ? <> <li><Link><FaHome></FaHome> User Admin</Link></li>
                    {/* <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li> */}
                    <li><NavLink to="/dashboard/manageClasses"><FaWallet></FaWallet>Manage Classes</NavLink></li>
                    <li><NavLink to="/dashboard/allusers"><FaWallet></FaWallet>Manage Users</NavLink></li>
                    </> : <>
                        {
                            isInstructor ?  <> <li><Link><FaHome></FaHome> User Instructor</Link></li>
                            {/* <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li> */}
                            <li><NavLink to="/dashboard/addClass">Add A Class</NavLink></li>
                            <li><NavLink to="/dashboard/instructorClass">My Classes</NavLink></li>
                             </> : 
                             <> <li><Link><FaHome></FaHome> User Home</Link></li>
                             {/* <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li> */}
                             <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                             <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Enrolled Classes</NavLink></li>
                             <li>
                                 <NavLink to="/dashboard/myclasses"><FaShoppingCart></FaShoppingCart> My selecting Classes
                                     <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                 </NavLink>
         
                             </li> </>
                        }
                    </>
                   }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/classes">Classes</NavLink></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;