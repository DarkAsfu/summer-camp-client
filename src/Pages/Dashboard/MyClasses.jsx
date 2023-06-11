import { FaAmazonPay, FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const MyClasses = () => {
    const [cart, refetch] = useCart();
    // const total = cart.reduce((sum, item) => item?.price + sum, 0);
    return (
        <div className="w-full p-4 md:p-0 ">
            {/* <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <button className="btn btn-warning btn-sm">PAY</button>
            </div> */}
            <div className="overflow-x-auto w-full mt-10 md:mt-0">
                <table className="table ">
                    {/* head */}
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
                        {
                            cart.map((item, index) => <tr
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
                                <td>
                                    <button  className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                    <button  className="ml-2 btn">PAY</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;