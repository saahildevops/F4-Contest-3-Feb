import React from 'react';
import { useGlobalContext } from './context';
import MovieCard from './MovieCard';
const Display = () => {
 const {movies,loading} = useGlobalContext();

 

  return (
    
    <div className="container">
      <main>
      {
        movies.map((movie) =>{
           return (  
          <MovieCard movie={movie}  key={movie.imdbID}/>
           )
        })
      }
      </main>
    </div>
  )
}

export default Display;
