import React from "react";
import beachDarkBackground from './images/beachDarkBackground.jpg';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
function videos(){
    return(
    <>
    <Parallax pages={1} style={{backgroundImage:`url(${beachDarkBackground})`, backgroundSize: `contain`}}>
        <ParallaxLayer>
            <center>
                <h1 style={{color:"white", WebkitTextStroke: "2px black", fontSize:"25px"}}>Page Not Supported On Mobile</h1>
                <h1 style={{color:"white", WebkitTextStroke: "2px black", fontSize:"50px"}}>Teaser</h1>
                <iframe width="850" height="480.36" src="https://www.youtube.com/embed/MrRtTTovFPM?si=O3OkSvNauvjaFV2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
                
            </center>
        </ParallaxLayer>
    </Parallax>
    </>
    );
}

export default videos;