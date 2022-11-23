import React from 'react'
  

const Info = ({currentMovie, closeMovieInfo}) => {
    return (
        <>

        
<section class="blog_area single-post-area section-padding">
     <div class="container">
        <div class="row">

             <div className="row" onClick={closeMovieInfo} style={{cursor: "pointer", paddingTop: 50}}>
                <i className="fas fa-arrow-left"></i>
                <span>Go back</span>
              </div>

           <div class="col-lg-8 posts-list">
              <div class="single-post">
                 <div class="feature-img">
                    {currentMovie.poster_path == null ?

                    <img class="img-fluid" src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt=""/>
                      :
                    <img class="img-fluid" src={`http://image.tmdb.org/t/p/w185${currentMovie.poster_path}`} alt=""/>

                    }
                 </div>
                 <div class="blog_details">
                    <h2>
                       {currentMovie.title}  
                    </h2>
                    
                    <p class="excert">
                    {currentMovie.overview}
                    {currentMovie.vote_count}
                    </p>
                   
                   
                 </div>
              </div>
              
              <div class="comments-area">
                
                  
              </div>
            
           </div>



           <div class="col-lg-4">
            
           </div>
        </div>
     </div>
  </section>

        
 

        </>
    )
}

export default Info





