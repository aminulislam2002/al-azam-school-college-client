import { FcViewDetails } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ManageStudents = () => {
  const { data: students = [], refetch } = useQuery(["students"], async () => {
    const res = await fetch("http://localhost:5000/users/students?role=student");
    return res.json();
  });

  console.log(students);

  const handleDeleteStudent = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
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
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">Manage all Students</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Class</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id}>
                <th>{index}</th>
                <td>{student?.name}</td>
                <td>{student?.email}</td>
                <td>{student?.fatherName}</td>
                <td>{student?.motherName}</td>
                <td>{student?.class}</td>
                <td>{student?.roll}</td>
                <td>
                  <div>
                    <button>
                      <FcViewDetails className="w-5 h-5"></FcViewDetails>
                    </button>
                    <button onClick={() => handleDeleteStudent(student._id)}>
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

export default ManageStudents;
