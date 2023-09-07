import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

import "./NavBar.css";

import logo from "../../../assets/image/logo.png";
import { useState } from "react";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const navOptions = (
    <>
      <li className="text-white">
        <Link to="/">Home</Link>
      </li>
      <li
        className={`relative group text-white ${isDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <div className="flex" onClick={toggleDropdown}>
          <p>About Us</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/history-of-madrasah">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">History of Madrasah</li>
            </Link>
            <Link to="/mission-and-vision">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Mission And Vision</li>
            </Link>
            <Link to="/photos-gallery">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Photo Gallery</li>
            </Link>
            <Link to="our-students">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Our Students</li>
            </Link>
            <Link to="authority-and-committee">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Committee</li>
            </Link>
          </ul>
        </div>
      </li>
      <li className="text-white relative group">
        <div className="flex">
          <p>Academics</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48  bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>
      <li className="text-white relative group">
        <div className="flex">
          <p>Admission</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48  bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>
      <li className="text-white relative group">
        <div className="flex">
          <p>Students</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48  bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>
      <li className="text-white relative group">
        <div className="flex">
          <p>Facilities</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48  bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>
      <li className="text-white relative group">
        <div className="flex">
          <p>Result</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48  bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>
      <li className="text-white relative group">
        <div className="flex">
          <p>Others</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48  bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link to="https://bmeb.gov.bd/">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">e S I F</li>
            </Link>
            <Link to="https://bmeb.gov.bd/">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">e F F</li>
            </Link>
            <Link to="https://bmeb.gov.bd/">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">e T I F</li>
            </Link>
            <Link to="https://bmeb.gov.bd/">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">e R P S</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Madrasah Education Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Ministry Of Education</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">National Web Protal</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Dhaka Education Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">National Curriculum Textbook</li>
            </Link>
          </ul>
        </div>
      </li>
    </>
  );

  return (
    <div className="navbar bg-blue-950">
      <div className="navbar-start flex lg:w-2/12">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="text-black"></AiOutlineMenu>
          </label>
          <ul tabIndex={0} className="menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-blue-950 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <div>{/* <img className="w-16 h-16" src={logo} alt="" /> */}</div>
      </div>
      <div className="navbar-center hidden lg:flex justify-center items-center lg:w-8/12">
        {/* Use a mobile-friendly menu icon here for small screens */}
        <div className="lg:hidden">
          <AiOutlineMenu className="text-2xl cursor-pointer" />
        </div>
        <ul className="flex justify-center items-center gap-8 menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end flex justify-end lg:justify-center items-center lg:w-2/12">
        <button className="animated-button">Online Apply</button>
      </div>
    </div>
  );
};

export default NavBar;
