import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";


const ClassesCard = ({ course }) => {
    const {class_name, class_image, instructor_name, available_seat, price, _id} = course;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const handleSelect = (course) => {
        console.log(course);
        if(user && user.email){
            const selectItem = {cartItemId: _id, class_name, class_image, instructor_name, price, email: user.email}

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch()
                    Swal.fire(
                        'Welcome!',
                        'Selected your Class!',
                        'success'
                      )
                    fetch(`http://localhost:5000/courses/${_id}`, {
                        method: "PATCH"
                    })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div  className={`card  ${available_seat === 0 ? "bg-red-500" : "bg-base-100"}  shadow-xl`}>
            <figure><img src={class_image} alt="classes-img" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {class_name}
                    <div className="badge text-xl text-blue-400">${price}</div>
                </h2>
                <p>Instructor Name: {instructor_name
                }</p>
                <div className="card-actions justify-between items-center">
                    <div className="badge text-base font-bold">Available Seat: {available_seat}</div>
                    <button onClick={() => handleSelect(course)} disabled={available_seat === 0 || user?.role === "admin" || user?.role === "instructor"} className="btn">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;