
import { useState, useEffect } from 'react';

const useMenu = () => {
    const [coffees, setCoffees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://next-project-psi-azure.vercel.app'); // Ensure this matches your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log('API Response:', data); // Log the response
                setCoffees(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return [coffees, loading];
};

export default useMenu;