import React,{useEffect, useState} from 'react'
import './css/Navigation.css'
import {Link} from 'react-scroll';

function Navigation() {
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY < 200 || window.scrollY >600) {
          setShow(false);
        } else {
          setShow(true);
        }
      };
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
      }, []);

    return (
        <nav className={`navbar ${show && "nav__show"}`}>
            <div className="navbar__container" id="nav">
                <div className="navbar__nav" >
                    <Link
                        to="homeSection"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}>
                        Intro
                    </Link>
                </div>
                <div className="navbar__nav">
                    <Link
                        className="navbar__Skills"
                        activeClass="active"
                        to="skillSection"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}>
                        My skills
                    </Link>
                    <Link
                        className="navbar__Project"
                        activeClass="active"
                        to="projectSection"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}>
                        My Project
                    </Link>
                    <div className="navbar__ContactBtn">
                        <Link
                            activeClass={null}
                            to="contactSection"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={800}>
                            Let's talk!
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navigation
