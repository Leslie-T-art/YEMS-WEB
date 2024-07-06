import React from 'react';

const HomeTwoSingleAbout4 = ({ icon, title, spacing}) => {
    return (
        <>
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className={`feature-box m${spacing}`}>
                    <div className="feature-small-icon mb-35">
                        <img src={`img/icon/s-fea-icon-${icon}.png`} alt="" />
                    </div>
                    <div className="feature-small-content">
                        <h3>{title}</h3>
                        <p>•	support, education, and networking<br/>
•	monthly meetings (currently in Brisbane with future locations to be announced)<br/>
•	peer support training programs 
.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTwoSingleAbout4;