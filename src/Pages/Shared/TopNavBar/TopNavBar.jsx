import { BsFillPersonPlusFill, BsPersonFillLock, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaUserCircle } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const TopNavBar = () => {
  return (
    <div>
      <div className="bg-blue-500 text-white grid grid-cols-1 lg:grid-cols-2 py-1 px-2">
        <div className="flex justify-start items-center gap-5">
          <div className="flex justify-between lg:justify-center items-center gap-1">
            <IoMdCall></IoMdCall> <span className="text-xs md:text-sm">+880 1715-356338</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <MdEmail></MdEmail> <span className="text-xs md:text-sm">alazamhighschoolandcollege@gmail.com</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-end items-center gap-1 md:gap-5">
            <IoLogoWhatsapp></IoLogoWhatsapp>
            <FaFacebook></FaFacebook>
            <AiFillInstagram></AiFillInstagram>
            <AiFillTwitterCircle></AiFillTwitterCircle>
            <BsYoutube></BsYoutube>
          </div>
          <div className="flex justify-end items-center gap-10">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="">
                <div className="flex justify-center items-center gap-1">
                  <BsFillPersonPlusFill></BsFillPersonPlusFill> <span>Register</span>
                </div>
              </label>
              <div tabIndex={0} className="dropdown-content z-[1] p-2 shadow rounded-box w-48  mt-1 bg-blue-950 text-white">
                <div className="">
                  <button className="w-full btn btn-sm mb-1">Student Login</button>
                  <button className="w-full btn btn-sm">Teacher Login</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <BsPersonFillLock></BsPersonFillLock> <span>Log In</span>
            </div>
            <div className="">
              <div>
                {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                <FaUserCircle></FaUserCircle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
