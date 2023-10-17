import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center relative min-h-screen bg-gray-50 dark:bg-gradient-to-bl  dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 bg-gradient-to-bl from-rose-100 to-teal-100 px-4 lg:px-6 py-2.5 dark:bg-gray-800"> 
      <Navbar/> 

      <section className="">
        <div className="gap-8 items-center sm:pt-0 pt-14 py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full " src="/c.svg" alt="dashboard image" />
            <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Let's keep our Schedule organized.</h2>
                <p className="mb-6 font-light text-gray-900 md:text-lg dark:text-gray-400">Mern calendar is a tool that allows you to organize your life easily and efficiently. You can create events, reminders, appointments, tasks and much more, and synchronize them with all your devices. It helps you never miss anything important.</p>
                <span onClick={()=>navigate("/auth")} className="inline-flex items-center bg-blue-600 text-white dark:text-black dark:bg-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                    Get started
                    <svg className="ml-2 Mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </span>
            </div>
        </div>
      </section>
    </div> 
    
  )
};
