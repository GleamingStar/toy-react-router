import React from "react";
import { Router, Route, Link } from "./Router";

const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Link to="/1">Mainpage</Link>
      </Route>
      <Route path="/1">
        <Link to="/2">page 1</Link>
      </Route>
      <Route path="/2">
        <Link to="/">page 2</Link>
      </Route>
    </Router>
  );
};

export default App;
