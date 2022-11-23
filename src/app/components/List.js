import React from 'react';
import Filters from "./Filters";
import Movie from './Movie';

const List = ({     
    filters: {adult, original_language},
    updateFilters, 
    movies, 
    totalResults,
    handleDelete,
    viewMovieInfo, 
    ff, fff, ffff,fffff,
    resultadult
}) => {   
    


return(
<>
<div class="listing-area pt-120 pb-120">
<div class="container">
    <div class="row">

         <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="row">
                    <div class="col-12">
                            <div class="small-section-tittle2 mb-45">
                            <h4>Advanced Filter</h4>
                        </div>
                    </div>
                </div>

<div class="category-listing mb-50">
    <div class="single-listing">
        <div class="select-job-items2">
           <select 
              name="original_language"
              id="original_language"
              value={original_language}
              onChange={updateFilters}
           >
               <option value="todos">todos</option>
               <option value="it">It</option>
               <option value="en">Eng</option>
             
           </select>
       </div>
    
     
       
        
        
       <div class="select-Categories pt-80 pb-30">
           <div class="small-section-tittle2 mb-20">
               <h4>Price range</h4>
           </div>
           <label class="container">$50 - $150
               <input 
                 type="checkbox"
                 name="adult"
                 id="shipping"
                 checked={adult}
                 onChange={updateFilters}

               />
               <span class="checkmark"></span>
           </label>
        
       </div>
        
       <div class="select-Categories">
           <div class="small-section-tittle2 mb-20">
               <h4>Tags</h4>
           </div>
         
           <label class="container">English
               <input
                    type="checkbox"
                    value="todos"
                    checked={original_language=="en"}
                    onChange={updateFilters}
               />
               <span class="checkmark"></span>
              
           </label>


           <label class="container">Italiano
               <input
                    type="checkbox"
                    value="todos"
                    checked={original_language=="it"}
                    onChange={updateFilters}
                 />
               <span class="checkmark"></span>
              
           </label>


          <label class="container">Italiano
               <button onClick={ff}></button>
           </label>

              <label class="container">Italiano
               <button onClick={fff}></button>
           </label>

                   <label class="container">Percentage
               <button onClick={ffff}></button>
           </label>

         <label class="container">Over 8
               <button onClick={fffff}></button>
           </label>
       </div>
    </div>
</div>





             </div>
          <div class="col-xl-8 col-lg-8 col-md-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="count mb-35">
                            <span>{totalResults} Listings are available</span>

                         </div>
                    </div>
                </div>
                
                <div class="popular-directorya-area fix">
                        <div class="row">                                               
                        {movies.map((movie, i) => { return(
                            <div class="col-lg-6">
                                   <Movie 
                                       key={i} 
                                       viewMovieInfo={viewMovieInfo} 
                                       movieId={movie.id} 
                                       image={movie.poster_path}
                                       title={movie.title}
                                   /> 
                            </div>
                         )})}


                         
                        </div>
                  </div>
             </div>
        </div>
   </div>
</div>
</>
  
    )
}

export default List;


 


 