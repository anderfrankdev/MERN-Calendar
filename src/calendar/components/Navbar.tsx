import { useState } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";

export const Navbar = () => {
  const [usermenu, setUsermenu] = useState<string>("hidden");
  const { logout, user } = useAuthStore();
  const {fullname,email} = user!

  return (
    <nav className="bg-white shadow dark:shadow-none relative dark:bg-gray-900 dark:bg-gradient-to-bl  dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="flex items-center">
          <img src="calendar.svg" className="h-8 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MERN Calendar
          </span>
        </span>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            onClick={() =>
              setUsermenu(usermenu === "hidden" ? "block" : "hidden")
            }
            className="flex mr-3 text-sm rounded-full md:mr-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-10 h-10 dark:hidden rounded-full"
              src="/u.svg"
              alt="user photo"
            />
            <img
              className="w-10 h-10 hidden dark:block rounded-full"
              src="/ud.svg"
              alt="user photo"
            />
          </button>
          {/*Dropdown menu*/}
          <div
            className={`${usermenu} z-50 absolute top-full right-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                {fullname}
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                {email}
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <span
                  onClick={()=>logout()}
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
