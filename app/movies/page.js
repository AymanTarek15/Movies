// import Image from "app/favicon";
'use client';

import styles from "./page.module.css";
import Movies from "@/components/movies";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { useMovies } from "@/context/moviescontext";

export default function MoviesPage({children}) {
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
    console.log(movies);
    
  
  return (
    
      <main className={styles.main}>
        <h1>Top Movies</h1>
        {movies.length > 0 ? (
        <motion.ul 
        initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.4 } },
          }}
        className={styles.moviesPageContainer}>
        {movies.map(movie=>(
          <li className={styles.li} key={movie.id}>
            <motion.div 
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ scale: 1.4 }}
            transition={{ type: 'spring' }}
            key={movie.id}
            className={styles.movieContainer}>
            <Image src={`/movies/${movie.image}`} alt={movie.movie} width={200} height={250} />
            {/* <h3>{movie.movie}</h3> */}
            </motion.div>
            
          </li>
        )
        )}
        </motion.ul>
        )  : <p>Loading movies...</p>}
      </main>
    

    
  );
}
