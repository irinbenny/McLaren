/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './News.css'

function Shop() {
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [clickCount, setClickCount] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollLeft = () => {
        if (containerRef.current && clickCount > 0) {
            setClickCount((prevCount) => prevCount - 1);
            setScrollPosition((prevPosition) => prevPosition + 25);
            containerRef.current.style.transform = `translateX(${scrollPosition + 25}%)`;
            setActiveIndex(activeIndex - 1);
        }
    };

    const scrollRight = () => {
        if (containerRef.current && clickCount < 4) {
            setClickCount((prevCount) => prevCount + 1);
            setScrollPosition((prevPosition) => prevPosition - 25);
            containerRef.current.style.transform = `translateX(${scrollPosition - 25}%)`;
            setActiveIndex(activeIndex + 1);
        }
    };

    return (
        <>
        
        <div className='news-title d-flex justify-content-between align-items-center'>
            <div className='d-flex covered'>
                <h3>LATEST NEWS</h3>
                <div>
                    <button className='btn1'>VIEW ALL</button>
                </div>
            </div>
            <div className="scroll">
                <Button style={{ border: '1px solid transparent', backgroundColor: 'white' }} onClick={scrollLeft}><FontAwesomeIcon icon={faLessThan} style={{ color: "black", fontSize: '12px' }} className='me-1' /></Button>
                <Button style={{ border: '1px solid transparent', backgroundColor: 'white' }} onClick={scrollRight}><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#000000", fontSize: '12px' }} /></Button>
            </div>
        </div>


                    <div className='slider d-flex mt-5'>
                    <ul className='slider-container' ref={containerRef}>
                    
                    <li>
                        <Card style={{ width: '22rem', border: '2px solid transparent' }} className='p-2'>
                            <Card.Img variant="top" src="https://mclaren.scene7.com/is/image/mclaren/McL750S_Road_Front3_4_A_Final:crop-16x9?wid=480&hei=270" className='img1' />
                            <Card.Body className='cardtext'>
                                <Card.Title style={{ fontWeight: 550, fontSize: '18px',marginTop:'20px' }}>750S-Raising the bar</Card.Title>
                                <Card.Text style={{ fontSize: '15px',marginTop:'40px'}}>
                                    There are many parallels between record-breaking speed skier Simon Billy and that is  the pursuit of performance  that created the McLaren 750s
                                </Card.Text>
                                <p className='views' style={{ marginTop: '80px', fontWeight: '600' }}>VIEW ALL</p>
                            </Card.Body>
                        </Card>
                    </li>
                    <li>
                        <Card style={{ width: '22rem', border: '2px solid transparent' }} className='p-2'>
                            <Card.Img variant="top" src="https://mclaren.scene7.com/is/image/mclaren/750S%20x%20Simon%20Billy%2006%20Crop:crop-16x9?wid=480&hei=270" className='img1'/>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 550, fontSize: '18px',marginTop:'20px' }}>Like Minds-Simon Billy</Card.Title>
                                <Card.Text style={{ fontSize: '15px',marginTop:'40px' }}>
                                The worlds fastest skier on his passion for breaking speed barriers,  and how the 750S reflects his  own  approach to pushing the of the maximum limits of performance
                                </Card.Text>
                                <p className='views'style={{marginTop: '80px',fontWeight:'600' }}>VIEW ALL</p>
                            </Card.Body>
                        </Card>
                    </li>
                    <li>
                        <Card style={{ width: '22rem', border: '2px solid transparent' }} className='p-2'>
                            <Card.Img variant="top" src="https://mclaren.scene7.com/is/image/mclaren/McLaren%20Trophy%20America%20main:crop-16x9?wid=480&hei=270" className='img1'/>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 550, fontSize: '18px',marginTop:'20px' }}>McLaren Trophy is coming </Card.Title>
                                <Card.Text style={{ fontSize: '15px',marginTop:'40px' }}>
                                Next season, a new chapter of McLaren  Motorsport history will be written, when McLarens one make  race series-McLaren Trophy-launches in America
                                </Card.Text>
                                <p className='views'style={{marginTop: '80px',fontWeight:'600' }}>VIEW ALL</p>
                            </Card.Body>
                        </Card>
                    </li>
                    <li>
                        <Card style={{ width: '22rem', border: '2px solid transparent' }} className='p-2'>
                            <Card.Img variant="top" src="https://mclaren.scene7.com/is/image/mclaren/00001996_0119:crop-16x9?wid=480&hei=270"  className='img1'/>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 550, fontSize: '18px',marginTop:'20px' }}>Race Bulletin: 04 March 2024</Card.Title>
                                <Card.Text style={{ fontSize: '15px',marginTop:'40px' }}>
                                2024 is less three months old but McLaren has already settled into new year of GT racing that will feature a long-awaited return to the FIA  World Endurance Championship
                                </Card.Text>
                                <p className='views'style={{marginTop: '80px',fontWeight:'600' }}>VIEW ALL</p>
                            </Card.Body>
                        </Card>
                    </li>
                    <li>
                        <Card style={{ width: '22rem', border: '2px solid transparent' }} className='p-2'>
                            <Card.Img variant="top" src="https://mclaren.scene7.com/is/image/mclaren/MCLAREN_ARTURA_SPIDER_HERO_REAR_34_HIGH-3:crop-16x9?wid=480&hei=270"  className='img1'/>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 550, fontSize: '18px',marginTop:'20px' }}>Artura Spider Performance </Card.Title>
                                <Card.Text style={{ fontSize: '15px',marginTop:'40px' }}>
                                McLaren Automotive extends its model range with next generation Artura Spider and bringing open air performance to McLarens first series-production Hybrid supercar
                                </Card.Text>
                                <p className='views'style={{marginTop: '80px',fontWeight:'600' }}>VIEW ALL</p>
                            </Card.Body>
                        </Card>
                    </li>
                    <li>
                        <Card style={{ width: '22rem', border: '2px solid transparent' }} className='p-2'>
                            <Card.Img variant="top" src="https://mclaren.scene7.com/is/image/mclaren/McLaren-Trophy-AP-Season-1-Rd5-6-Nurburgring-245071:crop-16x9?wid=480&hei=270"  className='img1'/>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 550, fontSize: '18px',marginTop:'20px' }}>McLaren Trophy return 2024</Card.Title>
                                <Card.Text style={{ fontSize: '15px',marginTop:'40px' }}>
                                After a thrilling inagural season in 2023,McLarens single-make race series returns this year.with more Artura Trophy cars and ultra-competitive track action
                                </Card.Text>
                                <p className='views'style={{marginTop: '80px',fontWeight:'600' }}>VIEW ALL</p>
                            </Card.Body>
                        </Card>
                    </li>
                    <li>
                        <Card style={{ width: '22rem', border: '2px solid transparent' }} className='p-2'>
                            <Card.Img variant="top" src="https://mclaren.scene7.com/is/image/mclaren/424_NSTAR_MCLN_ART_REVEAL_0327:crop-16x9?wid=480&hei=270"  className='img1'/>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 550, fontSize: '18px',marginTop:'20px' }}>Like Minds - Anton Molnar</Card.Title>
                                <Card.Text style={{ fontSize: '15px',marginTop:'40px' }}>
                                Hungarian artist Anton creates unique works of art combining classical techniques with modern vision. Anton talks passionately of  wide ranging inspirations.
                                </Card.Text>
                                <p className='views'style={{marginTop: '80px',fontWeight:'600' }}>VIEW ALL</p>
                            </Card.Body>
                        </Card>
                    </li>

                </ul>
            </div>
     
        </>
    );
}

export default Shop;
