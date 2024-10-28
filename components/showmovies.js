import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import styles from "./showmovies.module.css";

export default function ShowMovies({ category, selectedMovies }) {
  const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch('https://dummyapi.online/api/movies')
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => {
          console.log('Failed to fetch movies:', error);
          setMovies([]);
        });
    }, []);

  return (
    <main className={styles.main}>
      <h1>{category}</h1>
      <AnimatePresence>
      {movies.length > 0 ? (
        <motion.ul 
        key={movies.length}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className={styles.moviesPageContainer}
        >
          {selectedMovies.map(movie => (
            <li key={movie.id} className={styles.li}>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -70 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.4 }}
                transition={{ type: 'spring'}}
                exit={{ opacity: 0, x: -70 }}
                
                key={movie.id}
                className={styles.movieContainer}
              >
                <Image 
                  src={`/images/${movie.image}`} 
                  alt={movie.movie} 
                  width={130} 
                  height={200} 
                  // loading="lazy"
                  priority
                  onError={(e) => e.target.src = '/images/fallback.jpg'} 
                />
              </motion.div>
            </li>
          ))}
        </motion.ul>
        
      ) : <p>Loading movies...</p>}
      </AnimatePresence>
    </main>
  );
}
