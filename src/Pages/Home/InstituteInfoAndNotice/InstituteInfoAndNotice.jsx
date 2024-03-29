import { IoIosPeople, IoMdPeople } from "react-icons/io";
import { FaBookOpenReader, FaGraduationCap, FaUserGraduate } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { useEffect, useState } from "react";
import useBaseURL from "../../../Hooks/useBaseURL";

const InstituteInfoAndNotice = () => {
  const [allNotices, setAllNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url] = useBaseURL();

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch(`${url}/getAllNotices`);
        const data = await res.json();
        const sortedNotices = data.sort((a, b) => new Date(b.publishedDateTime) - new Date(a.publishedDateTime));
        setAllNotices(sortedNotices);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching notices:", error);
        setIsLoading(false);
      }
    };

    fetchNotices();
  }, [url]);

  const iconStyles = {
    fontSize: "2rem",
    marginRight: "0.5rem",
  };

  const buttonStyles = {
    aboutMadrasah: { color: "#FF5733" },
    admissionContact: { color: "#4287f5" },
    servicesForStudents: { color: "#13c608" },
    teachersStaffs: { color: "#ff00ff" },
    results: { color: "#ff9900" },
    managingCommittee: { color: "#0066cc" },
  };

  return (
    <div className="container mx-auto py-10 lg:py-20">
      <div className="lg:flex flex-col lg:flex-row justify-center items-start gap-5">
        <div className="w-full lg:w-8/12 h-full">
          <div className="grid grid-cols-2 gap-5 bg-white">
            {/* About Madrasah */}
            <div>
              <div className="bg-green-500 lg:px-5 py-4 mb-1">
                <h1 className="lg:text-lg text-center text-white">প্রতিষ্ঠান সম্পর্কে</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <HiMiniBuildingLibrary style={{ ...iconStyles, ...buttonStyles.aboutMadrasah }}></HiMiniBuildingLibrary>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/our-lab" className="hover:underline text-sm hover:text-red-500">
                      প্রতিষ্ঠানের ল্যাব সম্পর্কিত তথ্য
                    </Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/our-students" className="hover:underline text-sm hover:text-red-500">
                      প্রতিষ্ঠানের শিক্ষার্থী সম্পর্কে তথ্য
                    </Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/about-land-and-build-information" className="hover:underline text-sm hover:text-red-500">অবকাঠামো সম্পর্কিত তথ্য</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/history-of-institute" className="hover:underline text-sm hover:text-red-500">প্রতিষ্ঠানের পরিচিতি এবং ইতিহাস</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/about-land-and-build-information" className="hover:underline text-sm hover:text-red-500">প্রতিষ্ঠানের জমি সংক্রান্ত তথ্য</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Admission and Contact */}
            <div>
              <div className="bg-green-500 lg:px-5 py-4 mb-1">
                <h1 className="lg:text-lg text-center text-white">ভর্তি ও যোগাযোগ</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <FaBookOpenReader style={{ ...iconStyles, ...buttonStyles.admissionContact }}></FaBookOpenReader>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/onlineApplyForm" className="hover:underline text-sm hover:text-red-500">
                      এসএসসি ভর্তি
                    </Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/onlineApplyForm" className="hover:underline text-sm hover:text-red-500">
                      এইচএসসি ভর্তি
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Services for students */}
            <div>
              <div className="bg-green-500 lg:px-5 py-4 mb-1">
                <h1 className="lg:text-lg text-center text-white">ছাত্রদের জন্য সেবা</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <IoMdPeople style={{ ...iconStyles, ...buttonStyles.servicesForStudents }}></IoMdPeople>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/students-routines" className="hover:underline text-sm hover:text-red-500">ক্লাস রুটিন</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/classes-syllabus" className="hover:underline text-sm hover:text-red-500">ক্লাস সিলেবাস</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/yearly-holyday-information" className="hover:underline text-sm hover:text-red-500">বাৎসরিক ছুটির তালিকা</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/tc-and-transcript" className="hover:underline text-sm hover:text-red-500">টিসি বা প্রংসাপত্র</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/library" className="hover:underline text-sm hover:text-red-500">
                      প্রয়োজনীয় বই সমূহ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Teachers / Staffs */}
            <div>
              <div className="bg-green-500 lg:px-5 py-4 mb-1">
                <h1 className="lg:text-lg text-center text-white">শিক্ষক / কর্মচারী</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <FaUserGraduate style={{ ...iconStyles, ...buttonStyles.teachersStaffs }}></FaUserGraduate>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/college-teachers" className="hover:underline text-sm hover:text-red-500">উচ্চ মাধ্যমিক স্তরের শিক্ষক</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/school-teachers" className="hover:underline text-sm hover:text-red-500">মাধ্যমিক স্তরের শিক্ষক</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/employees" className="hover:underline text-sm hover:text-red-500">কর্মচারীবৃন্দ</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Results */}
            <div>
              <div className="bg-green-500 lg:px-5 py-4 mb-1">
                <h1 className="lg:text-lg text-center text-white">ফলাফল</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <FaGraduationCap style={{ ...iconStyles, ...buttonStyles.results }}></FaGraduationCap>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/result" className="hover:underline text-sm hover:text-red-500">
                      স্কুল/কলেজের বার্ষিক পরীক্ষার ফলাফল
                    </Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link
                      target="_blank"
                      to="http://www.educationboardresults.gov.bd/"
                      className="hover:underline text-sm hover:text-red-500"
                    >
                      এইচএসসি বোর্ড পরীক্ষার ফলাফল
                    </Link>
                  </div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link
                      target="_blank"
                      to="http://www.educationboardresults.gov.bd/"
                      className="hover:underline text-sm hover:text-red-500"
                    >
                      এসএসসি বোর্ড পরীক্ষার ফলাফল
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Managing Committee */}
            <div>
              <div className="bg-green-500 lg:px-5 py-4 mb-1">
                <h1 className="lg:text-lg text-center text-white">ম্যানেজিং কমিটি</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <IoIosPeople style={{ ...iconStyles, ...buttonStyles.managingCommittee }}></IoIosPeople>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-2">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link to="/authority-and-committee" className="hover:underline text-sm hover:text-red-500">কমিটির সদস্যবৃন্দ</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 h-full pt-20 lg:pt-0">
          <div>
            <div className="bg-green-500 lg:px-5 py-4 mb-1">
              <h1 className="text-lg lg:text-2xl text-center text-white">নোটিশ বোর্ড</h1>
            </div>

            {isLoading ? (
              <div className="text-center my-4">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            ) : (
              <div className="notice-list overflow-y-auto max-h-[80vh] bg-white">
                {allNotices.map((notice) => (
                  <div key={notice?._id}>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-md transition duration-300 mb-5 hover:bg-green-500 hover:text-white">
                      <Link to={`/notice/${notice?._id}`} className="hover:underline hover:text-red-500">
                        {notice?.noticeHeadline}
                      </Link>
                      <p className="text-sm mt-2">
                        {notice.publishedDateTime.slice(8, 10)}-{notice.publishedDateTime.slice(5, 7)}-
                        {notice.publishedDateTime.slice(0, 4)} {notice.publishedDateTime.slice(11, 16)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteInfoAndNotice;
