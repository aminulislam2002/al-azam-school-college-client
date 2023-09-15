import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://al-azam-school-college-server.vercel.app/getAdminUser/${user.email}`);
      const data = await res.json();
      return data.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
