/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import { Navbar, Nav, Button, Offcanvas, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo1.png'
import car2 from '../assets/o3.png'
import car3 from '../assets/o4.png'

function Navbars() {

  const [showOffcanvasSUPERCARS, setShowOffcanvasSUPERCARS] = useState(false);
  const [showOffcanvasGTS, setShowOffcanvasGTS] = useState(false);
  const [showOffcanvasULTIMATE, setShowOffcanvasULTIMATE] = useState(false);
  const [showOffcanvasSOLUSGT, setShowOffcanvasSOLUSGT] = useState(false);
  const [showOffcanvasLEGACY, setShowOffcanvasLEGACY] = useState(false);

  const handleToggleOffcanvas = (menu) => {
    switch (menu) {
      case "SUPERCARS":
        setShowOffcanvasSUPERCARS(!showOffcanvasSUPERCARS);
        break;
      case "GTS":
        setShowOffcanvasGTS(!showOffcanvasGTS);
        break;
      case "ULTIMATE":
        setShowOffcanvasULTIMATE(!showOffcanvasULTIMATE);
        break;
      case "SOLUSGT":
        setShowOffcanvasSOLUSGT(!showOffcanvasSOLUSGT);
        break;
      case "LEGACY":
        setShowOffcanvasLEGACY(!showOffcanvasLEGACY);
        break;
      default:
        break;
    }
  };

  const [showOffcanvasModel, setShowOffcanvasModel] = useState(false);
  const [showOffcanvasMenu, setShowOffcanvasMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1220);

  const handleCloseModel = () => setShowOffcanvasModel(false);
  const handleCloseMenu = () => setShowOffcanvasMenu(false);

  const handleShowModel = () => {
    setShowOffcanvasModel(true);
    setShowOffcanvasMenu(false); // Close the other Offcanvas
  };

  const handleShowMenu = () => {
    setShowOffcanvasMenu(true);
    setShowOffcanvasModel(false); // Close the other Offcanvas
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1279);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



 
  const [openCategory, setOpenCategory] = useState(null);
  const [arrowRotations, setArrowRotations] = useState({
    bespoke: 0,
    experiences: 0,
    about: 0,
    motorsport: 0
  });

  const toggleSubcategories = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setArrowRotations({
      ...arrowRotations,
      [category]: arrowRotations[category] === 0 ? -180 : 0
    });
  };

  return (
    <div id="app" className='container-fluid'>
      <div className="bodys">
    <p className='title'>PERFORMANCE AMPLIFIED</p>
    {window.innerWidth > 450 ? (
        <p className='subtitle'>NEW McLAREN <br />ARTURA SPIDER</p>
    ) : (
        <p className='subtitle'>NEW McLAREN ARTURA SPIDER</p>
    )}
    <button>DISCOVER MORE</button>
</div>
      
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <div className="navbar-container">
          <Navbar expand="lg" className="navbar-custom d-flex" style={{ backgroundColor: 'transparent' }}>
          <div className="d-flex align-items-center">
          <Navbar.Brand href="#home" className=" logos"> <img src="src/assets/logo.png" alt="" className="logo"/></Navbar.Brand>
            {isMobile ? (
            <Button className='model-toggle d-flex pt-3' onClick={handleShowModel}  style={{ backgroundColor: 'transparent', border: 'none'}}>
              MODEL
              <FontAwesomeIcon icon={faChevronDown} className='ms-2 pt-1'/></Button>
              ):(
                <Nav className="ml-auto">
              <div onClick={() => handleToggleOffcanvas("SUPERCARS")} className="dropdown-white me-4 d-flex" style={{ cursor: 'pointer' }}>
                SUPERCARS
                <FontAwesomeIcon icon={faChevronDown} className='ms-2 '/>
              </div>
              <div onClick={() => handleToggleOffcanvas("GTS")} className="dropdown-white me-4 d-flex" style={{ cursor: 'pointer' }}>
                GTS
                <FontAwesomeIcon icon={faChevronDown} className='ms-2 '/>
              </div>
              <div onClick={() => handleToggleOffcanvas("ULTIMATE")} className="dropdown-white me-4 d-flex" style={{ cursor: 'pointer' }}>
                ULTIMATE
                <FontAwesomeIcon icon={faChevronDown} className='ms-2 '/>
              </div>
              <div onClick={() => handleToggleOffcanvas("SOLUSGT")} className="dropdown-white me-4 d-flex" style={{ cursor: 'pointer' }}>
                SOLUSGT
                <FontAwesomeIcon icon={faChevronDown} className='ms-2 '/>
              </div>
              <div onClick={() => handleToggleOffcanvas("LEGACY")} className="dropdown-white me-4 d-flex" style={{ cursor: 'pointer' }}>
                LEGACY
                <FontAwesomeIcon icon={faChevronDown} className='ms-2 '/>
              </div>
            </Nav>
       
              
            )}
      
          <Offcanvas
              placement="top"
              show={showOffcanvasModel}
              onHide={ handleCloseModel}
              style={{ backgroundColor: '#363f44', border: 'none',height:'800px' }}
            >
              <Offcanvas.Header closeButton>
              <img src="src/assets/logo.png" alt="" />
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-body">
              <div className='d-flex text-white'>
              <div>
              <img src="https://mclaren.scene7.com/is/image/mclaren/P16_AR_SideRender-jelly?fmt=png-alpha&wid=230" alt="cars" className=' pt-5'/>
              <p style={{textAlign:'center',marginTop:'10px'}}>ARTURA</p>
              </div>
              <div>
              <img src="https://mclaren.scene7.com/is/image/mclaren/ML_P16S_preview_v2?fmt=png-alpha&wid=230" alt="cars" className=' pt-5'/>
              <p style={{textAlign:'center',marginTop:'10px'}}>ARTURA SPIDER</p>
              </div>
              </div>
              <div className='d-flex text-white'>
              <div>
              <img src={car2} alt="cars" className='me-3 pt-5 carrs'/>
              <p style={{textAlign:'center',marginTop:'10px',marginRight:'40px'}}>75OS</p>
              </div>
              <div>
              <img src={car3} alt="cars" className='me-5 pt-5 carrs '/>
              <p style={{textAlign:'center',marginTop:'10px',marginRight:'40px'}}>75OS SPIDER</p>
              </div>
              </div>
              <div>
              <div>
              <img src="https://mclaren.scene7.com/is/image/mclaren/View_All_Models_Car_Image?fmt=png-alpha&amp;wid=190" alt="cars" style={{marginTop:'40px'}}/>
              <p style={{marginTop:'10px',marginLeft:'59px',color:'white'}}>ALL MODELS</p>
              </div>
              </div>
              
          </Offcanvas.Body>
      </Offcanvas>
      </div>

 
        
        <Offcanvas show={showOffcanvasSUPERCARS} onHide={() => setShowOffcanvasSUPERCARS(false)} placement="top" style={{ backgroundColor: '#363f44', border: 'none',height:'400px' }}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{marginLeft:'60px'}}>
            <img src={logo} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{marginLeft:'100px'}} className='d-flex'>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/P16_AR_SideRender-jelly?fmt=png-alpha&wid=230" alt="cars" className='me-5 pt-5'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>ARTURA</p>
        <div class="overlay">
          <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
          </div>
        </div>
        </div>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/ML_P16S_preview_v2?fmt=png-alpha&wid=230" alt="cars" className='me-5 pt-5'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>ARTURA SPIDER</p>
        <div class="overlay">
          <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
            </div>
        </div>
        </div>
        <div className="image-container">
        <img src="public/o3.png" alt="cars" style={{height:'110px',width:'200px'}} className='me-5 pt-5'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>75OS</p>
        <div class="overlay">
          <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
            </div>
        </div>
        </div>
        <div className="image-container">
        <img src="public/o4.png" alt="cars" style={{height:'110px',width:'200px'}} className='me-5 pt-5'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>75OS SPIDER</p>
        <div class="overlay">
          <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
            </div>
        </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={showOffcanvasGTS} onHide={() => setShowOffcanvasGTS(false)} placement="top" style={{ backgroundColor: '#363f44', border: 'none',height:'400px' }}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{marginLeft:'60px'}}>
            <img src={logo} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{marginLeft:'160px'}} className='d-flex'>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/P22_SideRender-jelly_2?fmt=png-alpha&amp;wid=230" alt="cars" className='me-5 pt-5'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>GTS</p>
        <div class="overlay">
          <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
          </div>
        </div>
        </div>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/View_All_Models_Car_Image?fmt=png-alpha&wid=230" alt="cars" className='me-5 pt-5'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>ALL MODELS</p>
        <div class="overlay">
          <div class="button-container">
          <button className='btn12'>DISCOVER</button>
            </div>
        </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={showOffcanvasULTIMATE} onHide={() => setShowOffcanvasULTIMATE(false)} placement="top" style={{ backgroundColor: '#363f44', border: 'none' ,height:'450px'}}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{marginLeft:'60px'}}>
        <img src={logo} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="cars d-flex" style={{marginLeft:'160px'}}>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/P26-Jellybean-1?fmt=png-alpha&wid=230" alt="cars" className='me-5 pt-4'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>ELVA</p>
        <div class="overlay">
          <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
            </div>
        </div>
        </div>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/senna-gtr-optimised-30-1?fmt=png-alpha&wid=230" alt="cars" className='me-5 pt-4'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>McLAREN SENNA GTR</p>
        <div class="overlay">
        <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
          </div>
        </div>
        </div>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/Speedtail-optimised-30-1?fmt=png-alpha&wid=230" alt="cars" className='me-5 pt-4'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>SPEEDTAIL</p>
        <div class="overlay">
        <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
          </div>
        </div>
        </div>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/senna-2?fmt=png-alpha&wid=230" alt="cars" className='me-5 pt-4'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>McLAREN SENNA</p>
        <div class="overlay">
        <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
          </div>
        </div>
        
        </div>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/View_All_Models_Car_Image?fmt=png-alpha&wid=230" alt="cars" style={{marginLeft:'160px'}}/>
        <p className=' pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px',marginLeft:'210px'}}>ALL MODELS</p>
        <div class="overlay">
        <div class="button-container">
        <button className='btn12'>DISCOVER</button>
          </div>
        </div>
        </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={showOffcanvasSOLUSGT} onHide={() => setShowOffcanvasSOLUSGT(false)} placement="top" style={{ backgroundColor: '#363f44', border: 'none',height:'400px' }}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{marginLeft:'60px'}}>
        <img src={logo} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{marginLeft:'160px'}} className='d-flex'>
        <div className="image-container me-2">
        <img src="https://mclaren.scene7.com/is/image/mclaren/image%2058?fmt=png-alpha&wid=230" alt="cars" className='me-5 pt-5'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>SOLUS GT</p>
        <div class="overlay">
        <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
          </div>
        </div>
        </div>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/View_All_Models_Car_Image?fmt=png-alpha&amp;wid=230" alt="cars" className='me-5 pt-5'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>ALL MODELS</p>
        <div class="overlay">
        <div class="button-container">
        <button className='btn12'>DISCOVER</button>
          </div>
        </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={showOffcanvasLEGACY} onHide={() => setShowOffcanvasLEGACY(false)} placement="top" style={{ backgroundColor: '#363f44', border: 'none' ,height:'400px'}}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{marginLeft:'60px'}}>
        <img src={logo} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{marginLeft:'160px'}} className='d-flex'>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/View_All_Models_Car_Image?fmt=png-alpha&amp;wid=230" alt="cars" className='me-5 pt-5'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>ALL MODELS</p>
        <div class="overlay">
        <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
          </div>
        </div>
        </div>
        <div className="image-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/765-1?fmt=png-alpha&wid=230" alt="cars" className='me-5 pt-5'/>
        <p className='text-center me-5 pt-4 text-white' style={{fontSize:'14px',fontWeight:'600',letterSpacing:'1.5px'}}>765LT</p>
        <div class="overlay">
        <div class="button-container">
          <button className='btn15'>DISCOVER</button>
          <button className='btn15'>CONFIGURE</button>
          </div>
        </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>

    <div className='buttons'>
    <Button className="  pt-2 justify-content-end" style={{ backgroundColor: 'transparent', border: 'none',float:'right'}} onClick={handleShowMenu}>
        <FontAwesomeIcon icon={faBars} className='menu fa-xl' onClick={handleShowMenu} />
    </Button>
    <Button className='find '>FIND A RETAILER</Button>
    </div>
  </Navbar>


  <Offcanvas
  placement="end"
  show={showOffcanvasMenu}
  onHide={handleCloseMenu}
  style={{ backgroundColor: '#363f44', border: 'none' }} 
>
<Offcanvas.Header style={{justifyContent:'space-between'}}>
  <img src="src/assets/logo1.png" alt="" style={{height:'39px',width:'126px'}}/>
  <div>
  <button className="close-button" onClick={handleCloseMenu}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 20" class="small-svg">
      <path d="M16.4 10l8.3-8.3a1 1 0 000-1.4 1 1 0 00-1.4 0L14.6 9h-4.2L1.7.3A1 1 0 00.3.3a1 1 0 000 1.4L8.6 10 .3 18.3a1 1 0 000 1.4 1 1 0 001.4 0l8.7-8.7h4.2l8.7 8.7a1 1 0 001.4 0 1 1 0 000-1.4z" fill="#fff" fillRule="evenodd"></path>
    </svg>
  </button>
  </div>
</Offcanvas.Header>
  <Offcanvas.Body className="offcanvas-bodys text-white"> 
   <div className={`offcanvas-body ${showOffcanvasMenu ? 'show-menu' : ''}`}>
      <div className={`category ${openCategory === 'bespoke' ? 'show' : ''}`}>
        <button className="category-button" onClick={() => toggleSubcategories('bespoke')}>
          BESPOKE
          <span className='icon arrow-icon' style={{ transform: `rotate(${arrowRotations['bespoke']}deg)` }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
              <path d="M.3.3a1 1 0 011.4 0L5.4 4h1.2L10.3.3a1 1 0 011.4 0 1 1 0 010 1.4L7.4 6H4.6L.3 1.7A.9.9 0 010 1 .9.9 0 01.3.3z"></path>
            </svg>
          </span>
        </button>
        {openCategory === 'bespoke' && (
          <div className='sub-categories'>
            <a href="#" className="sub-category cta" target="_self">Overview</a>
            <a href="#" className="sub-category cta" target="_self">Defined</a>
            <a href="#" className="sub-category cta" target="_self">Bespoke</a>
            <a href="#" className="sub-category cta" target="_self">Heritage</a>
            <a href="#" className="sub-category cta" target="_self">Verdant Theme GT</a>
          </div>
        )}
      </div>
      <div className={`category ${openCategory === 'experiences' ? 'show' : ''}`}>
        <button className="category-button" onClick={() =>toggleSubcategories('experiences')}>
        EXPERIENCES
        <span className='icon arrow-icon' style={{ transform: `rotate(${arrowRotations['experiences']}deg)` }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
              <path d="M.3.3a1 1 0 011.4 0L5.4 4h1.2L10.3.3a1 1 0 011.4 0 1 1 0 010 1.4L7.4 6H4.6L.3 1.7A.9.9 0 010 1 .9.9 0 01.3.3z"></path>
            </svg>
          </span>
        </button>
        {openCategory === 'experiences' && (
          <div className='sub-categories'>
            <a href="#" className="sub-category cta" target="_self">OWNERSHIP</a>
            <a href="#" className="sub-category cta" target="_self">GENUINUE PARTS</a>
            <a href="#" className="sub-category cta" target="_self">GENUINUE ACCESSORIES</a>
            <a href="#" className="sub-category cta" target="_self">SERVICE AND MAINTAINCE</a>
            <a href="#" className="sub-category cta" target="_self">TRACK TELEMETRY</a>
          </div>
        )}
      </div>
      <div className={`category ${openCategory === 'about' ? 'show' : ''}`}>
        <button className="category-button" onClick={() =>toggleSubcategories('about')}>
        ABOUT
        <span className='icon arrow-icon' style={{ transform: `rotate(${arrowRotations['about']}deg)` }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
              <path d="M.3.3a1 1 0 011.4 0L5.4 4h1.2L10.3.3a1 1 0 011.4 0 1 1 0 010 1.4L7.4 6H4.6L.3 1.7A.9.9 0 010 1 .9.9 0 01.3.3z"></path>
            </svg>
          </span>
        </button>
        {openCategory === 'about' && (
          <div className='sub-categories'>
            <a href="#" className="sub-category cta" target="_self">OVERVIEW</a>
            <a href="#" className="sub-category cta" target="_self">DESIGN PHILOSOPHY</a>
            <a href="#" className="sub-category cta" target="_self">INNOVATION</a>
            <a href="#" className="sub-category cta" target="_self">FROM THE BEGINING</a>
            <a href="#" className="sub-category cta" target="_self">OUR HOME</a>
          </div>
        )}
      </div>
      <div className={`category ${openCategory === 'motorsport' ? 'show' : ''}`}>
        <button className="category-button" onClick={() =>toggleSubcategories('motorsport')}>
        MOTORSPORT
        <span className='icon arrow-icon' style={{ transform: `rotate(${arrowRotations['motorsport']}deg)` }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
              <path d="M.3.3a1 1 0 011.4 0L5.4 4h1.2L10.3.3a1 1 0 011.4 0 1 1 0 010 1.4L7.4 6H4.6L.3 1.7A.9.9 0 010 1 .9.9 0 01.3.3z"></path>
            </svg>
          </span>
        </button>
        {openCategory === 'motorsport' && (
          <div className='sub-categories'>
            <a href="#" className="sub-category cta" target="_self">MOTORSPORT</a>
            <a href="#" className="sub-category cta" target="_self">MODELS</a>
            <a href="#" className="sub-category cta" target="_self">MODELS</a>
          </div>
        )}
      </div>
      <div className={`category ${openCategory === 'motorsport' ? 'show' : ''}`}>
        <button className="category-button" onClick={() =>toggleSubcategories('motorsport')}>
        LATEST NEWS
        </button>
      </div>
      <div className={`category ${openCategory === 'motorsport' ? 'show' : ''}`}>
        <button className="category-button" onClick={() =>toggleSubcategories('motorsport')}>
          WORLD OF McLAREN
        </button>
      </div>


      <div className="general" style={{marginTop:'70px'}}>
      <div className="line"></div>
      <div className={`category ${openCategory === 'motorsport' ? 'show' : ''}`}>
        <button className="category-button" onClick={() =>toggleSubcategories('motorsport')}>
          FIND A RETAILER
          <span class="icon xs-svg" data-component="icon" data-icon="arrow-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 11.7"><path d="M8.3 0H2.2a1 1 0 100 2h5.3l.4.4L0 10.3l1.4 1.4 7.9-7.9.4.4v5.3a1.1 1.1 0 001 1 1 1 0 001-1V3.4z"></path></svg></span>
        </button>
      </div>
      <div className={`category ${openCategory === 'motorsport' ? 'show' : ''}`}>
        <button className="category-button" onClick={() =>toggleSubcategories('motorsport')}>
          PRE-OWNED
          <span class="icon xs-svg" data-component="icon" data-icon="arrow-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 11.7"><path d="M8.3 0H2.2a1 1 0 100 2h5.3l.4.4L0 10.3l1.4 1.4 7.9-7.9.4.4v5.3a1.1 1.1 0 001 1 1 1 0 001-1V3.4z"></path></svg></span>
        </button>
      </div>
      <div className={`category ${openCategory === 'motorsport' ? 'show' : ''}`}>
        <button className="category-button" onClick={() =>toggleSubcategories('motorsport')}>
          ENQUIRY
          <span class="icon xs-svg" data-component="icon" data-icon="arrow-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 11.7"><path d="M8.3 0H2.2a1 1 0 100 2h5.3l.4.4L0 10.3l1.4 1.4 7.9-7.9.4.4v5.3a1.1 1.1 0 001 1 1 1 0 001-1V3.4z"></path></svg></span>
        </button>
        <div className={`category ${openCategory === 'motorsport' ? 'show' : ''}`}>
        <button className="category-button" onClick={() =>toggleSubcategories('motorsport')}>
          McLAREN STORE
          <span class="icon xs-svg" data-component="icon" data-icon="arrow-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 11.7"><path d="M8.3 0H2.2a1 1 0 100 2h5.3l.4.4L0 10.3l1.4 1.4 7.9-7.9.4.4v5.3a1.1 1.1 0 001 1 1 1 0 001-1V3.4z"></path></svg></span>
        </button>
      </div>
      </div>
      </div>
      </div>
    </Offcanvas.Body>
</Offcanvas>
           
       
        </div>
      </div>

     
    </div>
  );
}

export default Navbars;
