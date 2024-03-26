/* eslint-disable no-unused-vars */
import React from 'react'
import './video.css'
function Video() {
  return (

    <>
  <div className="background-video">
    <video autoPlay muted loop style={{ width: '100%', height: 'auto' }}>
      <source src="public/ArtCarRevealPreview-0x720-3000k.mp4" type="video/mp4" />
    </video>

    <p className='mb-5 texteds'>750S WITH</p>
    <p className='texted'>3-7-59 THEME</p>
    <button>DISCOVER</button>
  </div>
</>
  
  )
}

export default Video