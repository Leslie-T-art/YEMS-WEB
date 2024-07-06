import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = ({image}) => {
    return (
        <>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="latest-news-box latest-news-box-2 mb-30">
                    <div className="latest-news-thumb">
                        <Link to="/"><img src={`img/blog/news-thumb-${image}.jpg`} alt=""/></Link>
                    </div>
                    <div className="latest-news-content-box">
                        <div className="latest-news-content">
                            <div className="news-meta mb-10">
                                <span><Link to="/" className="news-tag">Mental</Link></span>
                            </div>
                            <h3><Link to="/">The cure to anxiety.</Link></h3>
                            <p>YEMS has found the cure to anxiety. This ground breaking discovery was led by a team of professionals ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;