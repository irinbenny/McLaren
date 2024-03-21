/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Navbars() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <div id="app" className='container-fluid'>
      <div className="bodys">
        <p className='title'>PERFORMANCE AMPLIFIED</p>
        <p className='subtitle'>NEW McLAREN <br></br>ARTURA SPIDER</p>
        <button>DISCOVER MORE</button>
      </div>
      
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <div className="navbar-container">
          <Navbar expand="lg" className="navbar-custom" style={{ backgroundColor: 'transparent' }}>
            <Navbar.Brand href="#home" className="mr-auto"> <img src="public/logo.png" alt="" className="logo" style={{marginLeft:'100px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavDropdown title="SUPERCARS" id="basic-nav-dropdown" className="dropdown-white me-3">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                {/* Other NavDropdowns */}
              </Nav>
            </Navbar.Collapse>
            <Button className='find'>FIND A RETAILER</Button>
            

              <Button variant="primary" onClick={handleShow}>
              <FontAwesomeIcon icon={faBars} className='menu fa-xl' onClick={handleShow} />
               </Button>
               <Offcanvas placement="end" show={showOffcanvas} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life, you can have the elements you have chosen. Like text, images,
          lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
           
          </Navbar>
        </div>
      </div>

     
    </div>
  );
}

export default Navbars;
