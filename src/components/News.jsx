/* eslint-disable no-unused-vars */
import './News.css'
import React from 'react';

function News() {
  return (
    <>
      <div className="news d-flex align-items-center" style={{ marginTop: '190px' }}>
        <h3 style={{ fontFamily: 'mclaren-bespoke, "Courier New", Arial', fontSize: '50px', color: '#363f45', marginTop: '0', marginLeft: '85px' }}>LATEST NEWS</h3>
        <button style={{ backgroundColor: 'transparent', border: '1px solid rgba(128, 128, 128, 0.392)', marginLeft: '20px', fontWeight: '600px', padding: '10px 20px', marginBottom: '5px', fontFamily: 'soho-gothic-pro, Arial, sans-serif', color: '#363f44', fontSize: '12px', letterSpacing: '2px' }}>VIEW ALL</button>
      </div>

      <div className="images d-flex" >
        <div className="image-container" style={{ display: 'flex', flexDirection: 'column' }}>
          <img
            src="../public/newss.webp"
            width="337px"
            height="190px"
            alt="Car"
          />
          <div className="mainss">
            <h6 style={{marginTop: '40px',fontSize:'18px',lineHeight:'30px' }}>750S-Raising the bar</h6>
            <p style={{marginTop: '40px',fontSize:'16px',lineHeight:'20px' }}>There are many parallels between<br/>  record-breaking speed skier Simon Billy and the pursuit of  performance <br/>that created the McLaren 750s</p>
            <p className='views'style={{marginTop: '80px',fontWeight:'600' }}>VIEW ALL</p>
          </div>
        </div>

        <div className="image-container" style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
          <img
            src="../public/news1.webp"
            width="337px"
            height="190px"
            alt="Car"
          />
          <div className="mainss">
            <h6 style={{marginTop: '40px',fontSize:'18px',lineHeight:'30px' }}>Like Minds-Simon Billy</h6>
            <p style={{marginTop: '40px',fontSize:'16px',lineHeight:'20px' }}>The worlds fastest skier on his passion for  <br/>breaking speed barriers, and how the 750S reflects his own  approach to pushing the <br/>limits of performance</p>
            <p className='views'style={{marginTop: '80px',fontWeight:'600' }}>VIEW ALL</p>
          </div>
        </div>

        <div className="image-container" style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
          <img
            src="../public/news3.webp"
            width="337px"
            height="190px"
            alt="Car"
          />
          <div className="mainss">
            <h6 style={{marginTop: '40px',fontSize:'18px',lineHeight:'30px' }}>McLaren Trophy is coming to America</h6>
            <p style={{marginTop: '40px',fontSize:'16px',lineHeight:'20px' }}>Next season, a new chapter of McLaren <br/> Motorsport history will be written, when McLarens one make  race series-McLaren Trophy-launches in America.</p>
            <p className='views' style={{marginTop: '80px',fontWeight:'600' }}>VIEW ALL</p>
          </div>
        </div>

        <div className="image-container" style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
          <img
            src="../public/news5.webp"
            width="337px"
            height="190px"
            alt="Car"
          />
          <div className="mainss">
            <h6 style={{marginTop: '40px',fontSize:'18px',lineHeight:'30px' }}>Race Bulletin: 04 March 2024</h6>
            <p style={{marginTop: '40px',fontSize:'16px',lineHeight:'20px' }}>2024 is less three months old but<br/> McLaren has already settled into new year of GT racing that will feature a long-awaited return to the FIA  World Endurance Championship</p>
            <p className='views' style={{marginTop: '80px',fontWeight:'600' }}>VIEW ALL</p>
          </div>
        </div>

        <div className="image-container" style={{ display: 'flex', flexDirection: 'column' }}>
          <img
            src="../public/car8.png"
            width="47px"
            height="195px"
            alt="Car"
          />
        </div>
      </div>
    </>
  );
}

export default News;
