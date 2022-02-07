import React from 'react';


const Movie = ({movies}) => {
   

    return(
            <div className="container mt-5">
               <div className="row">
              {              
                   <img src={`http://image.tmdb.org/t/p/w185${image}`} alt="card image"  />
              }
              </div>
              <div className="card-content">
              <p><a href="#" onClick={() => viewMovieInfo(movieId)}> View Details </a></p>
              </div>
            </div>
    )
}

export default Movie;

       
