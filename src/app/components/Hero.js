import React from 'react'
  

const Hero = ({
    fetchData,
    handleChange
  }) => {
    return (
        <>

             <div class="slider-area hero-bg2 hero-overly">
        <div class="single-slider hero-overly  slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-10">
                        
                        <div class="hero__caption hero__caption2 pt-200">
                            <h1>Base de datos de películas</h1>
                        </div>
                         
                        <form action="#"  onSubmit={fetchData}  class="search-box mb-100">
                            <div class="input-form">
                                <input 
                                   type="text" 
                                   onChange={handleChange}
                                   placeholder="Encuentre su película favorita"/>
                            </div>
                            <div class="select-form">
                              
                            </div>
                            <div class="search-form">
                                <a href="#"><i class="ti-search"></i> Buscar</a>
                            </div>	
                        </form>	
                    </div>
                </div>
            </div>
        </div>
    </div>



        </>
    )
}

export default Hero
