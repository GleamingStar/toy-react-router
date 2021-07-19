# toy-react-router

#### react-router-dom-clone library for practice npm publish

### Guide
- Quick Start
```js
import React from "react";
import { Router, Route, Link, Switch } from "toy-react-router";

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
```
![GIF 2021-07-12 오후 2-24-18](https://user-images.githubusercontent.com/70461368/125235162-fa212e00-e31c-11eb-80f7-48778b1b3fe8.gif)
- Component
  - Router : The common low-level interface for all router components.
  - Route : Render when its path matches the current URL.
    - path: string 
    - exact: boolean
      - When true, will only match if the path matches the `location.pathname` exactly.
  - Switch : Renders the first child `<Route>` that matches the location.
  - Link : Acts similar to `<a>` tag without refresh.
    - to: string
  - Redirect : Rendering a <Redirect> will navigate to a new location.
    - to: string

### To be updated
- Component
  - [X] Switch
  - [X] Redirect
- feature
  - [X] exact path in Route
  - [X] path="*" in Route
- Hook
  - [ ] useParams
  - [ ] useHistory
- Guide
  - [X] add how to use components
  - [ ] add some GIF of each component demo
- Apply TypeScript
  - [ ] convert Router.jsx to Router.tsx
  - [ ] npm publish with TypeScript