import { useContext } from "react";
import useCourse from "../../hooks/useCourse";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Classes = () => {
    const [courses, loading] = useCourse();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSelect = () =>{
        if(!user){
            navigate('/login')
        }
    }
    if (loading) {
        return <>
            <div className="flex justify-center items-center">
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
            </div></>
    }
    return (
        <div className="grid md:grid-cols-3 gap-10 my-20">
            {
                courses.map(course => <>
                    <div key={course._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={course.class_image} alt="classes-img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {course.class_name}
                                <div className="badge text-xl text-blue-400">${course?.price}</div>
                            </h2>
                            <p>Instructor Name: {course.instructor_name
                            }</p>
                            <div className="card-actions justify-between items-center">
                                <div className="badge text-base font-bold">Available Seat: {course.available_seat}</div>
                                <div onClick={handleSelect} className="btn">Select</div>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default Classes;