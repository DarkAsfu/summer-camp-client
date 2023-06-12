import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/REgister";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../Pages/Dashboard/MyClasses";
import PrivateRouter from "./PrivateRouter";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import InstructorClass from "../Pages/Dashboard/Instructor/InstructorClass";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import Payment from "../Pages/Dashboard/Payment";
import AdminRoute from "./AdminRoute";
import History from "../Pages/Dashboard/History";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/instructors',
          element: <Instructor></Instructor>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
      children: [
        {
          path: '/dashboard',
          element: <h1>Welcome to my dashboard</h1>
        },
        {
          path: 'myclasses',
          element: <MyClasses></MyClasses>
        },
        {
          path: 'allusers',
          element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
        {
          path: 'manageClasses',
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path: 'instructorClass',
          element: <InstructorClass></InstructorClass>
        },
        {
          path: 'addClass',
          element: <AddClass></AddClass>
        },
        {
          path:'payment/:price',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <History></History>
        }
      ]

    }
  ]);

export default router;