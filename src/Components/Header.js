import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AiOutlineProfile } from "react-icons/ai";
import { MdTransferWithinAStation } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  const[navy, setNavy] = useState(false);
  const handleClickShow = () => {
    show ? setShow(false) : setShow(true);
  };
  return (
    <div className="h-16 w-full bg-gradient-to-t from-black via-gray-700 to-gray-800 flex justify-between items-center fixed">
      <h1 className="text-3xl font-extrabold font-serif text-red-800 ml-4 max-sm:text-2xl">
        MovieApp
      </h1>

      <ul className="flex space-x-6 font-semibold mr-52 max-md:hidden text-white text-xl">
        <li className="hover:text-sky-200 hover:underline transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-sky-200 hover:underline transition duration-300">
          <Link to="/nowPlaying">Now Playing</Link>
        </li>
        <li className="hover:text-sky-200 hover:underline transition duration-300">
          <Link to="/popular">Popular</Link>
        </li>
        <li className="hover:text-sky-200 hover:underline transition duration-300">
          <Link to="/topRated">Top Rated</Link>
        </li>
        <li className="hover:text-sky-200 hover:underline transition duration-300">
          <Link to="/upcoming">Upcoming</Link>
        </li>
      </ul>


      <div
        onClick={()=>{setNavy(!navy)}}
        className="cursor-pointer z-10 text-white md:hidden"
      >
        {navy ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {navy && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className="hover:text-sky-200 hover:underline transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-sky-200 hover:underline transition duration-300">
            <Link to="/nowPlaying">Now Playing</Link>
          </li>
          <li className="hover:text-sky-200 hover:underline transition duration-300">
            <Link to="/popular">Popular</Link>
          </li>
          <li className="hover:text-sky-200 hover:underline transition duration-300">
            <Link to="/topRated">Top Rated</Link>
          </li>
          <li className="hover:text-sky-200 hover:underline transition duration-300">
            <Link to="/upcoming">Upcoming</Link>
          </li>
        </ul>
      )}


      <div className="pr-2 flex">
        <img
          className="h-12 rounded-full"
          src="https://media.licdn.com/dms/image/C5603AQGru8ysAQlXJg/profile-displayphoto-shrink_400_400/0/1668098308327?e=1703116800&v=beta&t=A34z2JyBdN1-S2xv4aXboIKPQvWatDfCk2FvaqjTNIc"
          alt=""
        ></img>
        
        <div onClick={handleClickShow} className="text-3xl m-2 text-white">
          {!show ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
          {show && (
            <div className="w-50 h-60 bg-black bg-opacity-70 cursor-pointer absolute right-10 top-24">
              <ul className="p-2 text-sm">
                <li className="flex p-2 hover:underline">
                  <AiOutlineProfile className="mx-2 my-1" />
                  <span>Manage Profile</span>
                </li>
                <li className="flex p-2 hover:underline ">
                  <MdTransferWithinAStation className="mx-2 my-1" />
                  <span>Transfer Profile </span>
                </li>
                <li className="flex p-2 hover:underline">
                  <RiAccountBoxLine className="mx-2 my-1" />
                  <span>Account</span>
                </li>
                <li className="flex p-2 hover:underline">
                  <BiHelpCircle className="mx-2 my-1" />
                  <span>Help Center</span>
                </li>
              </ul>
              <p className="text-sm pl-5 hover:underline border-t-2 border-gray-800 pt-4">
                Sign Out
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
