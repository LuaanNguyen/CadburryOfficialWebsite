// import 'src/App.css';
import './otherStuff.css';
import {Link} from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import greenNebula from './images/greenNebula.jpg';
import testTimeline from './images/testTimeline.png';
import beachImage from './images/beachImage.jpg';
import ContactBackground from './images/ContactBackground.jpg';
import instagramIcon from './images/betterInstagramIcon.png';
import youtubeIcon from './images/youtubeIcon.png';

function home() {
    return (
      <>
  
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
  
       <Parallax pages={3.1}>
          <ParallaxLayer speed={0.1} style={
            {
              backgroundImage:`url(${greenNebula})`,
              backgroundSize: `cover`
            }
          } factor={1.5}>
            <div className='CadburryTitle'>
              <div className='titleFont'>
                  <h2 style={{color:'white'}}>Cadburry</h2>
              </div>
            </div>
            <div className='titleRelease'>  
              <h2 style={{color:'white'}} className='text-content'> Releasing in Fall 2024</h2>
            </div>
          </ParallaxLayer>
  
          {/* <ParallaxLayer offset={2} style={{backgroundImage: `url(${greenNebula})`, backgroundSize: `cover`}} speed={0.15} factor={1.5}>
            <div className='ReleaseInfoTitle'>
            <h2 style={{color:'white'}}>Release Info</h2>
            </div>
            <div className='timelineImage'>
            <img src= {testTimeline} alt='Timeline'/>
            </div>
          </ParallaxLayer> */}
  
  
          <ParallaxLayer style={{backgroundImage: `url(${beachImage})`, backgroundSize: `cover`}} offset={1.1} speed={0.3} factor={1.4}>
            
            {/* <video src={testVideo3} autoPlay loop muted style={{backgroundColor:'black'}}></video> */}
            <div className='plotScreenTitle'>
            <h3 style={{
              color:'white',
              WebkitTextStroke:'2px black',
            }}>Plot</h3>
              </div>
              <div className='bigPlotDescription'>
            <h2 style={{color:'white', WebkitTextStroke:'1px black'}} className='testWork'>
            Cadburry is a 5-episode TV show about a man named Davis who wakes up in the Cadburry Mall. Startled and confused, he slowly adjusts to his new surroundings through relationships. However, these connections unravel when Davis realizes the true purpose behind the mall and the people in it. He leads himself down a twisted rabbit hole to learn the truth about the reality called the Cadburry Mall.
            </h2>
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{backgroundImage: `url(${ContactBackground})`}} offset={2} speed={0.5} factor={1.2}>
            <div className="contactInfo">
            <h4>Contact Info</h4>
            </div>
            <div className="contactInfoEmail">
            <h6>officialcadburry@gmail.com</h6>
            </div>
            <div className="instagramIcon">
              <a href="https://www.instagram.com/cadburry_official/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon}/>
              </a>
              <a href="https://www.youtube.com/@CadburryOfficial" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon}/>
              </a>
            </div>
          </ParallaxLayer>
        </Parallax> 
      </div>
      </>
    );
  }

  export default home;