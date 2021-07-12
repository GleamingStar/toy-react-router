import React from "react";
import { Router, Route, Link } from "./Router";

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Link to="/1">메인페이지</Link>
      </Route>
      <Route path="/1">
        <Link to="/2">페이지 1</Link>
      </Route>
      <Route path="/2">
        <Link to="/">페이지 2</Link>
      </Route>
    </Router>
  );
};

export default App;
