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
    </div>
  );
}

export default App;
