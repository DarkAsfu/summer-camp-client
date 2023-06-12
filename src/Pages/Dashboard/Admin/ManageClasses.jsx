import Swal from "sweetalert2";
import useCourse from "../../../hooks/useCourse";

const ManageClasses = () => {
    const [classes, loading, refetch] = useCourse();
    console.log(classes);
    const handleApprove = (item) =>{
        fetch(`http://localhost:5000/courses/approveStatus/${item._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Appreove done',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <h2>Manage Classes from admin {classes.length}</h2>
            <div className="overflow-x-auto w-full mt-10 md:mt-0">
                <table className="table ">
                    {/* Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).*/}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            
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
                                <td className="text-start">{item.instructor_name}</td>
                                <td className="badge h-full my-auto mt-12">
                                    {item.instructorEmail}
                                </td>
                                <td className="text-center">
                                    {item.price}
                                </td>
                                <td className="text-center">
                                    {item.status}
                                </td>
                                <td className="space-y-2 md:space-y-0 gap-2 flex items-center">
                                    <button onClick={() => handleApprove(item)} className="btn btn-sm" disabled={item.status === 'approve'}>Approve</button>
                                    <button className="btn btn-sm">Deny</button>
                                    <button className="btn btn-sm">Feedback</button>
                                </td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;