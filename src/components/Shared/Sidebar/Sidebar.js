import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const Sidebar = ({ show, handleClose }) => {
   const Home = <NavLink to="/home">Home</NavLink>
   const Department = <NavLink to="/services">Departments </NavLink>
   const Doctors = <NavLink to="/doctors">Services </NavLink>
   const Shop = <NavLink to="/shop">About</NavLink>

   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
               </Offcanvas.Header>
               <Offcanvas.Body>


                  <Collapsible trigger={Home} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                    
                  </Collapsible>

                  <Collapsible trigger={Department} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                      </Collapsible>

                  <Collapsible trigger={Doctors} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                 
                  </Collapsible>

                  <Collapsible trigger={Shop} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                   
                  </Collapsible>

                  


               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;