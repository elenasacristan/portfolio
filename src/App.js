import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Components/Details/Details.js";
import Main from "./Components/Main/Main.js";


// import NavBar from "./Components/NavBar/NavBar.js";
// import About from "./Components/About/About.js";
// import Portfolio from "./Components/Portfolio/Portfolio.js";
// import Skills from "./Components/Skills/Skills.js";
// import Contact from "./Components/Contact/Contact.js";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/details" component={Details} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
      {/* <NavBar />
      <About id="about" />
      <div data-aos="fade-right">
        <Portfolio id="portfolio" />
      </div>
      <Skills id="skills" />
        <Contact id="contact" /> */}
    </div>
  );
}

export default App;
