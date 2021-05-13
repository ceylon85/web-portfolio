import React from "react";
import "./App.css";
import Home from "./Home";
import Intro from "./Intro";
import Skills from "./Skills";
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
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
