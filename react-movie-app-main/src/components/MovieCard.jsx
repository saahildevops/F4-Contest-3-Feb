import React from 'react';
import { NavLink } from 'react-router-dom';
const MovieCard = ({movie}) => {

  return (
    <NavLink to={`movies/${movie.imdbID}`} className="movie-link">
      <div className="movie-card">
        <div className="card-image">
          <img src={movie.Poster} alt={movie.Title} className='image' />
        </div>
        <div style={{color:'#ccc', padding:'5px'}}>Title - <strong>{movie.Title.slice(0,30) + "..."}</strong> </div>
        <div style={{color:'#ccc', padding:'5px'}}>Type - <strong>{movie.Type}</strong> </div>
        <div style={{color:'#ccc', padding:'5px'}}>Year - <strong>{movie.Year}</strong> </div>

        <button style={{padding:'5px', margin:'10px',cursor:'pointer'}} >Know More</button>
      </div>
    </NavLink>
  )
}



export default MovieCard;
