import React, { Component } from 'react';


const Pagination = ({nextPage, pages, currentPage}) => {

    const pageLinks = []

    for(let i=1; i<=  pages + 1; i++){

        let active =  currentPage == i ? 'active' : '';

        pageLinks.push
            (
            <li 
               className= {`waves-effect ${active} `} 
                key={i} 
                onClick={() =>  nextPage(i)} > <a href="#">{i}</a> 
            </li>
            )

    }

    return(
      <div class="pagination-area text-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
               
                    <div class="single-wrap d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-start " id="myDIV">
                            
                                 { currentPage > 1 ? 
                                  <li class="page-item"  
                                  onClick={()=> nextPage( currentPage - 1)}>
                                  <a class="page-link" className={`waves-effect `}  href="#">Prev</a></li> 
                                : ''}

                                 { pageLinks }

                                 {  currentPage <  pages + 1 ? 

                                 <li class="page-item" className={`waves-effect `} 
                                 onClick={()=>nextPage(currentPage + 1)}>
                                  <a href="#">Next</a></li> 
                                     : ''
                                 }


                                {/* <li class="page-item active"><a class="page-link" href="#">01</a></li>
                                <li class="page-item"><a class="page-link" href="#">02</a></li>
                                <li class="page-item"><a class="page-link" href="#">03</a></li>
                                <li class="page-item"><a class="page-link" href="#"><span class="ti-angle-right"></span></a></li> */}
        
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
    )
}

export default Pagination;