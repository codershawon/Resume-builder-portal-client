// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";


// const useAdmin = () => {
//     const {user} = useContext(AuthContext)
//     const [axiosSecure] = useAxiosSecure();
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         enabled: !!user?.email && !!localStorage.getItem('Access token'),
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             console.log('is admin response', res)
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// }

// export default useAdmin;