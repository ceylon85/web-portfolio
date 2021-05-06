import React from "react";
import "./css/Home.css";

import TypeWriter from "react-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Zoom, Roll } from "react-reveal";
import { Link } from "react-scroll";

function Home() {
  return (
    <header>
      <div id="home" className="homeSection">
        {/* <img src={process.env.PUBLIC_URL + '/images/Background.jpg'} alt="back"/> */}
        <div className="home__title">
          <Zoom>
            <h1>
              <TypeWriter typing={0.5}>
                hihiihi I`m SeungJun SeungJun
              </TypeWriter>
            </h1>

            <TypeWriter typing={1.2}>
              <h4>
                I am a self-taught, passionate web developer seeking for a
                change in my career to pursuit my passion: <br />
                {"< "}Coding{" />"}
              </h4>
            </TypeWriter>
          </Zoom>
        </div>
        <Roll>
          <div className="scroll__Icon__container">
            <Link
              to="introSection"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
            >
              <FontAwesomeIcon icon={faMouse} className="mouse__Icon" />
            </Link>
            <Link
              to="introSection"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
            >
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                className="downArrows__Icon"
              />
            </Link>
          </div>
        </Roll>
      </div>
    </header>
  );
}

export default Home;
