import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCartResume = () => {
    const { user, loading } = useAuth(); // Access the user and loading state from the useAuth custom hook
    const [axiosSecure] = useAxiosSecure(); // Get the axios instance from the useAxiosSecure custom hook
    const { refetch, data: resume = [] } = useQuery({
        queryKey: ['resume', user?.email], // Unique query key based on the user's email
        enabled: !loading, // Only enable the query if the loading state is false
        queryFn: async () => {
            const res = await axiosSecure(`/resume?email=${user?.email}`); // Send a GET request to fetch the user's cart
            console.log('res from axios', res);
            return res.data; // Return the resume data from the response
        },
    });

    return [resume, refetch]; // Return the resume data and the refetch function
}

export default useCartResume;