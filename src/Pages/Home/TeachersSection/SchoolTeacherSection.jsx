import { useEffect, useState } from "react";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdCall } from "react-icons/md";

import image1 from "../../../assets/image/teacher/principal.jpg";
import image2 from "../../../assets/image/teacher/md-sharif-hossen.jpg";
import image3 from "../../../assets/image/teacher/md-alamgir.jpg";
import image4 from "../../../assets/image/teacher/sahin.jpg";

const SchoolTeacherSection = () => {
  const [schoolTeachersData, setSchoolTeachersData] = useState([]);

  const data = [
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
      name: "শ্যামল কান্তি ঘোষ",
      position: "সহকারী প্রধান শিক্ষক",
      mobileNumber: "01719428097",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 7,
      image: image2,
      name: "মো: শরীফ হোসেন",
      position: "সহকারী শিক্ষক (ব্যবসায় শিক্ষা)",
      mobileNumber: "+01877-686899",
      email: " sharifhossen.info@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 8,
      image: image3,
      name: "মো. আলমগীর",
      position: "সহকারী শিক্ষক, কৃষি শিক্ষা",
      mobileNumber: "+880 1719-351581 ",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 9,
      name: "নাসিমা খাতুন",
      position: "সহকারী শিক্ষক (বাংলা) ",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 10,
      name: "নজরুল ইসলাম",
      position: "সহকারী শিক্ষক (ইংরেজি)",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 11,
      name: "মোঃ শরীফ হোসেন",
      position: "সহকারী শিক্ষক (ব্যবসায় শিক্ষা)",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 12,
      name: "মরিয়ম বেগম",
      position: "সহকারী শিক্ষক (আইসিটি)",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 13,
      name: "মোঃ নাজিম উদ্দিন",
      position: "সহকারী শিক্ষক (ইসলাম ধর্ম)",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 14,
      name: "ফারুক হোসেন",
      position: "সহকারী শিক্ষক (শারীরিক শিক্ষা )",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 15,
      image: image4,
      name: "শাহীন আহমদ",
      position: "কম্পিউটার ল্যাব অপারেটর",
      mobileNumber: "+880 1575-586028",
      email: "srdl.alazam.clo@gmail.com",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 16,
      name: "মোঃ রেজাউল করিম",
      position: "সহকারী গ্রন্থাগারিক কাম ক্যাটালগার",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 17,
      name: "সীতা দেব",
      position: "অফিস সহকারী কাম-হিসাব সহকারী",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
    {
      id: 18,
      name: "খাইরুল ইসলাম",
      position: "অফিস সহকারী",
      mobileNumber: "",
      email: "",
      address: "বিশ্বনাথ, সিলেট",
    },
  ];

  useEffect(() => {
    setSchoolTeachersData(data);
  }, []);

  return (
    <div className="container mx-auto py-5 lg:py-10">
      <div className="w-full lg:w-6/12 mx-auto py-3 mb-10 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center text-white uppercase">MEET OUR School Teachers</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {schoolTeachersData.map((empolyee) => (
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

export default SchoolTeacherSection;
