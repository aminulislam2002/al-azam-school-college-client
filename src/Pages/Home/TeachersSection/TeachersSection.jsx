import { useState, useEffect } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaHome, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const TeachersSection = () => {
  const [teachersData, setTeachersData] = useState([]);

  useEffect(() => {
    // Fetch data from teachers.json in the public folder
    fetch("/teachers.json")
      .then((response) => response.json())
      .then((data) => setTeachersData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-6">Meet our Teachers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teachersData.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-lg shadow-md p-6">
              <img src={teacher.photo} alt={teacher.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold">{teacher.name}</h2>
              <p className="text-gray-600">{teacher.position}</p>
              <div className="mt-2">
                <div className="flex justify-start items-center gap-1">
                  <FaHome className="text-blue-500 text-xl" />
                  <span className="text-gray-700">{teacher.address}</span>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-start items-center gap-1">
                  <MdEmail className="text-cyan-500 text-xl" />
                  <span className="text-gray-700">{teacher.email}</span>
                </div>
                <div className="flex justify-start items-center gap-1">
                  <MdCall className="text-green-500 text-xl" />
                  <span className="text-gray-700">{teacher.mobileNumber}</span>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-center items-center space-x-4">
                  <button className="flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                    <FaWhatsappSquare className="text-xl" />
                    WhatsApp
                  </button>
                  <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    <BsFacebook className="text-xl" />
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachersSection;
