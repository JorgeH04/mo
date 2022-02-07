import React from 'react';
//import Movie from './Movie';


const List = ({movies}) => {   
    return(
 





<div class="listing-area pt-120 pb-120">
<div class="container">
    <div class="row">

    <div class="col-xl-8 col-lg-8 col-md-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="count mb-35">
                            <span>  Listings are available</span>
                        </div>
                    </div>
                </div>
                
                <div class="popular-directorya-area fix">
                        <div class="row">
                          
                           
                        { movies.map((movie, i) => { return(
                            <div class="col-lg-6">
                                <div class="properties properties2 mb-30">
                                    <div class="properties__card">
                                        <div class="properties__img overlay1">
                                            <a href="#"><img src={`http://image.tmdb.org/t/p/w185${movie.backdrop_path}`} alt=""/></a>
                                            
                                            
                                        </div>
                                        <div class="properties__caption">
                                            <h3><a href="#">{movie.title}</a></h3>
                                            <p>Let's uncover the best places to eat, drink</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                  
                            </div>
                             )
                            })
                        }
                        </div>
                </div>
                
 




             </div>
        </div>
    </div>
</div>
  
    )
}

export default List;


 


    