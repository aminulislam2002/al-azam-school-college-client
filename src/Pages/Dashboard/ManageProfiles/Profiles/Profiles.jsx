import useAdmin from "../../../../Hooks/useAdmin";
import useStudent from "../../../../Hooks/useStudent";
import useTeacher from "../../../../Hooks/useTeacher";
import AdminProfile from "../ManageAdminProfile/AdminProfile";
import StudentProfile from "../ManageStudentProfile/StudentProfile";
import TeacherProfile from "../ManageTeacherProfile/TeacherProfile";

const Profiles = () => {
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();
  const [isStudent] = useStudent();
  return (
    <div>
      <span>
        {isAdmin && (
          <>
            <AdminProfile></AdminProfile>
          </>
        )}
        {isTeacher && (
          <>
            <TeacherProfile></TeacherProfile>
          </>
        )}
        {isStudent && (
          <>
            <StudentProfile></StudentProfile>
          </>
        )}
      </span>
    </div>
  );
};

export default Profiles;
