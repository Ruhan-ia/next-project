'use client';
import { useState, useEffect } from 'react';

const useMenu = () => {
    const [coffees, setCoffees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
               const {NEXT_PUBLIC_SERVER_URL} = process.env;
               console.log('NEXT_PUBLIC_SERVER_URL:', NEXT_PUBLIC_SERVER_URL); // Log the URL
                const response = await fetch(`https://next-project-psi-azure.vercel.app/api/items`); // Ensure this matches your API endpoint
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