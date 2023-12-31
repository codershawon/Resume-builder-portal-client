import { useEffect, useState } from 'react';

const useUsersInfo = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://resume-builder-portal-server.vercel.app/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return { users, loading };
};

export default useUsersInfo;
