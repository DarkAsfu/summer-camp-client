import { Fade, Slide } from 'react-awesome-reveal';
import slide1 from '../../../assets/banner/slide1.jpg'
import slide2 from '../../../assets/banner/slide2.jpg'
import slide3 from '../../../assets/banner/slide3.jpg'
import slide4 from '../../../assets/banner/slide4.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel max-w-7xl ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={slide1} className="bg-black opacity- w-auto md:w-full h-[700px]" />
                    <div className='absolute w-full h-[700px]  px-14 md:px-24 pt-52  bg-black opacity-60'>
                    <Fade delay={1e3} cascade damping={1e-1}>
                            <h1 className='text-white text-4xl font-bold w-full md:w-2/6'>Teaching Turning
                                Today’s Learners Into
                                Tomorrow’s Leaders</h1>
                        </Fade>
                        <Slide>
                            <div className="flex items-center mt-5">
                            <button className='text-white btn btn-outline mr-4 mt-8 md:mt-0'>Learn More</button>
                            <button className='text-white btn btn-outline '>SignUp Now</button>
                            </div>
                        </Slide>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full h-[700px]" />
                    <div className='absolute w-full h-[700px] -1/4 px-14  md:px-24 pt-52  bg-black opacity-60'>
                        <Fade delay={1e3} cascade damping={1e-1}>
                            <h1 className='text-white text-4xl font-bold w-full md:w-2/6'>Teaching Turning
                                Today’s Learners Into
                                Tomorrow’s Leaders</h1>
                        </Fade>
                        <Slide>
                            <div className="flex items-center mt-5">
                            <button className='text-white btn btn-outline mr-4 mt-8 md:mt-0'>Learn More</button>
                            <button className='text-white btn btn-outline '>SignUp Now</button>
                            </div>
                        </Slide>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide3} className="w-full h-[700px]" />
                    <div className='absolute w-full h-[700px] -1/4 px-14  md:px-24 pt-52  bg-black opacity-60'>
                    <Fade delay={1e3} cascade damping={1e-1}>
                            <h1 className='text-white text-4xl font-bold w-full md:w-2/6'>Teaching Turning
                                Today’s Learners Into
                                Tomorrow’s Leaders</h1>
                        </Fade>
                        <Slide>
                            <div className="flex items-center mt-5">
                            <button className='text-white btn btn-outline mr-4 mt-8 md:mt-0'>Learn More</button>
                            <button className='text-white btn btn-outline '>SignUp Now</button>
                            </div>
                        </Slide>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slide4} className="w-full h-[700px]" />
                    <div className='absolute w-full h-[700px] -1/4 px-14   md:px-24 pt-52  bg-black opacity-60'>
                    <Fade delay={1e3} cascade damping={1e-1}>
                            <h1 className='text-white text-4xl font-bold w-full md:w-2/6'>Teaching Turning
                                Today’s Learners Into
                                Tomorrow’s Leaders</h1>
                        </Fade>
                        <Slide>
                            <div className="flex items-center mt-5">
                            <button className='text-white btn btn-outline mr-4 mt-8 md:mt-0'>Learn More</button>
                            <button className='text-white btn btn-outline '>SignUp Now</button>
                            </div>
                        </Slide>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;