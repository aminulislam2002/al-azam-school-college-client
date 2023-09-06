import { MdOutlineFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

import { Link } from "react-router-dom";

const MainFooter = () => {
  const logo =
    "https://img.freepik.com/free-vector/quran-design-ramadan-kareem_1394-247.jpg?size=626&ext=jpg&ga=GA1.1.235952763.1681062999&semt=ais";
  return (
    <div>
      <footer className="footer p-10 bg-gray-900 text-white ">
        <div className="flex items-center">
          <img className="w-20 h-20 rounded-full border-2 border-blue-500" src={logo} alt="Madrasah Logo" />
          <div className="ml-4">
            <p className="text-lg font-semibold text-white">Name of Madrasah</p>
            <p className="text-gray-400">Details of Madrasah</p>
          </div>
        </div>

        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>

      <footer className="bg-neutral text-neutral-content py-4">
        <div className="container mx-auto lg:px-52 flex justify-between items-center">
          <p className="text-sm">Copyright © 2023 - All rights reserved</p>
          <div className="flex gap-4">
            <Link className="">
              <MdOutlineFacebook className="w-5 lg:w-10 h-5 lg:h-10 text-blue-500 hover:text-blue-700 transition-colors duration-300" />
            </Link>
            <Link className="">
              <AiFillTwitterCircle className="w-5 lg:w-10 h-5 lg:h-10 text-blue-400 hover:text-blue-600 transition-colors duration-300" />
            </Link>
            <Link className="">
              <AiFillInstagram className="w-5 lg:w-10 h-5 lg:h-10 text-pink-500 hover:text-pink-700 transition-colors duration-300" />
            </Link>
            <Link className="">
              <AiFillYoutube className="w-5 lg:w-10 h-5 lg:h-10 text-red-600 hover:text-red-800 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
