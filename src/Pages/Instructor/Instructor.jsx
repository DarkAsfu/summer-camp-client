// import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import usePopularInstructor from "../../hooks/usePopularInstructor";
const Instructor = () => {
    // const [loading, setLoading] = useState(true)
    const [populaIns, loading] = usePopularInstructor();
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
        <div className="mt-20">
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <div className="grid grid-cols-3">
                    {
                        populaIns.map(instructor => <SwiperSlide key={instructor._id}>
                            <div className="card mb-10 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={instructor.instructor_image} alt="intructor Profile" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{instructor.instructor_name}</h2>
                                    <p>Email: {instructor.instructor_email}</p>
                                    {   instructor.class_taught &&
                                        <p >Course Name: <span className=" text-blue-500 font-bold">{instructor.class_taught}</span></p>
                                    }
                                    <div className="card-actions">
                                        <button className="btn">More Details</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Instructor;