import React from "react";
import "../logo.svg";
// import '../comp/style.css'
import "../comp/about.css";
import js from "../comp/vid/th.jpg"
import Api from "../comp/vid/Api.jpg"
import Db from "../comp/vid/Db.jpg"
import Exp from "../comp/vid/Exp.jpg"
import Next from "../comp/vid/Next.jpg"
import Node from "../comp/vid/Node.jpg"
import re from "../comp/vid/React.jpg"

const About = () => {
  return (
    <div className="about">
      <div className="info">
        <div className="info-head">Learning Journey</div>
        <div className="info-p">
<strong>Hello,</strong>
<p  className="ps">here is my learning path which i have choosed for me as my listed and previously worked technology
  is listed below 
</p>
        </div>
      </div>

      <div className="tech">
        <div className="plate1">
          <div className="stack">
            <img
              src={js}
              alt=""
            />
            <div className="stack-info">
              <strong>HTML-CSS-JS</strong>
              <p className="p">
              Learned about basic core of websites websites and how it works and how to
              use it.
              </p>
            </div>
          </div>
        </div>
        <span></span>
        <div className="plate2">
          <div className="stack">
            <img
              src={re}
              alt=""
            />
            <div className="stack-info">
              <strong>React</strong>
              <p  className="p">
                About front-end javascript library for web development
              </p>
            </div>
          </div>
        </div>
        <span></span>
        <div className="plate3">
          <div className="stack">
            <img
              src={Node}
              alt=""
            />
            <div className="stack-info">
              <strong>Node.js</strong>
              <p  className="p">
                Learned about server side development with node js also covers the ecmascript-6
              </p>
            </div>
          </div>
        </div>
        <span></span>
        <div className="plate4">
          <div className="stack">
            <img
              src={Exp}
              alt=""
            />
            <div className="stack-info">
              <strong>Express-Hbs</strong>
              <p  className="p">
                by exppress learned Routing and dynamic routing in server and client side 
                with server side rendering by view engine as Hndle bars as well as Jsx formats
              </p>
            </div>
          </div>
        </div>
        <span></span>
        <div className="plate5">
          <div className="stack">
            <img
              src={Api}
              alt=""
            />
            <div className="stack-info">
              <strong>CRUD-Api</strong>
              <p  className="p">
                Learned Application programming interfaces
                and how to use them and fetch them in react components
              </p>
            </div>
          </div>
        </div>
        <span></span>
        <div className="plate6">
          <div className="stack">
            <img
              src={Db}
              alt=""
            />
            <div className="stack-info">
              <strong>DataBase</strong>
              <p  className="p">
                Learned about Mongo-db with Mongo client and server side authentification
                with Create Read Update and Delete querry with front-end library
              </p>
            </div>
          </div>
        </div>
        <span></span>
        <div className="plate6">
          <div className="stack">
            <img
              src={Next}
              alt=""
            />
            <div className="stack-info">
              <strong>Current-Learning</strong>
              <p  className="p">
                Learning about Next.js framework :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;