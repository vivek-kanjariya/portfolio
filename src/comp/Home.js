import React from "react";
import "../comp/style.css";
import AnimatedCursor from "react-animated-cursor";
import Tanjiro from "./vid/Tanjiro.mp4";
import Typewriter from "typewriter-effect";
// import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div className="home">
            <AnimatedCursor
        innerSize={10}
        outerSize={50}
        color="245,245,245"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={6}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <video src={Tanjiro} autoPlay loop muted />
      <div className="main">
        <h6 className="main-name">Vivek K</h6>
        <p className="main-p">
          __Fullstack-Developer 
        </p>
        <h1 className="type" style={{color:"white"}}> an inspiring<Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('<h6 style="color: #ffffff;">web-Developer</h6>')
                .pauseFor(700)
                .deleteAll()
                .typeString('<h6 style="color: #ffffff;">Video-Editor</h6>')
                .pauseFor(700)
                .deleteAll()
                .typeString('<h6 style="color: #ffffff;">Anything what i like :)</h3>')
                .start();                
            } 
          }
          />
        </h1>
      </div>
    </div>
  );
};

export default Home;
