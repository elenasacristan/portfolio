import React from "react";
import ReactGA from "react-ga";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Components/Details/Details.js";
import Main from "./Components/Main/Main.js";

function initializeAnalytics() {
  ReactGA.initialize("UA-171425151-1", {gaOptions: {
    siteSpeedSampleRate: 100
  }});
  ReactGA.pageview('/')
}

function App() {
  initializeAnalytics();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:idProject" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
