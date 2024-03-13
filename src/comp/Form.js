import React from "react";
import AnimatedCursor from "react-animated-cursor";
import "./form.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; 
// import tsparticles from "tsparticles";


function Form() {
  return (
    <div className="main-form">

      <AnimatedCursor
        innerSize={10}
        outerSize={60}
        color="255,255,255"
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

      <div className="form">
        <h3 className="head">Submit your Details</h3>
        <form action="#">
          <input type="text" name="name" placeholder="name"/>
          <input type="email" name="e-mail"placeholder="E-mail" />
          <textarea name="txt" id="" cols="30" rows="10" placeholder="Describe"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
