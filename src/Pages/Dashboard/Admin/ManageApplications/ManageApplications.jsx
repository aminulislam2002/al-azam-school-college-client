import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageApplications = () => {
  const [allApplicationsData, setAllApplicationsData] = useState([]);

  useEffect(() => {
    const applications = async () => {
      const res = await fetch("http://localhost:5000/getAllApplication");
      const data = await res.json();
      setAllApplicationsData(data);
    };
    applications();
  }, []);

  console.log(allApplicationsData);

  const handleDeleteStudent = (id) => {
    fetch(`http://localhost:5000/deleteApplication/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingData = allApplicationsData.filter((s) => s._id != id);
          setAllApplicationsData(remainingData);
          Swal.fire({
            icon: "success",
            title: "Delete Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to delete!",
          });
        }
      });
  };

  return (
    <div>
      <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">Manage all Applications</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>P Class</th>
              <th>GPA</th>
              <th>P Year</th>
              <th>A Class</th>
              <th>M Number</th>
              <th>Details</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allApplicationsData.map((apply, index) => (
              <tr key={apply._id}>
                <th>{index + 1}</th>
                <td>{apply?.name}</td>
                <td>{apply?.previousClass?.value}</td>
                <td>{apply?.gpa}</td>
                <td>{apply?.passingYear}</td>
                <td>{apply?.admissionClass?.value}</td>
                <td>{apply?.mobileNumber}</td>
                <td>
                  <div>
                    <button className="text-white w-full bg-blue-500">View</button>
                  </div>
                </td>
                <td>
                  <div>
                    <button className="text-white w-1/2 bg-green-500">Approve</button>
                    <button className="text-white w-1/2 bg-red-500">Deny</button>
                  </div>
                </td>
                <td>
                  <div>
                    <button onClick={() => handleDeleteStudent(apply._id)}>
                      <MdDelete className="w-5 h-5 text-red-500"></MdDelete>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageApplications;
