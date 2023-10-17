import { useNavigate } from "react-router-dom"

export const Navbar = () => {
	const navigate = useNavigate()
	return (
	<header className="absolute w-full left-0 top-0">
	    <nav className="border-gray-200 px-4 lg:px-6 py-2.5 ">
	        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
	            <span className="flex items-center">
	                <img src="/calendar.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
	                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MERN Calendar</span>
	            </span>
	            <div className="flex items-center lg:order-2">
	                <span onClick={()=>navigate("/auth")}  className="text-black dark:text-white font-bold hover:bg-white focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-gray-800">Login</span>

	            </div>
	            
	        </div>
	    </nav>
	</header>
)}