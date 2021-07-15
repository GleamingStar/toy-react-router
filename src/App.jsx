import React from "react";
import { Router, Route, Link, Switch } from "./Router";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Link to="/1">Mainpage</Link>
        </Route>
        <Route path="/1">
          <Link to="/2">page 1</Link>
        </Route>
        <Route path="/2">
          <Link to="/">page 2</Link>
        </Route>
        <Route> No Match </Route>
      </Switch>
    </Router>
  );
};

export default App;
