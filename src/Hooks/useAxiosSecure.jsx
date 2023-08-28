import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
  
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const axiosSecure = axios.create({
  baseURL: 'https://resume-builder-portal-server.vercel.app', 
 
     
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('Access token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logout();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;