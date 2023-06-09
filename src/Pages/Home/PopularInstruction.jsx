import { useState } from "react";

const PopularInstruction = () => {
    const [instructors, setInstructors] = useState([]);
    fetch('http://localhost:5000/popularInstructor')
        .then(res => res.json())
        .then(data => setInstructors(data))
    return (
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-10 py-10">
            {
                instructors.map(instructor => <>
                    <div key={instructor._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="h-[200px]" src={instructor.activites_img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{instructor.instructor_name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default PopularInstruction;