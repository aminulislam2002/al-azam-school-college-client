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
import PrivateRoute from "./PrivateRoute";
import UpdateStudentProfile from "../Pages/Dashboard/ManageProfiles/ManageStudentProfile/UpdateStudentProfile";
import UpdateTeacherProfile from "../Pages/Dashboard/ManageProfiles/ManageTeacherProfile/UpdateTeacherProfile";
import UpdateAdminProfile from "../Pages/Dashboard/ManageProfiles/ManageAdminProfile/UpdateAdminProfile";
import AllNotices from "../Pages/Dashboard/Admin/ManageNotices/AllNotices";
import AddNotice from "../Pages/Dashboard/Admin/ManageNotices/AddNotice";
import UpdateNotice from "../Pages/Dashboard/Admin/ManageNotices/UpdateNotice";
import ForgotPasswordField from "../Pages/Authentications/ForgotPasswordField";
import Events from "../Pages/Academics/Events";
import OnlineApplyForm from "../Pages/OnlineApplyForm/OnlineApplyForm";
import ManageApplications from "../Pages/Dashboard/Admin/ManageApplications/ManageApplications";
import News from "../Pages/Academics/News";
import StudentProtocol from "../Pages/Academics/StudentProtocol";
import InstituteInfoAndNotice from "../Pages/Home/InstituteInfoAndNotice/InstituteInfoAndNotice";
import StudentsRoutine from "../Pages/Students/StudentsRoutine";
import ClassSyllabus from "../Pages/Students/ClassSyllabus";
import ScienceLab from "../Pages/Facilities/ScienceLab";
import ComputerLab from "../Pages/Facilities/ComputerLab";
import ViewNotice from "../Pages/Home/InstituteInfoAndNotice/ViewNotice";
import ApplicationDetails from "../Pages/Dashboard/Admin/ManageApplications/ApplicationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "onlineApplyForm",
        element: <OnlineApplyForm></OnlineApplyForm>,
      },
      {
        path: "events",
        element: <Events></Events>,
      },
      {
        path: "news",
        element: <News></News>,
      },
      {
        path: "student-protocol",
        element: <StudentProtocol></StudentProtocol>,
      },
      {
        path: "notice-board",
        element: <InstituteInfoAndNotice></InstituteInfoAndNotice>,
      },
      {
        path: "students-routines",
        element: <StudentsRoutine></StudentsRoutine>,
      },
      {
        path: "classes-syllabus",
        element: <ClassSyllabus></ClassSyllabus>,
      },
      {
        path: "science-lab",
        element: <ScienceLab></ScienceLab>,
      },
      {
        path: "computer-lab",
        element: <ComputerLab></ComputerLab>,
      },
      {
        path: "notice/:id",
        element: <ViewNotice></ViewNotice>,
        loader: ({ params }) => fetch(`http://localhost:5000/getNoticeById/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profiles></Profiles>,
      },
      {
        path: "profile/update-student-profile/:id",
        element: <UpdateStudentProfile></UpdateStudentProfile>,
        loader: ({ params }) => fetch(`http://localhost:5000/getUserById/${params.id}`),
      },
      {
        path: "profile/update-teacher-profile/:id",
        element: <UpdateTeacherProfile></UpdateTeacherProfile>,
        loader: ({ params }) => fetch(`http://localhost:5000/getUserById/${params.id}`),
      },
      {
        path: "profile/update-admin-profile/:id",
        element: <UpdateAdminProfile></UpdateAdminProfile>,
        loader: ({ params }) => fetch(`http://localhost:5000/getUserById/${params.id}`),
      },
      {
        path: "manageNotices",
        element: <AllNotices></AllNotices>,
      },
      {
        path: "manageApplications",
        element: <ManageApplications></ManageApplications>,
      },
      {
        path: "manageApplications/application-details/:id",
        element: <ApplicationDetails></ApplicationDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/getApplicationById/${params.id}`),
      },
      {
        path: "addNotice",
        element: <AddNotice></AddNotice>,
      },
      {
        path: "manageNotices/update-notice/:id",
        element: <UpdateNotice></UpdateNotice>,
        loader: ({ params }) => fetch(`http://localhost:5000/getNoticeById/${params.id}`),
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
      {
        path: "forgot-password",
        element: <ForgotPasswordField></ForgotPasswordField>,
      },
    ],
  },
]);
export default router;
