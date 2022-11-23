import React, { useContext } from "react";
 
const Filters = ( {movies,  }) => {  

  return (
<>

    <div class="category-listing mb-50">
    <div class="single-listing">
        <div class="select-job-items2">
           <select name="select2">
               <option value="">City</option>
               <option value="">Dhaka</option>
               <option value="">india</option>
               <option value="">UK</option>
               <option value="">US</option>
               <option value="">Pakistan</option>
           </select>
       </div>
    
       <div class="select-job-items2">
           <select name="select2">
               <option value="">State</option>
               <option value="">Dhaka</option>
               <option value="">Mirpur</option>
               <option value="">Danmondi</option>
               <option value="">Rampura</option>
               <option value="">Htizill</option>
           </select>
       </div>
       
       <div class="select-job-items2">
           <select name="select2">
               <option value="">Near 1 km</option>
               <option value="">2 km</option>
               <option value="">3 km</option>
               <option value="">4 km</option>
               <option value="">5 km</option>
               <option value="">6 km</option>
           </select>
       </div>
        
       <div class="select-Categories pt-80 pb-30">
           <div class="small-section-tittle2 mb-20">
               <h4>Price range</h4>
           </div>
           <label class="container">$50 - $150
               <input 
                
                  type="checkbox"
               />
               <span class="checkmark"></span>
           </label>
           <label class="container">$150 - $300
               <input type="checkbox" checked="checked active"/>
               <span class="checkmark"></span>
           </label>
           <label class="container">$300 - $500
               <input type="checkbox"/>
               <span class="checkmark"></span>
           </label>
           <label class="container">$500 - $1000
               <input type="checkbox"/>
               <span class="checkmark"></span>
           </label>
           <label class="container">$1000 - Above
               <input type="checkbox"/>
               <span class="checkmark"></span>
           </label>
       </div>
        
       <div class="select-Categories">
           <div class="small-section-tittle2 mb-20">
               <h4>Tags</h4>
           </div>
           <label class="container">Wireless Internet
               <input type="checkbox"/>
               <span class="checkmark"></span>
           </label>
           <label class="container">Accepts Credit Cards
               <input type="checkbox" checked="checked active"/>
               <span class="checkmark"></span>
           </label>
           <label class="container">Smoking Allowed
               <input type="checkbox"/>
               <span class="checkmark"></span>
           </label>
           <label class="container">Parking Street
               <input type="checkbox"/>
               <span class="checkmark"></span>
           </label>
           <label class="container">Coupons
               <input type="checkbox"/>
               <span class="checkmark"></span>
           </label>
       </div>
    </div>
</div>


</>


  );
}
export default Filters;




