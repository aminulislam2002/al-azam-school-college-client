import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBaseURL from "../../../Hooks/useBaseURL";

const ViewNotice = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [url] = useBaseURL();

  useEffect(() => {
    const fetchNotice = async () => {
      const response = await fetch(`${url}/getNoticeById/${id}`);
      const data = await response.json();
      setNotice(data);
      setIsLoading(false);
    };
    fetchNotice();
  }, [url]);

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {isLoading ? (
          <>
            <div className="text-center my-4">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-lg lg:text-3xl font-semibold mb-4">{notice.noticeHeadline}</h1>
            <p className="text-sm py-1">
              <span className="text-gray-600 mr-2">Notice Published on</span>
              <span className="text-blue-500 font-semibold">{new Date(notice.publishedDateTime).toLocaleDateString()}</span>
              <span className="px-2 text-gray-600">at</span>
              <span className="text-green-500 font-semibold">{new Date(notice.publishedDateTime).toLocaleTimeString()}</span>
            </p>
            <div className="text-gray-800 text-justify" style={{ lineHeight: "2.0" }}>
              <span className="font-bold text-lg text-blue-950">Description: </span>
              {notice.noticeDescription}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewNotice;
