import useCourse from "../../../hooks/useCourse";


const PopularCourse = () => {
    const [courses] = useCourse();
    const sortedCourses = courses.sort(
        (a, b) => b.number_of_students - a.number_of_students
    );
    return (
    <div className="bg-gray-200 opacity-80 -mt-1.5">
        <h2 className='text-4xl font-bold text-center pt-20'><span className='bg-blue-600 rounded-full px-3 py-1.5 text-white'>P</span>opular Courses</h2>
        <div className="grid md:grid-cols-3 md:gap-10 pt-5 px-4 gap-y-6 md:px-10 py-10 md:py-24">

            {
                sortedCourses.slice(0, 6).map(course =>
                    <div key={course._id} className="card glass bg-white">
                        <figure><img className="" src={course.class_image} alt="course thumbnail" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{course.class_name}</h2>
                            <p>Number of student: {course.number_of_students}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-blue-700 text-white border-0">Learn now!</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>

    );
};

export default PopularCourse;