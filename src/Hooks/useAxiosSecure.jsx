import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useBaseURL from "./useBaseURL";

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const [url] = useBaseURL();

  const axiosSecure = axios.create({
    baseURL: `${url}/`,
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate("/logIn");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);

  return axiosSecure;
};

export default useAxiosSecure;
