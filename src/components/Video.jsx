/* eslint-disable no-unused-vars */
import React from 'react'
import './video.css'
import video from '../assets/ArtCarRevealPreview-0x720-3000k.mp4';
function Video() {
  return (

    <>
  <div className="background-video">
    <video autoPlay muted loop style={{ width: '100%', height: 'auto' }}>
    <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    <p className='mb-5 texteds'>750S WITH</p>
    <p className='texted'>3-7-59 THEME</p>
    <button>DISCOVER</button>
  </div>
</>
  
  )
}

export default Video