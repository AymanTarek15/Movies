// import Image from "app/favicon";
'use client';
import styles from "./page.module.css";
import Movies from "@/components/movies";
import ShowMovies from "@/components/showmovies";
import Image from "next/image";

import { useEffect, useState } from "react";


export default function HomePage({children}) {
  // const movies=useMovies()
  // console.log(movies);
  const [movies,setMovies]=useState([ ])
  useEffect(() => {
        fetch('https://dummyapi.online/api/movies')
          .then(response => response.json())
          .then(data => setMovies(data))  // Correctly handle the data from the response
          .catch(error =>{
            console.log('faileld to catch movies:',error);
            setMovies([ ])
          });
      }, []);
      const topRated=movies.filter(movie=>movie.rating>=9)
      const adventure=movies.filter(movie=>movie.id===5 || movie.id===19 || movie.id===8 || movie.id===15 || movie.id===16 || movie.id===48 || movie.id===74)
      const disney=movies.filter(movie =>movie.id>=64 && movie.id<=73 || movie.id===20 || movie.id>=86 && movie.id<=90)
      

      console.log(movies);
      
      // console.log(topRated);
  
  return (
    
      <>
      <ShowMovies category='Top Rated Movies' selectedMovies={topRated} />
      <ShowMovies category='Adventure' selectedMovies={adventure} />
      <ShowMovies category='Disney' selectedMovies={disney} />
      </>
    

    
  );
}
