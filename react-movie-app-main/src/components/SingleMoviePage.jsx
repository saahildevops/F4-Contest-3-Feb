import React,{useState,useEffect} from 'react';
import { API_KEY } from './context';
import { useParams, NavLink} from 'react-router-dom';
const SingleMoviePage = () => {
const {id} = useParams();
    const [movies,setMovies] = useState("");
    const [loading,setLoading] = useState(true);
    const fetchMovies = async (url) =>{
        setLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setLoading(false);
                setMovies(data);
            }
        }

        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        let setTime = setTimeout(() => {
            fetchMovies(`${API_KEY}i=${id}`)
        }, 800);
        return () => clearTimeout(setTime);
    },[id]);


    if (loading) {
        return (
          <div className="loading-container">
            <h1 className='loading'>LOADING...</h1>
          </div>
        )
      }

  
  return (
    
    <section>
        <div className="container">
        <div className="poster-container">
            <div className="poster-img-container">
     <img className='poster-img' src={movies.Poster} alt="" />
            </div>
     <div className="poster-details">
        <span>Title -   {movies.Title} </span>
        <span>Type -   {movies.Type} </span>
        <span>Plot -   {movies.Plot} </span>
        <span>Director -   {movies.Director} </span>
        <span>BoxOffice -   {movies.BoxOffice} </span>
        <span>Awards -   {movies.Awards} </span>
        <span>Language -   {movies.Language} </span>
        <span>Country -   {movies.Country} </span>
        <span>RATED -   {movies.Rated} </span>
        <span>Released -   {movies.Released} </span>
        <span>Year -   {movies.Year} </span>

        <NavLink to="/" className="go-back">
          Go Back
        </NavLink>
    
     </div>
        </div>


        </div>
    </section>
  )
}

export default SingleMoviePage;
