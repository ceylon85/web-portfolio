import React from "react";
import "./css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div id="go-top"className="footer__top" >
          <a className="footer__BacktoTop" title="Back to Top" href="#home">
            <FontAwesomeIcon icon={faAngleDoubleUp} color="gray" size="lg" className="fupIcon--active" />
          </a>
        </div>
        <div className="footer__row1">
          <span className="copyright">
            대한민국, 서울 <br />
            canleez123@gmail.com <br />
          </span>
        </div>
        <div className="footer__row2">
          <span>Copyright &copy; 2021</span>
          <a href="https://github.com/ceylon85/react-amazon-clone">
            <img
              className="git__logo"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="git"
              title="클릭하시면 github로 이동합니다"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
