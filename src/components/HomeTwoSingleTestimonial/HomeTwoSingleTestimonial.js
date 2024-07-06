import React from 'react';

const HomeTwoSingleTestimonial = ({image}) => {
   return (
      <>
         <div className="col-xl-12 home_two_testimonial_wrapper">
            <div className="testi-box-2">
               <div className="test-rating-inner d-flex justify-content-between mb-30 align-items-center pr-15">
                  <div className="testi-quato-icon testi-quato-icon-green m-0">
                     <img src="img/testimonials/testi-quato-icon.png" alt=""/>
                  </div>
                  <div className="testi-rating-list">
                     <ul>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                     </ul>
                  </div>
               </div>
               <div className="testi-content-2">
                  <h3>They offer the best service</h3>
                  <p>The level of professionalism at Yems is absolutely amazing. I recommend them to anyone.</p>
               </div>
               <div className="testi-author d-flex align-items-center mt-30">
                  <div className="testi-author-icon-2">
                     <img src={`img/icon/tesit-author-icon-${image}.png`} alt=""/>
                  </div>
                  <div className="testi-author-desination-2">
                     <h4>Rosalina D. Williamson</h4>
                     <span><span className="f-500 pink-color">Regular Client</span></span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleTestimonial;