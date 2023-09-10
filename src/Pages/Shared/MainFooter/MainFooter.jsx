import { MdEmail, MdLocationOn, MdOutlineFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/madrasah-logo.png";
import { IoMdCall } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

import futureGenMediaLogo from "../../../assets/photogallery/FutureGen_Media_Agency-removebg-preview.png";

const MainFooter = () => {
  return (
    <div>
      {/* Footer for Large Screens */}
      <footer className="text-white lg:pt-20 pb-10 bg-blue-950 hidden lg:block">
        <div className="grid grid-cols-12">
          {/* Left Section */}
          <div className="col-span-3 p-6">
            <img className="w-20 h-20 rounded-full border-2 border-blue-500 mx-auto" src={logo} alt="Madrasah Logo" />
            <p className="text-lg font-semibold text-green-500 text-center mt-4">Al-Azam High School and College</p>
            <div className="mt-2">
              <IoMdCall className="w-4 h-4 text-green-500 inline-block"></IoMdCall>{" "}
              <span className="text-sm lg:text-base">01715-356338</span>
            </div>
            <div className="mt-2">
              <MdEmail className="w-4 h-4 text-green-500 inline-block"></MdEmail>
              <span className="lg:text-sm text-base">alazamhighschoolandcollege@gmail.com</span>
            </div>
            <div className="mt-2">
              <MdLocationOn className="w-4 h-4 text-green-500 inline-block"></MdLocationOn>
              <span className="lg:text-sm text-base">Amtoil, Bishwanath. Sylhet, Bangladesh</span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="col-span-5 p-6">
            <span className="footer-title text-xl block mb-4">Quick Links</span>
            <div className="flex justify-around items-start">
              <div className="mt-2">
                <a className="link link-hover block text-base py-1">DSHE</a>
                <a className="link link-hover block text-base py-1">BANBEIS</a>
                <a className="link link-hover block text-base py-1">BD National Portal</a>
                <a className="link link-hover block text-base py-1">Ministry of Education</a>
              </div>
              <div className="mt-2">
                <a className="link link-hover block text-base py-1">Sylhet Board</a>
                <a className="link link-hover block text-base py-1">Primary & Mass Education</a>
                <a className="link link-hover block text-base py-1">Form of BD. Govt</a>
                <a className="link link-hover block text-base py-1">Pathshala EIMS</a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2 p-6">
            <span className="footer-title text-xl block mb-4">Legal</span>
            <div className="mt-2">
              <a className="link link-hover block text-base py-1">Terms of Use</a>
              <a className="link link-hover block text-base py-1">Privacy Policy</a>
              <a className="link link-hover block text-base py-1">Cookie Policy</a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="col-span-2 p-6">
            <span className="footer-title text-xl block mb-4">Follow us</span>
            <div className="mt-2 flex justify-center items-start gap-4">
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100085129436280&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                >
                  <MdOutlineFacebook className="w-6 h-6 lg:w-8 lg:h-8" />
                </a>
              </div>
              <div>
                <Link to="#" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
                  <AiFillTwitterCircle className="w-6 h-6 lg:w-8 lg:h-8" />
                </Link>
              </div>
              <div>
                <Link to="#" className="text-pink-500 hover:text-pink-700 transition-colors duration-300">
                  <AiFillInstagram className="w-6 h-6 lg:w-8 lg:h-8" />
                </Link>
              </div>
              <div>
                <Link to="#" className="text-red-600 hover:text-red-800 transition-colors duration-300">
                  <AiFillYoutube className="w-6 h-6 lg:w-8 lg:h-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer for Mobile and Tablet */}
      <footer className="text-white lg:hidden">
        <div className="p-6">
          <img className="w-20 h-20 rounded-full border-2 border-blue-500 mx-auto" src={logo} alt="Madrasah Logo" />
          <p className="text-lg font-semibold text-green-500 text-center mt-4">Al-Azam High School and College</p>
          <div className="mt-2">
            <IoMdCall className="w-4 h-4 text-green-500 inline-block"></IoMdCall>{" "}
            <span className="text-sm lg:text-base">01715-356338</span>
          </div>
          <div className="mt-2">
            <MdEmail className="w-4 h-4 text-green-500 inline-block"></MdEmail>
            <span className="lg:text-sm text-base">alazamhighschoolandcollege@gmail.com</span>
          </div>
          <div className="mt-2">
            <MdLocationOn className="w-4 h-4 text-green-500 inline-block"></MdLocationOn>
            <span className="lg:text-sm text-base">Amtoil, Bishwanath Upazil. Sylhet, Bangladesh</span>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="p-6">
          <span className="footer-title text-xl block mb-4">Quick Links</span>
          <div>
            <div>
              <a className="link link-hover block text-base py-1">DSHE</a>
              <a className="link link-hover block text-base py-1">BANBEIS</a>
              <a className="link link-hover block text-base py-1">BD National Portal</a>
              <a className="link link-hover block text-base py-1">Ministry of Education</a>
            </div>
            <div>
              <a className="link link-hover block text-base py-1">Sylhet Board</a>
              <a className="link link-hover block text-base py-1">Primary & Mass Education</a>
              <a className="link link-hover block text-base py-1">Form of BD. Govt</a>
              <a className="link link-hover block text-base py-1">Pathshala EIMS</a>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="p-6">
          <span className="footer-title text-xl block mb-4">Legal</span>
          <div className="mt-2">
            <a className="link link-hover block text-base py-1">Terms of Use</a>
            <a className="link link-hover block text-base py-1">Privacy Policy</a>
            <a className="link link-hover block text-base py-1">Cookie Policy</a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="p-6">
          <span className="footer-title text-xl block mb-4">Follow us</span>
          <div className="mt-2 flex justify-center items-start gap-4">
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100085129436280&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                <MdOutlineFacebook className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
            </div>
            <div>
              <Link to="#" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
                <AiFillTwitterCircle className="w-6 h-6 lg:w-8 lg:h-8" />
              </Link>
            </div>
            <div>
              <Link to="#" className="text-pink-500 hover:text-pink-700 transition-colors duration-300">
                <AiFillInstagram className="w-6 h-6 lg:w-8 lg:h-8" />
              </Link>
            </div>
            <div>
              <Link to="#" className="text-red-600 hover:text-red-800 transition-colors duration-300">
                <AiFillYoutube className="w-6 h-6 lg:w-8 lg:h-8" />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Developed By Footer Section */}
      <footer className="bg-blue-950 text-black py-4 text-center">
        <div>
          <img src={futureGenMediaLogo} alt="FutureGen Media Logo" className="w-16 h-16 lg:w-20 lg:h-20 mx-auto rounded-full" />
        </div>
        <div className="text-sm">
          <div className="font-semibold text-lg text-white">Developed By</div>
          <div className="text-green-500 text-2xl lg:text-3xl font-bold">
            <span className="bg-gradient-to-r from-red-400 to-yellow-500 text-transparent bg-clip-text">
              FutureGen Media Agency
            </span>
          </div>
        </div>
        <div>
          <div className="font-semibold text-lg text-white">
            <span>
              <IoCallSharp className="inline-block w-5 h-5 text-green-500 mr-1" />
            </span>
            Helpline Number
          </div>
          <div className="text-green-500">09611-461888</div>
        </div>
      </footer>

      {/* Copyright Section */}
      <footer className="bg-neutral text-neutral-content py-4 text-center">
        <p className="text-sm">Copyright © 2023 - All rights reserved</p>
      </footer>
    </div>
  );
};

export default MainFooter;
