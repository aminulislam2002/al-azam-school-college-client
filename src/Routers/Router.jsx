import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profiles from "../Pages/Dashboard/ManageProfiles/Profiles/Profiles";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import Login from "../Pages/Authentications/Login";
import StudentRegister from "../Pages/Authentications/StudentRegister";
import TeacherRegister from "../Pages/Authentications/TeacherRegister";
import ManageAdmins from "../Pages/Dashboard/Admin/ManageAdmins/ManageAdmins";
import ManageTeachers from "../Pages/Dashboard/Admin/ManageTeachers/ManageTeachers";
import ManageStudents from "../Pages/Dashboard/Admin/ManageStudents/ManageStudents";
import ManageAllUsers from "../Pages/Dashboard/Admin/ManageAllUsers/ManageAllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "profile",
        element: <Profiles></Profiles>,
      },
      {
        path: "manageAdmins",
        element: <ManageAdmins></ManageAdmins>,
      },
      {
        path: "manageTeachers",
        element: <ManageTeachers></ManageTeachers>,
      },
      {
        path: "manageStudents",
        element: <ManageStudents></ManageStudents>,
      },
      {
        path: "manageAllUsers",
        element: <ManageAllUsers></ManageAllUsers>,
      },
    ],
  },
  {
    path: "/authentication",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "student-register",
        element: <StudentRegister></StudentRegister>,
      },
      {
        path: "teacher-register",
        element: <TeacherRegister></TeacherRegister>,
      },
    ],
  },
]);
export default router;
