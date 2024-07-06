import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog1 = ({image}) => {
    return (
        <>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="latest-news-box latest-news-box-2 mb-30">
                    <div className="latest-news-thumb">
                        <Link to="/blogDetails"><img src={`img/blog/news-thumb-${image}.jpg`} alt=""/></Link>
                    </div>
                    <div className="latest-news-content-box">
                        <div className="latest-news-content">
                            <div className="news-meta mb-10">
                                <span><Link to="/blogDetails" className="news-tag">Mental</Link></span>
                            </div>
                            <h3><Link to="/blogDetails">The cure to sleeplessnes.</Link></h3>
                            <p>YEMS has found the cure. This ground breaking discovery was led by a team of professionals ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog1;