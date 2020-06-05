import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Components/Details/Details.js";
import Main from "./Components/Main/Main.js";

function App() {
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
