import React from "react";
import AnimatedCursor from "react-animated-cursor";
import "./form.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; 
// import tsparticles from "tsparticles";
// import '../comp/style.css'

const Project = () => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


  return (
    <div className="project">
            <AnimatedCursor
        innerSize={15}
        outerSize={50}
        color="120,81,169"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={4}
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

<h1>Project lorem30</h1>

<Particles id="tsparticles"  style={{
  zIndex:"1010",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0"
            }}  particlesInit={particlesInit}  loaded={particlesLoaded} options={{
    background: {
      color: {
          value: "#000000",
      },
  },
  fpsLimit: 100,
  interactivity: {
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          onHover: {
              enable: true,
              mode: "repulse",
          },
          resize: true,
      },
      modes: {
          push: {
              quantity: 4,
          },
          repulse: {
              distance: 200,
              duration: 0.4,
          },
      },
  },
  particles: {
      color: {
          value: "#000000",
      },
      links: {
          color: "#000000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
      },
      move: {
          direction: "none",
          enable: true,
          outModes: {
              default: "bounce",
          },
          random: true,
          speed: 6,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 800,
          },
          value: 80,
      },
      opacity: {
          value: 1,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 5 },
      },
  },
  detectRetina: true,

  }} />
  <strong>hellllllo hfhfuwhofi</strong>
    </div>
  );
};

export default Project;
