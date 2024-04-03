/* eslint-disable no-unused-vars */
import React from 'react'
import './grids.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function Grids() {
  return (
    <>
  <div className="total">
    <div className="total1">
        <div className="t1">
            <div className="image-overlay"></div>
            <img src="https://mclaren.scene7.com/is/image/mclaren/Alpine%20Drive%202017-790-36:crop-4x3?wid=1920&hei=1440" alt="Photo 1" />
            <div className="content-wrapper" style={{ position: 'absolute', bottom: '5%', left: '25%', transform: 'translate(-50%, -50%)' }}>
                <h3 className="heading" style={{ color: 'white', zIndex: '1', fontFamily: 'mclaren-bespoke, "Courier New", Arial' }}>EXPERIENCES</h3>
                <p className="description"><FontAwesomeIcon icon={faGreaterThan} className="icon" />DISCOVER</p>
            </div>
        </div>
        <div className="t2">
        <div className="image-overlay"></div>
            <img  src="https://mclaren.scene7.com/is/image/mclaren/MTC-Hero-1920x1080:crop-4x3?wid=1920&hei=1440" alt="Photo 2"/>
            <div className="content-wrapper" style={{ position: 'absolute', bottom: '5%', left: '20%', transform: 'translate(-50%, -50%)' }}>
                <h3 className="heading" style={{ color: 'white', zIndex: '1', fontFamily: 'mclaren-bespoke, "Courier New", Arial'}}>ABOUT</h3>
                <p className="description"><FontAwesomeIcon icon={faGreaterThan} className="icon" />DISCOVER</p>
            </div>
        </div>
    </div>

    <div className="total2">
        <div className="t3">
            <div className="image-overlay"></div>
            <img src="https://mclaren.scene7.com/is/image/mclaren/p13_570s_spyder_281_range_still_v11_road_plate_lr-14:crop-4x3?wid=1920&hei=1440" alt="Photo 3"/>
            <div className="content-wrapper" style={{ position: 'absolute', bottom: '5%', left: '35%', transform: 'translate(-50%, -50%)' }}>
                <h3 className="heading" style={{ color: 'white', zIndex: '1', fontFamily: 'mclaren-bespoke, "Courier New", Arial' }}>QUALIFIED PREOWNED</h3>
                <p className="description"><FontAwesomeIcon icon={faGreaterThan} className="icon" />DISCOVER</p>
            </div>
        </div>
        <div className="t4">
            <div className="image-overlay" ></div>
            <img src="https://mclaren.scene7.com/is/image/mclaren/McLarenArtura-7:crop-4x3?wid=1920&hei=1440" alt="Photo 4" />
            <div className="content-wrapper" style={{ position: 'absolute', bottom: '5%', left: '25%', transform: 'translate(-50%, -50%)'}}>
                <h3 className="heading" style={{ color: 'white', zIndex: '1', fontFamily: 'mclaren-bespoke, "Courier New", Arial' }}>OWNERSHIP</h3>
                <p className="description"><FontAwesomeIcon icon={faGreaterThan} className="icon" />DISCOVER</p>
            </div>
        </div>
    </div>

    <div className="total3">
        <div className="t5">
            <div className="image-overlay" ></div>
            <img src="https://mclaren.scene7.com/is/image/mclaren/MSO_720S%20Spider%20by%20MSO_Wheel_Medium-3:crop-4x3?wid=1920&hei=1440" alt="Photo 5" />
            <div className="content-wrapper" style={{ position: 'absolute', bottom: '5%', left: '20%', transform: 'translate(-50%, -50%)' }}>
            <h3 className="heading" style={{ color: 'white',  fontFamily: 'mclaren-bespoke, "Courier New", Arial', zIndex: '1' }}>BESPOKEN</h3>
            <p className="description"><FontAwesomeIcon icon={faGreaterThan} className="icon" />DISCOVER</p>
        </div>
        </div>
        <div className="t6">
            <div className="image-overlay" ></div>
            <img src="https://mclaren.scene7.com/is/image/mclaren/McLaren_Goodwood_FOS_21_01:crop-4x3?wid=1920&hei=1440" alt="Photo 6" />
            <div className="content-wrapper" style={{ position: 'absolute', bottom: '5%', left: '25%', transform: 'translate(-50%, -50%)' }}>
                <h3 className="heading" style={{ color: 'white', zIndex: '1', fontFamily: 'mclaren-bespoke, "Courier New", Arial' }}>MOTOSPORT</h3>
                <p className="description"><FontAwesomeIcon icon={faGreaterThan} className="icon" />DISCOVER</p>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Grids