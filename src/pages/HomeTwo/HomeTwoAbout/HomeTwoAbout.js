import React from 'react';
import { Link } from 'react-router-dom';
import HomeTwoSingleAbout from '../../../components/HomeTwoSingleAbout/HomeTwoSingleAbout';
import HomeTwoSingleAbout1 from '../../../components/HomeTwoSingleAbout/HomeTwoSingleAbout1';
import HomeTwoSingleAbout3 from '../../../components/HomeTwoSingleAbout/HomeTwoSingleAbout3';
import HomeTwoSingleAbout4 from '../../../components/HomeTwoSingleAbout/HomeTwoSingleAbout4';

const HomeTwoAbout = () => {
   return (
      <>
         <section className="about-area about-area-mid pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-12 col-md-12">
                     <div className="row">

                        <HomeTwoSingleAbout icon="1" title="Community engagement" spacing="b-40" />
                        <HomeTwoSingleAbout1 icon="2" title="Direct client services" spacing="t-40" />
                        <HomeTwoSingleAbout3 icon="3" title="Peer network " spacing="t-40 mb-30" />
                        <HomeTwoSingleAbout4 icon="4" title="Cultural community network" spacing="t-40 mb-30" />


                     </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-11">
                     <div className="about-right-side pt-25 mb-30">
                        <div className="about-title mb-20">
                           <h5 className="pink-color">About Us</h5>
                           <h1>Short Story About YEMS.</h1>
                        </div>
                        <div className="about-text">
                           <p>YEMS has a commitment to innovation and continuous improvement of its activities and consults with a broad range of organisations within the Community Nursing field looking at holistic care of all people.  YEMS holistic approach looks at the whole person, not just their mental health needs, we look at person’s physical, emotional, social and spiritual wellbeing.</p><br/>
                       <p>YEMS Credential mental health clinicians have an excellent understanding of the local support services. They work to enable the individual. By instilling confidence, helping overcome barriers and providing access to support services. This is achieved through.</p>
                        </div>
                        <div className="about-text-list mb-40">
                           <ul>
                              <li><i className="fa fa-check"></i><span>Community engagement</span></li>
                              <li><i className="fa fa-check"></i><span>Direct client services</span></li>
                              <li><i className="fa fa-check"></i><span>Peer network and cultural community net work</span></li>
                           </ul>
                        </div>
                        <div className="button-area">
                           <Link to="/" className="primary_btn btn-icon ml-0"><span>+</span>learn more</Link>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoAbout;