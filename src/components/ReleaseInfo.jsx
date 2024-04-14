import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import greenNebula from './images/greenNebula.jpg';
import testTimeline from './images/testTimeline.png';
import "./otherStuff.css";
import lightTestBackground from './images/lightTestBackground.jpeg';

const ReleaseInfo = () => {
    return(
        <>
        <Parallax pages={1}>
            <ParallaxLayer style={{backgroundImage: `url(${lightTestBackground})`, backgroundSize: `cover`}}>
                <div className='ReleaseInfoTitle'>
                    <center>
                        <h1 style={{color:'white'}}> Official trailer releasing on 5/17/24 </h1>
                        <h1 style={{color: 'white'}}>More Info Coming</h1>
                    </center>
                </div>
                {/* <div className='timelineImage'>
                <img src= {testTimeline} alt='Timeline' class="centerImage"/>
                </div> */}
            </ParallaxLayer>
          </Parallax>
        </>
    );
};

export default ReleaseInfo;