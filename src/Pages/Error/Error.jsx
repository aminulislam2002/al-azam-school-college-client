import { Link } from "react-router-dom";

import logo from "../../assets/image/logo/instituteLogo.png";
import { BsArrowRightShort } from "react-icons/bs";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mx-auto w-1/2 mt-6 flex justify-center items-center">
        <img src={logo} alt="Image" className="rounded-lg w-72 h-72" />
      </div>
      <div className="text-center text-blue-950 mt-8">
        <h2 className="text-xl md:text-3xl lg:text-5xl pt-3">Opps!</h2>
        <p className="text-lg lg:text-xl pt-3">Connection Lost!</p>
        <div className="text-base md:text-lg lg:text-xl pt-3 flex justify-center items-center">
          <div>Reload to click here</div>
          <span>
            <BsArrowRightShort></BsArrowRightShort>
          </span>
          <Link to="/" className="text-blue-600 hover:text-red-600 hover:underline">
            Al-Azam School and College
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
