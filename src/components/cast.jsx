import React from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import beachImage from './images/beachImage.jpg';


const cast = () => {
    return(
        <>
            <Parallax pages = {3} horizontal>
            <ParallaxLayer style={{backgroundImage: `url(${beachImage})`, backgroundSize: `cover`}} offset={1}></ParallaxLayer>
                <ParallaxLayer style={{backgroundImage: `url(${beachImage})`, backgroundSize: `cover`} } offset={2}></ParallaxLayer>
                <ParallaxLayer style={{backgroundImage: `url(${beachImage})`, backgroundSize: `cover`}}>
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg" className="gwPort"/>  */}
                    <div className="castImageGrid">
                        <div class="cast1"><img src="https://hips.hearstapps.com/hmg-prod/images/gilbert_stuart_williamstown_portrait_of_george_washington_promo.jpg" class="portImage"/> John Hopkins - Main Character</div>
                        <div class="cast2"><img src="https://hips.hearstapps.com/hmg-prod/images/gilbert_stuart_williamstown_portrait_of_george_washington_promo.jpg" class="portImage"/> John Hopkins - Main Character</div>
                        <div class="cast3"><img src="https://hips.hearstapps.com/hmg-prod/images/gilbert_stuart_williamstown_portrait_of_george_washington_promo.jpg" class="portImage"/> John Hopkins - Main Character</div>
                        <div class="cast4"><img src="https://hips.hearstapps.com/hmg-prod/images/gilbert_stuart_williamstown_portrait_of_george_washington_promo.jpg" class="portImage"/> John Hopkins - Main Character</div>
                        <div class="cast5"><img src="https://hips.hearstapps.com/hmg-prod/images/gilbert_stuart_williamstown_portrait_of_george_washington_promo.jpg" class="portImage"/> John Hopkins - Main Character</div>
                        <div class="cast6"><img src="https://hips.hearstapps.com/hmg-prod/images/gilbert_stuart_williamstown_portrait_of_george_washington_promo.jpg" class="portImage"/> John Hopkins - Main Character</div>
                        <div class="cast7"><img src="https://hips.hearstapps.com/hmg-prod/images/gilbert_stuart_williamstown_portrait_of_george_washington_promo.jpg" class="portImage"/> John Hopkins - Main Character</div>
                    </div>
                </ParallaxLayer>

                

            </Parallax>
        
        </>
    );
};

export default cast;