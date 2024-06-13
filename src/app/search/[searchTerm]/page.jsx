import Result from '@/components/Result';
import React from 'react';

export default async function SearchPage({ params }) {
    const searchTerm = params.searchTerm;

    let results = [];
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5efbd69e7499035bc607de7d2d1f0855&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
        const data = await res.json();
        results = data.results;
        console.log(results)
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return (
        <div>
            {results.length === 0 ? (
                <h1 className='text-center pt-6'>No results found</h1>
            ) : (
                <Result results={results} />
            )}
        </div>
    );
}
