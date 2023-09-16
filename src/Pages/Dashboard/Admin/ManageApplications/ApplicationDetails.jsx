import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiArrowElbowRightBold } from "react-icons/pi";
import { useParams } from "react-router-dom";
import useBaseURL from "../../../../Hooks/useBaseURL";

const ApplicationDetails = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [url] = useBaseURL();

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await fetch(`${url}/getApplicationById/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApplication(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchApplication();
  }, [url, id]);

  const rows = [
    { label: "Name", value: application?.name },
    { label: "Father Name", value: application?.fatherName },
    { label: "Mother Name", value: application?.motherName },
    { label: "Date of Birth", value: application?.birthdayDate },
    { label: "Email", value: application?.email },
    { label: "Mobile Number", value: application?.mobileNumber },
    { label: "Parents Number", value: application?.parentsMobileNumber },
    { label: "Address", value: application?.address },
    { label: "Admission Class", value: application?.admissionClass?.value },
    { label: "Previous Class", value: application?.previousClass?.value },
    { label: "GPA", value: application?.gpa },
    { label: "Passing Year", value: application?.passingYear },
    { label: "SSC Board Roll", value: application?.sscBoardRoll },
    { label: "SSC Reg. Number", value: application?.sscRegNumber },
    { label: "Previous School / College Name", value: application?.previousSchoolName },
  ];

  const headerIcon =
    application?.status === "approve" ? (
      <PiArrowElbowRightBold className="w-5 h-5 text-green-500" />
    ) : (
      <AiOutlineClose className="w-5 h-5 text-red-500" />
    );

  const headerNameColorClass = application?.status === "approve" ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {isLoading ? (
        <>
          <div className="text-center my-4">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4 flex items-center">
            <div className="flex justify-center items-center">
              <div>{headerIcon}</div>
            </div>
            <span className="mr-2">Application Details for</span>
            <span className={`mr-2 ${headerNameColorClass}`}>{application?.name}</span>
          </h1>
          <table className="min-w-full divide-y divide-gray-200">
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-blue-200" : "bg-green-200"}>
                  <td className="px-4 py-2">
                    <strong>{row.label}:</strong>
                  </td>
                  <td className="px-4 py-2">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ApplicationDetails;
