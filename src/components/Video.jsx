/* eslint-disable no-unused-vars */
import React from 'react'
import './video.css'
function Video() {
  return (

    <>
  <div className="background-video">
    <video autoPlay muted loop style={{ width: '100%', height: 'auto' }}>
      <source src="public/ArtCarRevealPreview-0x720-3000k.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p className='mb-5'>750S WITH</p>
    <p>3-7-59 THEME</p>
    <button style={{ }}>DISCOVER</button>
  </div>
</>
  
  )
}

export default Video