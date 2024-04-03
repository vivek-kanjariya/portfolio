import "./comp/style.css";
import { Link, Route, Routes } from "react-router";
import Nav from "./comp/Nav";
import About from "./comp/About";
import Home from "./comp/Home";
import Form from "./comp/Form";
import Clip from "./comp/Clip";
import Project from "./comp/Project";
import "./comp/vid/Tanjiro.mp4";
import Notpage from './comp/Notpage'
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
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
      <Nav />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Clip" element={<Clip />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Project" element={<Project />} />
        <Route path="*" element={<Home />}  />
      </Routes>
    </div>
  );
}

export default App;
