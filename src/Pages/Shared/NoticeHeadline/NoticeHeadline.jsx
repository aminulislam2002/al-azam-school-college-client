import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBaseURL from "../../../Hooks/useBaseURL";

const NoticeHeadline = () => {
  const [noticesData, setNoticesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url] = useBaseURL();

  useEffect(() => {
    const notices = async () => {
      const res = await fetch(`${url}/getAllNotices`);
      const data = await res.json();
      const sortedNotices = data.sort((a, b) => new Date(b.publishedDateTime) - new Date(a.publishedDateTime));
      setNoticesData(sortedNotices);
      setIsLoading(false);
    };
    notices();
  }, []);

  return (
    <div className="bg-gray-800 flex text-white h-10">
      <div className="bg-blue-800 w-3/12 md:w-2/12 lg:w-1/12 h-full flex justify-end items-center">
        <div className="text-lg font-bold mr-5 pr-2 border-r-2">Notice</div>
      </div>
      {isLoading ? (
        <>
          <div className="text-center my-4">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          <div className="bg-blue-600 w-9/12 md:w-10/12 lg:w-11/12 h-full flex justify-center items-center">
            <marquee className="text-sm lg:text-lg">
              {noticesData.map((notice) => (
                <span key={notice?._id} className="mr-4 lg:mr-10 hover:text-red-500">
                  <Link to={`notice/${notice._id}`}>{notice?.noticeHeadline}</Link>
                </span>
              ))}
            </marquee>
          </div>
        </>
      )}
    </div>
  );
};

export default NoticeHeadline;
