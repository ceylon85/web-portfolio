import React from "react";
import "./css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

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
              <img
                className="git__logoImg"
                src="https://www.flaticon.com/svg/vstatic/svg/733/733609.svg?token=exp=1620280695~hmac=a4e68120a5e79f9ab36aa332e1d2cea6"
                alt="git"
                title="클릭하시면 github로 이동합니다"
              />
            </span>
          </a>
        </div>
        <div id="go-top" className="footer__top">
          <a className="footer__BacktoTop" title="Back to Top" href="#home">
            <FontAwesomeIcon
              icon={faAngleDoubleUp}
              color="#104C91"
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
