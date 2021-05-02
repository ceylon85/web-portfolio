import React from 'react'
import TypeWriter from "react-typewriter";

function Header() {
  return (
    <div id="home">
      <h1 className="banner__title">
          <TypeWriter typing={0.5}>
            hihiihi
          </TypeWriter>
        </h1>
        <div id="go-about">
          <a className="smoothscroll" title="Go to About" href="#about">a
            <i className="icon-up-down"></i>
          </a>
        </div>
    </div>
  )
}

export default Header
