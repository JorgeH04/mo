import React, { Component } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

import Nav from "./app/components/Nav";
import Hero from "./app/components/Hero";
import List from "./app/components/List";
import Pagination from "./app/components/Pagination";
import Info from "./app/components/Info";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [totalResults, setTotalResults] = useState('0');
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


  // useEffect(() => {
  //   fetchData();
  // }, []);


  // const fetchData = async () => {
  //   try {
  
  //     const res = await axios.get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=e0b76ea37ca9d64aaa29d485cd5395e6&query=${searchMovie}`
  //     );
  //     setMovies(res.data);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  const fetchData = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e0b76ea37ca9d64aaa29d485cd5395e6&query=${searchMovie}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      setMovies([...data.results]);
      setTotalResults(data.total_results)
     
    })
  }



  const nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e0b76ea37ca9d64aaa29d485cd5395e6&query=${searchMovie}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ 
        movies: [...data.results], 
        currentPage: pageNumber})
    })
  }



  const handleChange = e => {
    setSearchMovie(e.target.value);
  };


  const viewMovieInfo = (id) => {
    
    const filteredMovie = movies.filter(movie => movie.id == id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    setCurrentMovie(newCurrentMovie);

 

}


const closeMovieInfo = () => {
  setCurrentMovie({ currentMovie: null })
}


const numberPages = Math.floor(totalResults / 20);
console.log(numberPages)

  return (

    <>
    <div className="App">

    <Nav/>


     {   currentMovie == null ? 
     <>
    <Hero
          fetchData={fetchData} 
          handleChange={handleChange}
    />

    <List  movies={ movies}  />


     </>

     : 


     <Info 
         currentMovie={ currentMovie} 
          closeMovieInfo={ closeMovieInfo} 
     />

    }
        
    
    { totalResults > 20 &&  currentMovie == null ? 

        
        <Pagination 
          pages={numberPages} 
          nextPage={nextPage} 
          currentPage={currentPage} /> 

          : ''

    }
       


    }

  
     </div>
    </>



) 

}  

export default App;
