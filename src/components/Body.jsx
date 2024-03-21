/* eslint-disable no-unused-vars */
import React from 'react';

function Body() {
  return (
    <>
    <div className="bodymain" style={{ backgroundColor: '#181c20',maxHeight: '140vh'}}>
      <div className="mainbody" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <div className="parts1" style={{marginTop:'160px',textAlign:'center'}}>
          <p style={{ fontFamily: 'mclaren-bespoke, "Courier New", Arial', color: '#fff', fontSize: '44px' }}>THE FULL FORCE OF McLAREN</p>
          <p style={{ fontFamily: 'soho-gothic-pro, Arial, sans-serif', color: '#fff', fontSize: '20px',fontWeight:'lighter',textAlign:'start',marginLeft:'60px' }}>Super-light engineering, Extreme power. Race-honed agility. We pour every drop of our expertise into our cars to give you the most thrilling driving experience imaginable. This is the full force of McLaren</p>
        </div>
        <div className="parts2"></div>
        </div>
        <div className="mainbodys" style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr', gridTemplateRows: '1fr 1fr' ,marginTop:'60px'}}>
        <div className="parts1 " style={{marginLeft:'60px'}}>
          {/* Video component */}
          <video src="public/Overview_Page_Hero_Preview-0x720-3000k.mp4" controls style={{ width: '100%' }} />
        </div>
        <div className="parts2">
          {/* First photo */}
          <img src="public/i3.jpg" alt="Photo 1" style={{ width: '100%', height: '38.5%' }} />
          <img src="public/i1.jpg" alt="Photo 2" style={{ width: '100%', height: '38.5%' }} />
        </div>
        <div className="parts3">
          {/* Second photo (top) */}
        
          {/* Third photo (bottom) */}
          <img src="public/i2.jpg" alt="Photo 3" style={{ width: '100%', height: '77%' }} />
        </div>
      </div>
      </div>
    </>
  );
}

export default Body;
