import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeTwoNavBar = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            {/* <!-- menu-area --> */}
            <div className={stickyMenu ? "sticky_menu header-menu-area header-padding transparrent-header sticky_navBar_bg" :
               "header-menu-area header-padding transparrent-header"}>
               <div className="container-fluid">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                        <div className="logo pos-rel">
                           <Link to="/"><img src="img/logo/logo-2.png" alt=""/></Link>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-8 col-md-6 col-6">
                        <div className="header__menu header-menu-white">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link to="/">Home </Link>
                                   
                                 </li>
                                 <li><Link to="/services">Department </Link>
                                    
                                 </li>
                                 <li><Link to="/doctors">Doctors </Link>

                                 </li>
                                 <li><Link to="/shop">Services </Link>
                                    
                                 </li>
                                 <li><Link to="/blogs">News </Link>
                                    
                                 </li>
                                 
                              </ul>
                           </nav>
                        </div>
                        <div onClick={handleShow} className="side-menu-icon d-lg-none text-end">
                           <button className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars text-white"></i> </button>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-2 d-none d-lg-block d-xl-block">
                        <div className="header-right f-right">
                           <Link to="/contact" className="primary_btn btn-icon btn-icon-green"><span>+</span>contact
                              us</Link>
                           <Link to="/contact" className="primary_btn btn-icon btn-icon-white">
                              <i className="fas fa-phone"></i>Make A Call</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeTwoNavBar;