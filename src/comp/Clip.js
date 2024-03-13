import React from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "r3dy";
import "./clip.css";

const handlefb = () => {
  window.open("https://www.facebook.com", "_blank");
};
const handlegh = () => {
  window.open("https://github.com/vivek-kanjariya", "_blank");
};
const handleins = () => {
  window.open("https://www.instagram.com/wayto.vivek/", "_blank");
};
const handlelin = () => {
  window.open("https://www.linkedin.com/in/vivek-kanjariya/", "_blank");
};

const Clip = () => {
  return (
    <div className="clip">
      <div className="hero">
        <strong className="so">Social-Links</strong>
        <div
          className="sec"
          onClick={() => {
            handlefb();
          }}
        >
          <i class="fa-brands fa-facebook"></i>
          <p>Facebook</p>
        </div>
        <div
          className="sec"
          onClick={() => {
            handlegh();
          }}
        >
          <i class="fa-brands fa-github"></i>
          <p>Git-Hub</p>
        </div>
        <div
          className="sec"
          onClick={() => {
            handleins();
          }}
        >
          <i class="fa-brands fa-instagram"></i>
          <p>Instagram</p>
        </div>
        <div
          className="sec"
          onClick={() => {
            handlelin();
          }}
        >
         <i class="fa-brands fa-linkedin"></i>
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default Clip;
