import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
const AppContext = React.createContext();
export const API_KEY = `https://www.omdbapi.com/?apikey=3cc4b5c9&`;
const AppProvider = ({children}) => {
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    const [searchMovies,setSearchMovies] = useState("");
    const [error,setError] = useState({show:"false",message:""});

    const fetchMovies = async (url) =>{
        setLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            if(data.Response === "True"){
                setLoading(false);
                setMovies(data.Search);
                setError({show:false,message:""});
            }

            else{
                setError(
                   {
                    show:true,
                    message:data.Error
                   }
                )
               
            }
        }

        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        let setTime = setTimeout(() => {
            fetchMovies(`${API_KEY}s=${searchMovies}&`)
        }, 800);
        return () => clearTimeout(setTime);
    },[searchMovies]);


    return <AppContext.Provider value={{movies,loading,searchMovies,error,setSearchMovies}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};