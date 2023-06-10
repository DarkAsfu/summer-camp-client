import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/REgister";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";



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
  ]);

export default router;