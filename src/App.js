import React from "react";
import "./App.css";
import Home from "./Home";
import Intro from "./Intro";
import Skill from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Project from "./Project";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Intro />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
