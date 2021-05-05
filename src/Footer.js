import React from "react";
import "./css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div id="go-top" className="footer__top">
          <a className="footer__BacktoTop" title="Back to Top" href="#home">
            <FontAwesomeIcon
              icon={faAngleDoubleUp}
              color="gray"
              size="lg"
              className="fupIcon--active"
            />
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
          <a
            className="git__logo"
            href="https://github.com/ceylon85/web-portfolio"
          >
            <span>
              <img
                className="git__logoImg"
                src="https://www.flaticon.com/svg/vstatic/svg/889/889111.svg?token=exp=1620023235~hmac=4a5d8df4a66da9a10036ae4805ecb9bd"
                alt="git"
                title="클릭하시면 github로 이동합니다"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
