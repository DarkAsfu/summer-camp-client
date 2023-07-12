import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faNetworkWired, faPlay, faHeadset } from '@fortawesome/free-solid-svg-icons'
/**
 * 
 * className="text-slate-100 w-24 h-24 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
 */
const Chosse = () => {
	return (
		<div className='bg-gray-100 px-10'>
			<h2 className='pt-24 text-4xl font-semibold'><span className='bg-blue-600 rounded-full px-3 py-1 text-white'>W</span>hy Choose Us?</h2>
			<div className='pt-12 md:py-24 grid grid-cols-1 md:grid-cols-4 gap-8'>
				<div className='bg-blue-500 pb-1 pr-1 hover:rotate-2 transition-all'>
					<div className="bg-white group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-md rounded-sm">
						<div className="h-36 text-center py-4 w-48 mx-auto">
							<FontAwesomeIcon className="text-slate-100 w-24 h-24 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" icon={faBell} />
						</div>
						<div className="absolute inset-0 flex translate-y-[10%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
							<h1 className="font-dmserif text-2xl font-semibold text-slate-950 ">Exclusive Offers</h1>
						</div>
					</div>
				</div>
				<div className='bg-blue-500 pb-1 pr-1 hover:rotate-2 transition-all'>
					<div className="bg-white group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-md rounded-sm">
						<div className="h-36 text-center py-4 w-48 mx-auto">
							<FontAwesomeIcon className="text-slate-100 w-24 h-24 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" icon={faPlay} />
						</div>
						<div className="absolute inset-0 flex translate-y-[10%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
							<h1 className="font-dmserif text-2xl font-semibold text-slate-950 ">Easy to Start</h1>
						</div>
					</div>
				</div>
				<div className='bg-blue-500 pb-1 pr-1 hover:rotate-2 transition-all'>
					<div className="bg-white group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-md rounded-sm">
						<div className="h-36 text-center py-4 w-48 mx-auto">
							<FontAwesomeIcon className="text-slate-100 w-24 h-24 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" icon={faNetworkWired} />
						</div>
						<div className="absolute inset-0 flex translate-y-[10%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
							<h1 className="font-dmserif text-2xl font-semibold text-slate-950 ">Easy Itegration</h1>
						</div>
					</div>
				</div>
				<div className='bg-blue-500 pb-1 pr-1 hover:rotate-2 transition-all'>
					<div className="bg-white group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-md rounded-sm">
						<div className="h-36 text-center py-4 w-48 mx-auto">
							<FontAwesomeIcon className="text-slate-100 w-24 h-24 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" icon={faHeadset} />
						</div>
						<div className="absolute inset-0 flex translate-y-[10%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
							<h1 className="font-dmserif text-2xl font-semibold text-slate-950 ">Support 24/7<br />Around The Globe.</h1>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default Chosse;