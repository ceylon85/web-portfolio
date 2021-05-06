import React from "react";
import "./css/Intro.css";
import { Zoom } from "react-reveal";
// import ProfileImg from './images/background';

function Intro() {
  return (
    <div id="introSection" className="introSection">
      <div className="intro__container">
        <div className="intro__1">
          <Zoom>
            <h1>A little bit about myself</h1>
            <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit.  
            </p>
            <p>
            Corrupti odit expedita, aliquid voluptatibus quos cupiditate,
            </p>
            <p>
            necessitatibus obcaecati sequi minus tempora, iure impedit placeat dolore nihil dignissimos cumque veniam quod sed.
            </p>
            <p>I love baseball and soccer. I don't like lazy.</p>
          </Zoom>
        </div>
        <div className="intro__image">
          <Zoom>
          <img src="" alt="My Profile" />

            {/* <img src={ProfileImg} alt="My Profile" /> */}
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Intro;
