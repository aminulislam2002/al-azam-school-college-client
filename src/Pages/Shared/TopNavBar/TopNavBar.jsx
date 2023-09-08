import { BsFillPersonPlusFill, BsPersonFillLock, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaUserCircle } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);

  const toggleRegisterDropdown = () => {
    setIsRegisterDropdownOpen(!isRegisterDropdownOpen);
  };

  const closeRegisterDropdown = () => {
    setIsRegisterDropdownOpen(false);
  };

  return (
    <div className="relative z-[20]">
      <div className="bg-blue-500 text-white grid grid-cols-1 lg:grid-cols-2 py-1 px-2">
        <div className="flex justify-start items-center gap-5">
          <div className="flex justify-between lg:justify-center items-center gap-1">
            <IoMdCall></IoMdCall> <span className="text-xs md:text-sm">01715-356338</span>
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
            <div
              className={`relative group text-white ${isRegisterDropdownOpen ? "dropdown-open" : ""}`}
              onMouseEnter={toggleRegisterDropdown}
              onMouseLeave={closeRegisterDropdown}
              onClick={() => {
                if (isRegisterDropdownOpen) {
                  closeRegisterDropdown(); // Close the dropdown
                } else {
                  toggleRegisterDropdown(); // Toggle open the dropdown
                }
              }}
            >
              <div className="flex justify-start items-center">
                <BsFillPersonPlusFill></BsFillPersonPlusFill> <span>Register</span>
              </div>
              <div
                className={`absolute z-50 ${
                  isRegisterDropdownOpen ? "block" : "hidden"
                } top-full w-52 bg-blue-500 p-3 left-1/2 transform -translate-x-1/2`}
              >
                {/* Dropdown content */}
                <ul>
                  <Link to="authentication/student-register">
                    <li className="text-white bg-gray-900 mt-1 hover:bg-white hover:text-black ps-2 rounded flex justify-start items-center">
                      <div className="me-1">
                        <AiOutlinePlus></AiOutlinePlus>
                      </div>
                      <div>Student Register</div>
                    </li>
                  </Link>
                  <Link to="authentication/teacher-register">
                    <li className="text-white bg-gray-900 mt-1 hover:bg-white hover:text-black ps-2 rounded flex justify-start items-center">
                      <div className="me-1">
                        <AiOutlinePlus></AiOutlinePlus>
                      </div>
                      <div>Teacher Register</div>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <Link to="/authentication/login">
              <div className="flex justify-center items-center gap-1">
                <BsPersonFillLock></BsPersonFillLock> <span>Log In</span>
              </div>
            </Link>
            <div className="">
              <Link to="/dashboard/profile">
                {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                <FaUserCircle></FaUserCircle>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
