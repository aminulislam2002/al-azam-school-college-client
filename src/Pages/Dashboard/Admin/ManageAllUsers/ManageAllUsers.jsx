import { FcViewDetails } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ManageAllUsers = () => {
  const { data: allUsers = [], refetch } = useQuery(["allUsers"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  console.log(allUsers);

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/deleteUser/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Delete Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
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
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">Manage all users</h1>
      </div>

      <div>
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>#</th>
              <td>Name</td>
              <td>Email</td>
              <td>company</td>
              <td>location</td>
              <td>Role</td>
              <td>Details</td>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>{user?.role}</td>
                <td>
                  <div>
                    <button>
                      <FcViewDetails className="w-5 h-5"></FcViewDetails>
                    </button>
                  </div>
                </td>
                <th>
                  <div>
                    <button onClick={() => handleDeleteUser(user._id)}>
                      <MdDelete className="w-5 h-5 text-red-500"></MdDelete>
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllUsers;
