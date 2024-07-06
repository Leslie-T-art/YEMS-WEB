import React from 'react';
import HomeTwoSingleMission from '../../../components/HomeTwoSingleMission/HomeTwoSingleMission';
import HomeTwoSingleMission1 from '../../../components/HomeTwoSingleMission/HomeTwoSingleMission1';

const HomeTwoMissionArea = () => {

   return (
      <>
         <section className="about-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-10 col-md-12">
                     <div className="about-title mb-20">
                        <h5 className="pink-color">   Get Connected </h5>
                        <h1>Talk To A  Mental Helth Professional.</h1>
                     </div>
                     <div className="about-text mission-about-text">
                        <p>•	You may be able to access professional counselling by phone after hours space</p><br/>
                     </div>
                     <div className="mission-vision-list pr-90">
                        <HomeTwoSingleMission icon="1" />
                        <HomeTwoSingleMission1 icon="1" border="border-0" />
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 d-lg-none d-xl-block">
                     <div className="mv-right-img pos-rel mb-30">
                        <img src="img/about/mvright-img-1.jpg" alt=""/>
                     </div>
                     <div className="testi-quato-icon about-icon-white d-none d-xl-block">
                        <img src="img/about/about-icon-white.png" alt=""/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoMissionArea;