'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SearchPage from '../../searchResults/Search/SearchProduct';

const Navbar = () => {
    const pathName = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const links = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
        {
            title: 'Services',
            path: '/services',
        },
    ];

    if (!isClient) {
        return null; // Render nothing on the server
    }

    return (
        <div className='bg-gradient-to-r from-[#c8bdba] to-[#a4929b] w-full'>
            <nav className='flex justify-around items-center my-center'>
                <h1 className='font-bold text-2xl'>
                    Next <span className='text-red-500 italic'>Coffee</span>
                </h1>
                <ul className='flex space-x-3'>
                    <SearchPage></SearchPage>
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`hover:text-background transition-all ${
                                pathName === link.path ? 'text-background italic font-semibold' : 'text-gray-700'
                            }`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;