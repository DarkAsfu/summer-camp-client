// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'
const ContatcPage = () => {
    return (
        <div>
            <div className='p-5 md:p-0'>
                <h2 className='text-4xl font-bold mt-32'><span className='bg-blue-600 rounded-full px-3 py-1.5 text-white'>C</span>onnect with us</h2>
                <div className='grid md:grid-cols-3 gap-12 mt-12'>
                    <div className='border p-12 leading-9 text-center hover:border-b-blue-500 transition'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-500 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        <h3 className='text-2xl font-semibold'>Address</h3>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div className='border text-center p-12 leading-9 hover:border-b-blue-500 transition'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-500 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>


                        <h3 className='text-2xl font-semibold'>Phone</h3>
                        <p><span className='font-bold'>Phone:</span> +8801777112564</p>
                    </div>
                    <div className='border text-center p-12 leading-9 hover:border-b-blue-500 transition'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-500 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <h3 className='text-2xl font-semibold'>Email</h3>
                        <p><span className='font-bold'>Email:</span> ashraful.islam0871@gmail.com</p></div>
                </div>
            </div>
            <div className="bg-white text-gray-100 mx-auto">
                <div
                    className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg items-center">
                    <div className="flex flex-col justify-between ">

                        <div className="mt-8 text-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6999580.965858689!2d-105.36810531834661!3d31.06066485284552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2sbd!4v1681895611856!5m2!1sen!2sbd" className='w-11/12' height="500" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="">
                        <div>
                        <h2 className='py-10 text-4xl font-semibold'><span className='bg-blue-600 rounded-full px-3.5 py-1 text-white'>L</span>et's Get In Touch</h2>
                        </div>
                        <div>
                            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="" />
                        </div>
                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" />
                        </div>
                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                            <textarea
                                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="mt-8">
                            <button
                                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContatcPage;