/* eslint-disable no-unused-vars */
import React from 'react'
import './Newsletter.css'  
function Newsletter() {
  return (
   <div className="main">
    <div className="para1">
        <p style={{marginLeft:'80px',marginTop:'80px',fontFamily:'mclaren-bespoke, "Courier New", Arial',fontSize:'44px'}}>JOIN THE McLAREN FAMILY</p>
    </div>
    <div className="para2" style={{marginTop:'80px'}}>
        <p style={{fontFamily:'soho-gothic-pro, Arial, sans-serif',fontSize:'20px'}}>Subscribe to our newsletter to be kept up to date with all the latest McLaren news</p>
        <form className='d-flex' style={{marginTop:'40px'}}>
            <input  type="text" placeholder='Email address' />
            <button className='button1'>SUBMIT</button>
        </form>
        <p style={{marginTop:'40px',marginBottom:'120px',fontFamily:'soho-gothic-pro, Arial, sans-serif',fontSize:'14px'}}>You may unscribe from these communications at any time. For information on how to unsubscribe,as well as our privacy pratices and commitment to protecting your privacym please review McLarens Privacy Policy.</p>
    </div>
   </div>
  )
}

export default Newsletter