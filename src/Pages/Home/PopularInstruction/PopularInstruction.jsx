
import usePopularInstructor from "../../../hooks/usePopularInstructor";

const PopularInstruction = () => {
    const [populaIns] = usePopularInstructor();
    return (
        <div>
            <h1 className="text-4xl text-center mt-8">Popular Instruction</h1>
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-10 py-10">
            {
                populaIns.slice(0, 6).map(instructor =>
                    <div key={instructor._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="h-[200px]" src={instructor.activites_img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <img className="w-16 h-16 -mt-16 rounded-full" src={instructor.instructor_image} alt="" />
                            <h2 className="card-title">{instructor.instructor_name}</h2>
                            <p>{instructor?.class_taught}</p>
                            <div className="card-actions justify-end">
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        </div>
    );
};

export default PopularInstruction;