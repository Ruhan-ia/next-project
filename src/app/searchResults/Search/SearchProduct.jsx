// components/SearchPage.js
'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import { useSearch } from '@/app/Component/Context/searchContext';
import useMenu from '@/app/Component/Hooks/useMenu';

const SearchPage = () => {
    const {
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        isSearchOpen,
        setIsSearchOpen,
    } = useSearch();
    const router = useRouter();
    const pathName = usePathname();
    const [coffees, loading] = useMenu();


    console.log('Coffees:', coffees); // Log the coffees array
    console.log('Search Query:', searchQuery); // Log the search query
    console.log('Search Results:', searchResults); // Log the search results

   
    // Debounce function to limit the frequency of search updates
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    // Handle search input changes
    const handleSearch = debounce((query) => {
        if (!loading && query.length >= 2 && Array.isArray(coffees)) {
            const filteredSuggestions = coffees.filter((item) =>
                item?.coffeeName?.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredSuggestions);
        } else {
            setSearchResults([]);
        }
    }, 300);

  
  
    // Handle key press (e.g., Enter key)
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && searchQuery.length >= 2) {
            setIsSearchOpen(false);
            router.push(`/searchResults?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    // Update URL with search query
    useEffect(() => {
        const urlParams = new URLSearchParams({ search: searchQuery });
        const url = `${pathName}?${urlParams.toString()}`;
        router.push(url, { scroll: false });
    }, [searchQuery, pathName, router]);

    return (
        <div className='relative'>
            {/* Search Icon */}
            <FiSearch
                className='text-3xl text-gray-700 cursor-pointer'
                onClick={() => setIsSearchOpen(true)}
            />

            {/* Animated Overlay with Framer Motion */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ type: 'tween', duration: 0.5 }}
                        className='fixed inset-0 bg-white z-50 flex flex-col items-center justify-start pt-20'
                    >
                        {/* Close Button */}
                        <button
                            className='absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors'
                            onClick={() => setIsSearchOpen(false)}
                        >
                            ✕
                        </button>

                        {/* Search Input in Overlay */}
                        <input
                            type='text'
                            placeholder='Search products...'
                            className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-80'
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                handleSearch(e.target.value);
                            }}
                            value={searchQuery}
                            onKeyPress={handleKeyPress}
                            disabled={loading}
                        />

                        {/* Search Results */}
                        <div className='mt-6 w-80'>
                        {loading ? (
                                <span className="loading loading-bars loading-xl"></span>
                            ) : searchResults.length > 0 ? (
                                searchResults.map((result) => (
                                    <motion.div
                                        key={result._id}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
                                        onClick={() => setIsSearchOpen(false)}
                                    >
                                        <Link href={`/details/${result._id}`}>
                                            {result.coffeeName}
                                        </Link>
                                    </motion.div>
                                ))
                            ) : (
                                <p className='text-gray-500'>
                                    {searchQuery ? 'No results found.' : 'Start typing to search...'}
                                </p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SearchPage;