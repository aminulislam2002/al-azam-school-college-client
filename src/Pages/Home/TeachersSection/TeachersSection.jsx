import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdCall } from "react-icons/md";

import image1 from "../../../assets/image/teacher/principal.jpg";
import image2 from "../../../assets/image/teacher/md-sharif-hossen.jpg";
import image3 from "../../../assets/image/teacher/md-alamgir.jpg";
import image4 from "../../../assets/image/teacher/sahin.jpg";

const TeachersSection = () => {
  const [showAllTeachersData, setShowAllTeachersData] = useState(false);
  const [teachersData, setTeachersData] = useState([]);

  const allTeachersDataHere = [
    {
      id: 1,
      image: image1,
      name: "এ.কে.এম আব্দুল আহাদ",
      position: "অধ্যক্ষ",
      mobileNumber: "+880 1715-356338",
      email: "abdulahadphs@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 2,
      image: image2,
      name: "মো: শরীফ হোসেন",
      position: "সহকারী শিক্ষক (ব্যবসায় শিক্ষা)",
      mobileNumber: "+01877-686899",
      email: " sharifhossen.info@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 3,
      image: image3,
      name: "মো. আলমগীর",
      position: "সহকারী শিক্ষক, কৃষি শিক্ষা",
      mobileNumber: "+880 1719-351581 ",
      email: "examplemail@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 4,
      image: image4,
      name: "শাহীন আহমদ",
      position: "কম্পিউটার ল্যাব অপারেটর",
      mobileNumber: "+880 1575-586028",
      email: "srdl.alazam.clo@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 5,
      name: "মাওঃমোঃ নাসির উদ্দিন",
      position: "সহঃ মৌলভী",
      mobileNumber: "০১৭৪৫৪৬৪৫১৬",
      email: "examplemail@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 6,
      name: "মাঃ মোঃ রুহুল আমিন",
      position: "সহঃ মৌলভী",
      mobileNumber: "০১৭৫৯৬৩৮৬৯৮",
      email: "examplemail@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 7,
      name: "মোঃ শহিদুল ইসলাম",
      position: "সহঃ শিক্ষক",
      mobileNumber: "০১৭১৪৯০৬৪৪৯",
      email: "examplemail@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 8,
      name: "খালেদা আক্তার",
      position: "I.C.T",
      mobileNumber: "০১৭৭৭৫৩১১২১",
      email: "examplemail@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 9,
      name: "আচমা আক্তার",
      position: "সহঃ শিক্ষক",
      mobileNumber: "০১৬৩৮৭৬০৫৩২",
      email: "examplemail@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 10,
      name: "আবু সাইদ বাকি-বিল্লাহ",
      position: "এবঃ প্রধান",
      mobileNumber: "০১৭৯৮৫৫৬১১২",
      email: "examplemail@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 11,
      name: "মোঃ মশিউর রহমান",
      position: "জুনিয়র শিক্ষক",
      mobileNumber: "০১৭৫৪১৬৬৮৩২",
      email: "examplemail@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 12,
      name: "মোঃ আব্বাস মিয়া",
      position: "এবঃ কারী",
      mobileNumber: "০১৭৪৭৭৩১৪৩৪",
      email: "examplemail@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 13,
      name: "মোঃ জসিম উদ্দিন",
      position: "অফিস সহঃ",
      mobileNumber: "",
      email: "examplemail@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
  ];

  const dataToShow = showAllTeachersData ? teachersData : teachersData.slice(0, 8);

  const handleSeeMoreClick = () => {
    setShowAllTeachersData(true);
  };

  const handleSeeLessClick = () => {
    setShowAllTeachersData(false);
  };

  useEffect(() => {
    setTeachersData(allTeachersDataHere);
  }, []);

  return (
    <div className="container mx-auto py-10 lg:py-20">
      <div className="w-full lg:w-6/12 mx-auto py-3 mb-10 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center text-white">MEET OUR TEACHERS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataToShow.map((teacher) => (
          <div
            key={teacher.id}
            className="lg:bg-blue-100 text-gray-800 hover:bg-blue-200 hover:text-gray-900 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="bg-blue-200 rounded p-10 lg:p-2 mx-auto">
              {teacher.image ? (
                <>
                  <img src={teacher?.image} className="w-full lg:h-52 h-60" alt="Teacher" />
                </>
              ) : (
                <>
                  <BiSolidUserRectangle className="w-full h-40 object-cover rounded-full" />
                </>
              )}
            </div>
            <h2 className="lg:text-lg font-semibold mt-4 text-gray-900">{teacher.name}</h2>
            <p className="text-sm text-gray-600">{teacher.position}</p>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <FaHome className="text-blue-500 text-lg" />
                <a
                  href={`https://www.google.com/maps/search/?q=${encodeURIComponent(teacher.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  {teacher.address}
                </a>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <MdCall className="text-green-500 text-lg" />
                <a href={`tel:${teacher.mobileNumber}`} className="text-sm">
                  {teacher.mobileNumber}
                </a>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <AiOutlineMail className="text-yellow-500 text-lg" />
                <a href={`mailto:${teacher.email}`} className="text-sm">
                  {teacher.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        {!showAllTeachersData ? (
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-950 w-full lg:w-6/12 mx-auto py-3 font-semibold text-base rounded-lg shadow-md"
            onClick={handleSeeMoreClick}
          >
            VIEW ALL TEACHERS
          </button>
        ) : (
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-950 w-full lg:w-6/12 mx-auto py-3 font-semibold text-base rounded-lg shadow-md"
            onClick={handleSeeLessClick}
          >
            SEE LESS...
          </button>
        )}
      </div>
    </div>
  );
};

export default TeachersSection;
