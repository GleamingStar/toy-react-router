import React, { useContext, useEffect, useState } from "react";

const { location, history } = window;

const HistoryContext = React.createContext();

export const Router = ({ children }) => {
  const [pathname, setPathname] = useState(location.pathname);
  useEffect(() => {
    const changePath = () => setPathname(location.pathname);
    window.addEventListener("popstate", changePath);
    return () => window.removeEventListener("popstate", changePath);
  }, []);

  return <HistoryContext.Provider value={{ pathname, setPathname }}>{children}</HistoryContext.Provider>;
};

export const Route = ({ children, path }) => {
  const { pathname } = useContext(HistoryContext);
  return pathname === path ? <>{children}</> : <></>;
};

export const Link = ({ children, to }) => {
  const { setPathname } = useContext(HistoryContext);
  const push = () => {
    history.pushState({}, "", to);
    setPathname(to);
  };
  return <div onClick={push}>{children}</div>;
};
