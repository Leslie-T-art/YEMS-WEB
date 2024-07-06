import React from 'react';

const HomeTwoSingleAbout1 = ({ icon, title, spacing}) => {
    return (
        <>
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className={`feature-box m${spacing}`}>
                    <div className="feature-small-icon mb-35">
                        <img src={`img/icon/s-fea-icon-${icon}.png`} alt="" />
                    </div>
                    <div className="feature-small-content">
                        <h3>{title}</h3>
                        <p>•	conducting intake (outreach based), e.g. at hospitals and crisis accommodation<br/>
•	helping with case management, e.g. linking to services<br/>
•	providing peer support, e.g. using lived experience to connect 1:1 and build hope<br/>
.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTwoSingleAbout1;