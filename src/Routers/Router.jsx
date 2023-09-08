import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profiles from "../Pages/Dashboard/ManageProfiles/Profiles/Profiles";

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
    ],
  },
]);
export default router;
