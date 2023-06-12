import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClasses = () => {
    const [cart, refetch] = useCart();
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full p-4 md:p-0 ">
            <div className="overflow-x-auto w-full mt-10 md:mt-0">
                <table className="table ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.class_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.class_name}</td>
                                <td className="text-start">${item.price}</td>
                                <td className="">
                                    <button onClick={() => handleDelete(item)} className="btn bg-red-900 text-white">
                                        <FaTrashAlt />
                                    </button>
                                    <Link to={`/dashboard/payment/${item.price}`}>
                                        <button className="btn btn-sm mt-1">PAY</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;
