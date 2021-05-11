import React from "react";
import "./css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__row1">
          <span className="copyright">
            대한민국, 서울 <br />
            canleez123@gmail.com <br />
          </span>
        </div>
        <div className="footer__row2">
          <span>Copyright &copy; 2021</span>
          <a
            className="git__logo"
            href="https://github.com/ceylon85/web-portfolio"
          >
            <span>
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                className="git__logo"
              />
            </span>
          </a>
        </div>
        <div id="go-top" className="footer__top">
          <a className="footer__BacktoTop" title="Back to Top" href="#home">
            <FontAwesomeIcon
              icon={faAngleDoubleUp}
              color="#45A29E"
              size="lg"
              className="fupIcon--active"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
