import Result from '@/components/Result';
import React from 'react';

const API_KEY = process.env.API_KEY;

export default async function Page({ searchParams }) {


  
    const genre = searchParams.genre || 'fetchTrending';
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
      }?api_key=5efbd69e7499035bc607de7d2d1f0855&language=en-US&page=1`
    );
    const data = await res.json();
    const results = data.results;
    // console.log(data); // For debugging purposes


  return (
    <div>
      <Result results={results} />
    </div>
  );
}
