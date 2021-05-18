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
            <br />

            <p>
              언제나 심플하고 효과적인 인터페이스와 깔끔한 디자인 구현을 목표로
              하는 Front-End 개발자입니다.{" "}
            </p>
            <p>
              개발자의 가치는 비즈니스 가치를 얼마나 잘 구현하는지에 따라 그
              가치가 빛나고, 개발자의 성장은 자신의 실력과 노력, 그리고 좋은
              동료들로 인해 더 성장할 수 있다고 믿습니다.{" "}
            </p>
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
