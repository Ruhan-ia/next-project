// app/search/page.js
'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useSearch } from '../Component/Context/searchContext';
import { Suspense } from 'react';
const SearchResultsContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const { searchResults } = useSearch();

  return (
    <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
        <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {searchResults.length > 0 ? (
                searchResults?.map((result) => (
                    <div key={result._id} className="transform-origin-center card relative group overflow-hidden shadow-lg p-4 text-center rounded-md transition-transform duration-300 hover:scale-105">
  <div className="avatar relative">
    <div className="w-full rounded-xl overflow-hidden">
      <Image
        className="rounded-md object-cover w-full h-48 md:h-64"
        src={result.image}
        height={300}
        width={400}
        alt={result.coffeeName} // Add descriptive alt text
      />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
      <Link href={`details/${result._id}`} legacyBehavior>
        <p className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-bold bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400">
          View Details
        </p>
      </Link>
    </div>
  </div>

  <div className="card-body mt-4 flex justify-between items-center">
    <div>
      <h1 className="card-title font-extrabold text-lg md:text-xl">{result?.coffeeName}</h1>
      <p className="text-gray-600">
        Price: <span className="font-semibold">${result?.price}</span>
      </p>
      <p className="text-gray-600">
        Ratings: <span className="text-teal-600 font-semibold">{result.ratings}</span>
      </p>
    </div>
  </div>
</div>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    </div>
);
};
const SearchResultsPage = () => {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResultsContent />
    </Suspense>
);
   
};

export default SearchResultsPage;