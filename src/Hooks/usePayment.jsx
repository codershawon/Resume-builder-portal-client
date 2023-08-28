import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
    const { user, loading } = useAuth(); // Access the user and loading state from the useAuth custom hook
  const [axiosSecure] = useAxiosSecure(); // Get the axios instance from the useAxiosSecure custom hook
  const { refetch, data: payment = [] } = useQuery({
    queryKey: ["payment", user?.email], // Unique query key based on the user's email
    enabled: !loading, // Only enable the query if the loading state is false
    queryFn: async () => {
      const res = await axiosSecure(`/payment?email=${user?.email}`); // Send a GET request to fetch the user's payment
      console.log("res from axios", res);
      return res.data; // Return the payment data from the response
    },
  });

  return [payment, refetch]; // Return the payment data and the refetch function
};

export default usePayment;