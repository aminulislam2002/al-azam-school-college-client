import { useEffect, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllNotices = () => {
  const [allNotices, setAllNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const notices = async () => {
      const res = await fetch("https://al-azam-school-college-server.vercel.app/getAllNotices");
      const data = await res.json();
      const sortedNotices = data.sort((a, b) => new Date(b.publishedDateTime) - new Date(a.publishedDateTime));
      setAllNotices(sortedNotices);
      setIsLoading(false);
    };
    notices();
  }, []);

  const handleDeleteNotice = (id) => {
    fetch(`https://al-azam-school-college-server.vercel.app/deleteNotice/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remainingData = allNotices.filter((n) => n._id != id);
        setAllNotices(remainingData);
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Notice delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to delete an notice!",
          });
        }
      });
  };

  return (
    <div>
      <div className="w-full">
        <div className="text-center mb-5 grid grid-cols-2">
          <div className="w-full lg:w-2/3 mx-auto py-3 bg-green-500">
            <h1 className="text-lg lg:text-2xl text-center uppercase text-white">Manage all notices</h1>
          </div>

          <Link to="/dashboard/addNotice">
            <div className="flex justify-center items-center gap-1 w-1/3 h-10 rounded-full border-2 text-blue-950 hover:text-white border-blue-950 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:border-blue-950">
              <span className="text-xl font-semibold">Add Notice</span>
              <BiMessageAdd className="w-7 h-7 text-green-500"></BiMessageAdd>
            </div>
          </Link>
        </div>

        {isLoading ? (
          <>
            <div className="text-center my-4">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          </>
        ) : (
          <>
            <div className="overflow-y-auto max-h-[70vh]">
              {allNotices.map((notice) => (
                <div key={notice._id} className="notice-list overflow-y-auto max-h-[80vh] bg-white">
                  <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-md transition duration-300 mb-5 flex justify-center items-center">
                    <div className="w-11/12">
                      <h2 className="font-semibold">{notice?.noticeHeadline}</h2>
                      <p className="text-sm text-gray-500 mt-2">
                        Published Date & Time: {notice.publishedDateTime.slice(8, 10)}-{notice.publishedDateTime.slice(5, 7)}
                        -{notice.publishedDateTime.slice(0, 4)} {notice.publishedDateTime.slice(11, 16)}
                      </p>
                      <Link to={`/notice/${notice._id}`}>
                        <button className="mt-3 px-4 py-2 rounded-full border-2 text-blue-950 hover:text-white border-blue-950 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:border-blue-950">
                          Read More
                        </button>
                      </Link>
                    </div>
                    <div className="w-1/12">
                      <div className="flex flex-col-reverse justify-center items-center gap-10">
                        <button onClick={() => handleDeleteNotice(notice?._id)}>
                          <MdDelete className="w-8 h-8 text-red-500"></MdDelete>
                        </button>
                        <Link to={`update-notice/${notice._id}`}>
                          <button>
                            <FiEdit className="w-7 h-7 text-blue-500"></FiEdit>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllNotices;
