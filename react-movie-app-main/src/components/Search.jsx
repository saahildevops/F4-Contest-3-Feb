import React,{useState} from 'react';
import { useGlobalContext } from './context';

const Search = () => {
  const [searchString, setsearchString] = useState("");
  const {searchMovies,setSearchMovies,error} = useGlobalContext();
  console.log("search--"+searchString);
  return (
    <div>
      <form className='search-form' action="#" onSubmit={(e) => e.preventDefault() }>
        <div><span style={{color:'#ccc', marginTop:'15px', marginBottom:'15px'}}>Search For Movies By Their Title</span></div>
        <input type="text" name='text' placeholder='search' value={searchString} onChange={(e) => setsearchString(e.target.value)} />
        <button style={{padding:'5px', marginTop:'10px',cursor:'pointer'}} onClick={(e) => setSearchMovies(searchString)}>Search Now!</button>
      </form>
      {
            searchString ? <div><p style={{color:'#ccc', marginTop:'15px', marginBottom:'15px'}}>Movie Results For '{searchString}'</p></div> : <div><p>&nbsp;</p></div>
      }
  
    </div>

  )
}

export default Search;
