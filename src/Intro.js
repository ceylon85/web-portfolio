import React from "react";
import "./css/Intro.css";
import { Zoom } from "react-awesome-reveal";
import ProfileImg from './images/myPhoto.png';

function Intro() {
  return (
    <div id="introSection" className="introSection">
      <div className="intro__container">
        <div className="intro__1">
          <Zoom>
            <h1>A little bit about myself</h1>
            <br />
            <p>
              {" "}
              Front-End 개발자는 사용자가 만족하고,<br/> 즐거워 할 수 있는 경험을
              만들어야 한다고 생각합니다.
            </p>
            <p>
              개발자의 성장은 자신의 실력과 노력,<br/> 그리고 좋은 동료들로 인해 더
              성장할 수 있다고 믿습니다.{" "}
            </p>
            <p>야구를 보는 것과 웹툰을 보는 것이 취미이고,<br/> 
            최근에는 파이널컷을 이용한 영상편집을 배우고 있습니다.</p>

          </Zoom>
        </div>
        <div className="intro__image">
          <Zoom>
            <img src={ProfileImg} alt="My Profile" />
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Intro;
