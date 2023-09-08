import { Link, Outlet } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const DashboardLayout = () => {
  // const [isAdmin] = useAdmin();
  // const [isTeacher] = useTeacher();
  // const [isStudent] = useStudent();

  const isAdmin = true;
  const isTeacher = false;
  const isStudent = false;
  const user = true;

  const adminOptions = (
    <>
      <Link to="/dashboard/manageEvents">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Manage Events
        </li>
      </Link>
      <Link to="/dashboard/manageNotices">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Manage Notices
        </li>
      </Link>
      <Link to="/dashboard/manageAdmins">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Manage Admins
        </li>
      </Link>
      <Link to="/dashboard/manageTeachers">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Manage Teachers
        </li>
      </Link>
      <Link to="/dashboard/manageStudents">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Manage Students
        </li>
      </Link>
    </>
  );

  const teacherOptions = (
    <>
      <Link to="/dashboard">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          {/* This is Teacher */}
        </li>
      </Link>
    </>
  );

  const studentOptions = (
    <>
      <Link to="/dashboard">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          {/* This is Student */}
        </li>
      </Link>
    </>
  );

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="hidden lg:block">
        <NavBar />
      </div>
      <div className="drawer container mx-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:flex gap-1">
          <div className="w-full lg:w-3/12 bg-blue-900 overflow-y-auto max-h-[100vh] lg:h-screen">
            <div className="flex justify-start">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <GrMenu className="w-6 h-6" />
                </label>
              </div>
              <div className="px-2 w-auto lg:w-full">
                <div className="ms-2 text-lg font-semibold text-yellow-500">
                  {user.displayName}
                  <span>
                    {isAdmin && (
                      <>
                        <span className="text-black bg-white text-sm ms-1 px-3 font-bold rounded-full">Admin</span>
                      </>
                    )}
                    {isTeacher && (
                      <>
                        <span className="text-black bg-white text-sm ms-1 px-3 font-bold rounded-full">Teacher</span>
                      </>
                    )}
                    {isStudent && (
                      <>
                        <span className="text-black bg-white text-sm ms-1 px-3 font-bold rounded-full">Student</span>
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-none hidden lg:block mt-4">
              <ul className="menu-vertical">
                <Link to="/dashboard/profile">
                  <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
                    Profile
                  </li>
                </Link>
                {isAdmin && <> {adminOptions} </>}
                {isTeacher && <> {teacherOptions} </>}
                {isStudent && <> {studentOptions} </>}
              </ul>
            </div>
          </div>
          <div className="lg:w-9/12 p-4">
            <div className="">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay overflow-x-auto max-h-[100vh]"></label>
          <ul className="p-4 w-52 bg-blue-900 overflow-y-auto">
            <Link to="/dashboard/profile">
              <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
                Profile
              </li>
            </Link>
            {isAdmin && <> {adminOptions} </>}
            {isTeacher && <> {teacherOptions} </>}
            {isStudent && <> {studentOptions} </>}
          </ul>
        </div>
      </div>
      <div>{/* Footer position [if need] */}</div>
    </div>
  );
};

export default DashboardLayout;
