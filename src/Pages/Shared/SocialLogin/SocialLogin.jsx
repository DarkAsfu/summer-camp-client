
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {

    return (
        <div className="text-center">

            <div className="divider mx-4">OR sign in with </div>
            <div className='flex gap-4 py-2 justify-center items-center mt-4 border mx-4'>
                <FcGoogle className='bg-[#F5F5F8] p-3 text-5xl rounded-full'></FcGoogle>
                <h2 className="text-md font-semibold">Google</h2>
            </div>
        </div>
    );
};

export default SocialLogin;