import React, { useContext, useEffect, useState } from "react";

const { location, history } = window;

const Context = React.createContext();

export const Router = ({ children }) => {
  const [pathname, setPathname] = useState(location.pathname);
  useEffect(() => {
    const changePath = () => setPathname(location.pathname);
    window.addEventListener("popstate", changePath);
    return () => window.removeEventListener("popstate", changePath);
  }, []);
  console.log(children)
  console.log(pathname)

  return <Context.Provider value={{ pathname, setPathname }}>{children}</Context.Provider>;
};

export const Route = ({ children, path }) => {
  const { pathname } = useContext(Context);
  return pathname === path ? <>{children}</> : <></>;
};

export const Link = ({ children, to }) => {
  const { setPathname } = useContext(Context);
  const push = () => {
    history.pushState({}, "", to);
    setPathname(to);
  };
  return <div onClick={push}>{children}</div>;
};
