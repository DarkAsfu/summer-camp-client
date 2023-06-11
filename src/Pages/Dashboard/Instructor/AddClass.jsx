import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    const onSubmit = (data) => {
        // Handle form submission logic, e.g., send data to API
        // Set status as 'pending'
        data.status = "pending";
        data.enrolled_student = 0;
        console.log(data);
        fetch('http://localhost:5000/courses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-4">Add a Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700">Class Name</label>
                    <input
                        {...register("class_name")}
                        type="text"
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Class Image</label>
                    <input
                        {...register("class_image")}
                        type="text"
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Instructor Name</label>
                    <input
                        {...register("instructor_name")}
                        type="text"
                        value={user.displayName}
                        readOnly
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Instructor Email</label>
                    <input
                        {...register("instructorEmail")}
                        type="email"
                        value={user.email}
                        readOnly
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Available Seats</label>
                    <input
                        {...register("available_seat")}
                        type="number"
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        {...register("price")}
                        type="number"
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="btn rounded py-2 px-4"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddClass;
