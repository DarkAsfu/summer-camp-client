import useCourse from "../../../hooks/useCourse";


const PopularCourse = () => {
    const [courses] = useCourse();
    const sortedCourses = courses.sort(
        (a, b) => b.number_of_students - a.number_of_students
      );
    return (
        <div className="grid md:grid-cols-3 md:gap-10 bg-blue-100 opacity-80 px-4 gap-y-6 md:px-10 py-10 md:py-24">
            {
                sortedCourses.slice(0,6).map(course =>
                    <div key={course._id} className="card glass">
                        <figure><img className="" src={course.class_image} alt="course thumbnail" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{course.class_name}</h2>
                            <p>Number of student: {course.number_of_students}</p>
                            <div className="card-actions justify-end">
                                <button className="btn ">Learn now!</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default PopularCourse;