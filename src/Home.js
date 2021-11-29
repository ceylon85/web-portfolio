import React from "react";
import "./css/Home.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-scroll";

function Home() {
  return (
    <header>
      <div id="home" className="homeSection">
        {/* <img src={process.env.PUBLIC_URL + '/images/Background.jpg'} alt="back"/> */}
        <div className="home__title">
          <Zoom>
            <h1>
              <Typewriter options={{
                strings: ['안녕하세요, <br/> 이승준입니다'],
                autoStart: true,
                loop: true,
              }}>
              </Typewriter>
            </h1>
              <h4>
                도전해보지 않으면, <br />
                어디까지 현실로 만들 수 있을지 알 수 없다고 생각합니다.
                <br />
                더 나은 미래를 만들기 위해<br/>
                부족한 부분을 채우며 성장하는 개발자가 되겠습니다.
              </h4>
          </Zoom>
        </div>
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
      </div>
    </header>
  );
}

export default Home;
