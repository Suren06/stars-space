import { FaSearch } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { PiSignInBold } from "react-icons/pi";

import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <header className="shadow-md bg-slate-200">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        <Link to="/">
          <h1 className="flex flex-wrap gap-1 text-sm font-bold sm:text-xl">
            <span className="text-slate-500">Suren </span>
            <span className="text-slate-700"> Estate</span>
          </h1>
        </Link>
        <form className="flex items-center p-3 mt-3 rounded-lg bg-slate-100">
          <input
            type="text"
            placeholder="Search.."
            className="w-24 bg-transparent focus:outline-none sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        <ul className="flex gap-4 ">
          <Link to="/" className="">
            <li
              className={`flex items-center gap-[3px] px-2 hover:bg-gray-300 rounded-lg  cursor-pointer py-2 font-semibold text-slate-600 border-b-[3px] 
              border-b-transparent hover:text-blue-700 ${
                pathMatchRoute("/") && "text-blue-700 border-b-blue-700"
              }`}
            >
              <BiHome size="16px" />
              Home
            </li>
          </Link>

          <Link to="/about" className="inline-flex">
            <li
              className={`flex items-center gap-[3px] px-2 hover:bg-gray-300 rounded-lg cursor-pointer py-2 font-semibold text-slate-600 border-b-[3px]
               border-b-transparent hover:text-blue-700 ${
                 pathMatchRoute("/about") && "text-blue-700 border-b-blue-700"
               }`}
            >
              <TbArrowRoundaboutRight size="16px" />
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li
              className={`flex items-center gap-[3px] px-2 hover:bg-gray-300 rounded-lg cursor-pointer py-2 font-semibold text-slate-600 border-b-[3px]
               border-b-transparent hover:text-blue-700 ${
                 pathMatchRoute("/sign-in") && "text-blue-700 border-b-blue-700"
               }`}
            >
              <PiSignInBold size="16px" />
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
