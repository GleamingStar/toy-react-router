import React from "react";
import { Router, Route, Link, Switch, Redirect } from "../src/Router";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          This is MainPage
          <Link to="/1">to page 1</Link>
        </Route>
        <Route path="/1">
          This is Page 1
          <Link to="/2">to page 2</Link>
        </Route>
        <Route path="/2">
          This is Page 2
          <Link to="/">to mainpage</Link>
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
