import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Components/NavBar/NavBar.js";
import NavBar from "./Components/NavBar/NavBar.js";
import About from "./Components/About/About.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Skills from "./Components/Skills/Skills.js";
import Contact from "./Components/Contact/Contact.js";
import Download from "./Components/Download/Download.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route path="/Portfolio" component={Portfolio}></Route>
          <Route path="/Skills" component={Skills}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/Download" component={Download}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
