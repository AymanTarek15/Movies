// // context/MoviesContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const MoviesContext = createContext();

// export const useMovies = () => useContext(MoviesContext);

// export const MoviesProvider = ({ children }) => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyapi.online/api/movies')
//       .then(response => response.json())
//       .then(data => setMovies(data))  // Correctly handle the data from the response
//       .catch(console.error);
//   }, []);

//   return (
//     <MoviesContext.Provider value={movies}>
//       {children}
//     </MoviesContext.Provider>
//   );
// };
