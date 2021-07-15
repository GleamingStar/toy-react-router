import React, { useContext, useEffect, useState } from "react";

const { location, history } = window;

const RouterContext = React.createContext();

export const Router = ({ children }) => {
  const [pathname, setPathname] = useState(location.pathname);
  useEffect(() => {
    const changePath = () => setPathname(location.pathname);
    window.addEventListener("popstate", changePath);
    return () => window.removeEventListener("popstate", changePath);
  }, []);

  return <RouterContext.Provider value={{ pathname, setPathname }}>{children}</RouterContext.Provider>;
};

const isRender = (currentPath, routePath, isExact) => {
  const path = routePath === "*" || routePath === undefined ? "" : routePath;
  return isExact ? currentPath === path : currentPath.includes(path);
};

export const Switch = ({ children }) => {
  const { pathname } = useContext(RouterContext);
  return <>{children.find(({ props }) => isRender(pathname, props.path, props.exact))}</>;
};

export const Route = ({ children, path, exact }) => {
  const { pathname } = useContext(RouterContext);
  return isRender(pathname, path, exact) ? <>{children}</> : <></>;
};

export const Link = ({ children, to }) => {
  const { setPathname } = useContext(RouterContext);
  const push = () => {
    history.pushState({}, "", to);
    setPathname(to);
  };
  return <div onClick={push}>{children}</div>;
};
