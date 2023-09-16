import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useBaseURL from "./useBaseURL";

const useTeacher = () => {
  const { user, loading } = useContext(AuthContext);
  const [url] = useBaseURL();

  const { data: isTeacher, isLoading: isTeacherLoading } = useQuery({
    queryKey: ["isTeacher", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`${url}/getTeacherUser/${user.email}`);
      const data = await res.json();
      return data.teacher;
    },
  });

  return [isTeacher, isTeacherLoading];
};

export default useTeacher;
