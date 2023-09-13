import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/getStudentUser/${user.email}`);
      const data = await res.json();
      return data.student;
    },
  });

  return [isStudent, isStudentLoading];
};

export default useStudent;
