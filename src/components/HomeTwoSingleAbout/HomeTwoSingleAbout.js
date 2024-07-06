import React from 'react';

const HomeTwoSingleAbout = ({ icon, title, spacing}) => {
    return (
        <>
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className={`feature-box m${spacing}`}>
                    <div className="feature-small-icon mb-35">
                        <img src={`img/icon/s-fea-icon-${icon}.png`} alt="" />
                    </div>
                    <div className="feature-small-content">
                        <h3>{title}</h3>
                        <p>•	Case management of all ages <br/>
•	giving presentations regarding Trauma informed <br/>
•	visiting service providers for mental health assessments and reviews<br/>
•	attending community meetings and forums<br/>
•	creating engagement opportunities, schools, offices and coffee shop outings.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTwoSingleAbout;