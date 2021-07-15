import React from "react";
import { Router, Route, Link, Switch, Redirect } from "./Router";

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
        <Route path="/5">
          <Redirect to="/" />
        </Route>
        <Route> No Match </Route>
      </Switch>
    </Router>
  );
};

export default App;
