import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  return (
    <div>
      <Header />
      <div id="home" style={{marginBottom:"150px"}}><Home /></div>
      <div id="about" style={{marginBottom:"150px"}}><About /></div>
      <div id="technologies" style={{marginBottom:"150px"}}><Technologies /></div>
      <div id="projects" style={{marginBottom:"200px"}}><Projects /></div>
      <div id="contact" style={{marginBottom:"200px"}}><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
