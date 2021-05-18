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
                안녕하세요,<br />이승준입니다. 
                
              </TypeWriter>
            </h1>

            <TypeWriter typing={1.2}>
              <h4>
              도전해보지 않으면, <br/>어디까지 현실로 만들 수 있을지 알 수 없다고 생각합니다.<br/>
              <br/> 생활에 스며드는 서비스를 개발하는 개발자가 되겠습니다!
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
