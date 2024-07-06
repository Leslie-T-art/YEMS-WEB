import React from 'react';

const HomeTwoSingleMission1 = ({icon,border}) => {

   return (
      <>
         <div className={border ? `mv-single-list d-flex ${border}` : "mv-single-list d-flex"}>
            <div className="mv-icon">
               <img src={`img/icon/mv-icon-${icon}.png`} alt="#" />
            </div>
            <div className="mv-text">
               <p>•	Employment referral</p>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleMission1;