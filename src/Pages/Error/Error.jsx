import { Link } from 'react-router-dom';

const Error = () => {

    return (
            <div className='grid justify-center'>
                <img src="https://i.ibb.co/28jWfmK/000-404.png" alt="" />
                <Link className=' w-36 mx-auto bg-blue-700 hover:bg-blue-900 text-white btn border-0' to='/'>Go to Home</Link>
            </div>
    );
};

export default Error;