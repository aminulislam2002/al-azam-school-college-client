import { Outlet } from "react-router-dom";
import TopNavBar from "../Pages/Shared/TopNavBar/TopNavBar";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import MainFooter from "../Pages/Shared/MainFooter/MainFooter";

const MainLayout = () => {
  return (
    <div>
      <TopNavBar></TopNavBar>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <MainFooter></MainFooter>
    </div>
  );
};

export default MainLayout;
