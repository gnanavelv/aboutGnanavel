import React, { Component } from 'react';
import Resume from './component/GNANAVEL-Resume.pdf';
import Particles from "react-particles-js";


class App extends Component {



  render() {
 
    return (
      <div className="main-wrap" >


   <div className="container" style={{ zIndex: 10 }} >
     
  <div className="row main-row">
     <div className="col-lg-8 col-lg-2">
      <p className="welcome">Hi, I am Gnanavel. </p> 
      <p className="github-text">I am a Full-Stack developer and a big fan of the open source community also love building new projects. My coding work can be seen on my <a href="https://github.com/Gnanu27" rel="noopener noreferrer" target="_blank">Github</a>.</p>
      <p className="youtube-text">I have passion for creating machine learning models and building web applications.</p>
      <p className="social-text">Bad at sarcasm and above average at Programming</p>
      <p className="linkedin-text">Vist my <a href="https://linkedin.com/in/gnanavelv27" rel="noopener noreferrer" target="_blank">Linkedin</a> profile. If you add me don't expect an instant response, I don't usually check it.</p>
      <p className="resume-text">Lastly, my last updated <a target="_blank" href={Resume} rel="noopener noreferrer">resume</a> (Feburary 2019).</p>
      <p className="contact-text">Contact: gnanavel.py2k@gmail.com</p>
    </div>
  </div>

</div>

      <Particles      style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      zIndex: -10
    }}

    params={{  particles: {
        number: {
          value: 30,
          density: {
            enable: false,
            value_area: 900
          }
        },
        color: {
          value: "#d6d8d0"
        },
        move: {
          speed: 3
        },
        line_linked: {
          enable: true,
          opacity: 0.5,
          color: "#d6d8d0"
        }
      },

    }}
  />


</div>
     
    );
  }
}

export default App;
