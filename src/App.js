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
  const [currentPage, setCurrentPage] = useState('1');
  const [totalPages, setTotalPages] = useState('0');
  const [pageNumber, setPageNumber] = useState('0');
  const [filters, setFilters] = React.useState({
    adult: false,
    vote_average: "todos",
    original_language: "todos"
  });


  const handleDelete = () => {
    let newProducts = [...movies]
   
    const { name, shipping, adult, original_language } = filters;
  
    if ( original_language !== "todos") {
      newProducts = newProducts.filter(item => item.original_language === original_language);
      }
    setMovies(newProducts);
   };
  



const updateFilters = e => {
  const type = e.target.type;
  const filter = e.target.name;
  const value = e.target.value;
  let filterValue;
  if (type === "checkbox") {
    filterValue = e.target.checked;
  } else if (type === "radio") {
    value === "todos" ? (filterValue = value) : (filterValue = parseInt(value));
  } else {
    filterValue = value;
  }
  setFilters({ ...filters, [filter]: filterValue });


  console.log(filter);
};




// const updateFilters = event => {
//   const target = event.target;
//   const value = target.type === "checkbox" ? target.checked : target.value;
//   const name = target.name;
//   console.log(name, value);

//   setFilters(
//     {
//       [name]: value
//     },
//      handleDelete
//   );
// };





React.useLayoutEffect(() => {
//const filterRooms = () => {  
let newProducts = [...movies]
//console.log(newProducts)

const { name, shipping, adult, original_language, vote_average } = filters;
//
if ( original_language !== "todos") {
newProducts = newProducts.filter(item => item.original_language === original_language);
}
if (adult !== false) {
newProducts = newProducts.filter(item => item.adult === adult);
}
if (vote_average !== "todos") {
  newProducts = newProducts.filter(item => {
    if (vote_average === 0) {
      return item.vote_average < 2000;
    } else if (vote_average === 2000) {
      return item.vote_average > 2000 && item.vote_average < 5000;
    } else {
      return item.vote_average > 5000;
    }
    
  });
}
}, [filters, movies]);

 


  const fetchData = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e0b76ea37ca9d64aaa29d485cd5395e6&query=${searchMovie}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      setMovies([...data.results]);
     // setMovies([{...data.results}]);
      setTotalResults(data.total_results)
      setTotalPages(data.total_pages)
      setPageNumber(data.page)
     // console.log(totalPages);{...data.results, ...data.total_results}

    })
  }



  const nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e0b76ea37ca9d64aaa29d485cd5395e6&query=${searchMovie}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      setMovies([...data.results]);
      setCurrentPage(pageNumber)
      console.log(pageNumber);

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
  setCurrentMovie(null)
}







const ff = () => {
  const newArray = movies.map(({title, popularity}) => ({title, popularity}));
  setMovies(newArray)
}


const fff = () => {
  const newArray = movies.filter(item => item.popularity < 8);
  setMovies(newArray)
}



/////percentage

function getPercentage(num, percentage){
  return num * (percentage / 100);
}

const ffff = () => {
  const newArray = movies.map(item=> {
    return{
        ...item,
        vote_average:item.vote_average + getPercentage(item.vote_average, 10)
       }
     });
  setMovies(newArray)

}



//// votos abajo de tanta cantidad 
const fffff = () => {
  const ppl = movies.reduce((acc, el) => {
    if (el.vote_average < 5){
      let name = `${el.title}`
      acc.push(name);
    }
    return acc;
  },[])
  setMovies(ppl)
  setTotalResults(ppl)

}





 

  // const resultadult = movies.reduce((acc, el) => {return {...acc, [el.adult] : (acc[el.adult] || 0) + 1};
  // }, 0);


  // const resultadult =  movies.reduce((acc,el)=>{ acc+= el.vote_count return acc },0)
 

const numberPages = Math.floor(totalResults / 20);
 
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
 
       
    <List  
       movies={movies}
       totalResults={totalResults}
       filters={filters}
       updateFilters={updateFilters}
       handleDelete={handleDelete}
       currentPage={currentPage} 
       viewMovieInfo={viewMovieInfo}
       ff={ff}
       fff={fff}
       ffff={ffff}
       fffff={fffff}

     //  resultadult={resultadult}
        />


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
          currentPage={currentPage} 
          /> 

          : ''

    }
    }
     </div>
    </>



) 

}  

export default App;
