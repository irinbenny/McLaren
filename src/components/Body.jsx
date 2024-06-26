/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import './Body.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import video from '../assets/Overview_Page_Hero_Preview-0x720-3000k.mp4';
import img1 from '../assets/i1.jpg';
import img3 from '../assets/i3.jpg';
import img2 from '../assets/grid.jpg';

function Body() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div className="bodymain">
        <div className="mainbody">
          <div className="parts1">
            <p className='p1'>THE FULL FORCE OF McLAREN</p>
            <p className='p2'>Super-light engineering, Extreme power. Race-honed agility. We pour every drop of our expertise into our cars to give you the most thrilling driving experience imaginable. This is the full force of McLaren</p>
          </div>
          <div className="parts6"></div>
        </div>
        <div className="mainbodys">
          <div className="parts11">
            <video autoPlay muted loop id="myVideo"  ref={videoRef} >
             <source  src={video}/>
            </video>
          </div>

          <div className="parts2">
            <img src={img3} alt="Photo 1" />
            <img src={img1} alt="Photo 2" />
          </div>

          <div className="parts3">
            <img src={img2} alt="Photo 3" />
          </div>

          {/* Play/Pause Button */}
          <div className="playpause position-absolute end-0" style={{marginTop: '400px',marginRight:'70px'}}>
            <Button className='play bg-transparent' size="lg" onClick={handlePlayPause}>
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} style={{ color: 'white', fontSize: '16px',marginRight:'-1px' }} className='icon' />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
