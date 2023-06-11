import useCourse from "../../hooks/useCourse";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";
import React from "react";

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
                courses.map((course) => (
                    <React.Fragment key={course._id}>
                        {course.status === 'approve' && (
                            <ClassesCard  course={course} />
                        )}
                    </React.Fragment>
                ))
            }


        </div>
    );
};

export default Classes;