import { useEffect, useState } from "react";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const EmployeeSection = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const data = [
    {
      id: 1,
      name: "মো: মিজানুর রহমান",
      position: "নিরাপত্তাকর্মী",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 2,
      name: "সুনু মিয়া",
      position: "নৈশপ্রহরী",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },

    {
      id: 3,
      name: "সালিমা বেগম পপি",
      position: "আয়া",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
  ];

  useEffect(() => {
    setEmployeeData(data);
  }, []);

  return (
    <div className="container mx-auto py-5 lg:py-10">
      <div className="w-full lg:w-6/12 mx-auto py-3 mb-10 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center text-white uppercase">MEET OUR EMPOLYEES</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {employeeData.map((empolyee) => (
          <div
            key={empolyee.id}
            className="lg:bg-blue-100 text-gray-800 hover:bg-blue-200 hover:text-gray-900 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="bg-blue-200 rounded p-10 lg:p-2 mx-auto">
              {empolyee.image ? (
                <>
                  <img src={empolyee?.image} className="w-full lg:h-52 h-60" alt="Empolyee" />
                </>
              ) : (
                <>
                  <BiSolidUserRectangle className="w-full lg:h-52 h-60 object-cover rounded-full" />
                </>
              )}
            </div>
            <h2 className="lg:text-lg font-semibold mt-4 text-gray-900">{empolyee.name}</h2>
            <p className="text-sm text-gray-600">{empolyee.position}</p>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <FaHome className="text-blue-500 text-lg" />
                <a
                  href={`https://www.google.com/maps/search/?q=${encodeURIComponent(empolyee.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  {empolyee.address}
                </a>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <MdCall className="text-green-500 text-lg" />
                <a href={`tel:${empolyee.mobileNumber}`} className="text-sm">
                  {empolyee.mobileNumber}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeSection;
