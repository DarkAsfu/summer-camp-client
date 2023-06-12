import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const InstructorClass = () => {
    const { user } = useContext(AuthContext);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await fetch(
                    `https://summer-camp-server-darkasfu.vercel.app/courses/instructor/${user.email}`
                );
                const data = await response.json();
                setClasses(data);
            } catch (error) {
                console.error("Error fetching classes:", error);
            }
        };

        console.log(user.email);
        fetchClasses();
    }, [user.email]);


    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-4">My Classes</h2>
            {classes.length === 0 ? (
                <p>No classes added yet.</p>
            ) : (
                <div className="overflow-x-auto w-full mt-10 md:mt-0">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Course Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Enrolled Student</th>
                                <th>Feedback</th>
                                <th>Upadate</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                classes.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.class_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.class_name}
                                    </td>
                                    <td className="text-start">${item.price}</td>
                                    <td className="badge h-full my-auto mt-4">
                                        {item.status}
                                    </td>
                                    <td className="text-center">
                                        {item.enrolled_student}
                                    </td>
                                    <td className="">
                                        {
                                            !(item.status === 'pending' || item.status === 'approve') &&
                                            <h2>{item.feedback}</h2>
                                        }
                                    </td>
                                    <td className="">
                                        <button className="btn">update</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default InstructorClass;
