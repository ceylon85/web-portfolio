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
              Argentina as an Account Delivery Executive, and coding on my spare
              time!
            </p>
            <p>
              I've been doing web development as a hobby for the past few years,
              but I now want to make a career out of it to continue learning and
              growing.
            </p>
            <p>
              I am a well-organized person, a problem solver, a fast-learner and
              a teamworker with high attention to detail.
            </p>
            <p>I love golf and soccer. I don't like chocolate.</p>
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
