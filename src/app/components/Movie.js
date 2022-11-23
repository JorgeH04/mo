import React from 'react';


const Movie = ({image, movieId, viewMovieInfo, vote_count, title}) => {
   

    return(

        <div class="properties properties2 mb-30">
        <div class="properties__card">
            <div class="properties__img overlay1">
                <a href="#" onClick={() => viewMovieInfo(movieId)} >

                              {image == null ?

<img class="img-fluid" src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt=""/>
  :
<img class="img-fluid" src={`http://image.tmdb.org/t/p/w185${image}`} alt=""/>

}
                
                
                </a>
            </div>
            <div class="properties__caption">
                <h3><a href="#">    </a></h3>
                <p> {title}</p>
            </div>
            
           </div>
        </div>


          
    )
}

export default Movie;

       
