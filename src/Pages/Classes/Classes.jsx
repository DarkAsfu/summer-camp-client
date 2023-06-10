import useCourse from "../../hooks/useCourse";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";

const Classes = () => {
    const [courses, loading] = useCourse();


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
                courses.map(course => <ClassesCard key={course._id} course={course}></ClassesCard>)
            }
        </div>
    );
};

export default Classes;