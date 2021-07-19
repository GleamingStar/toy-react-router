# toy-react-router

#### Use routing by component in React SPA

### Install
```
$ npm i toy-react-router
or
$ yarn add toy-react-router
```

### Guide
- Demo
  - [Practice using toy-react-router in CodeSandbox](https://codesandbox.io/s/toy-react-router-playground-0b997)
- Quick Start
```js
import React from "react";
import { Router, Route, Link, Switch } from "toy-react-router";

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
        <Route> No Match </Route>
      </Switch>
    </Router>
  );
};

export default App;
```
![GIF 2021-07-19 오후 4-14-26](https://user-images.githubusercontent.com/70461368/126118333-ae2cb293-95d3-4704-b6d3-a284073d289b.gif)

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

### Misc
- This library get inspired by [react-router-dom](https://reactrouter.com/) and just clone it
- All components in thie library implemented by me, so many features acts be inferior to origin react-router, such as overlapping `<Route>` component
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
  - [X] convert Router.jsx to Router.tsx
  - [X] npm publish with TypeScript