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

export const Route = ({ children, path, exact }) => {
  const { pathname } = useContext(HistoryContext);
  const isRender = exact ? pathname === path : pathname.includes(path === "*" ? "" : path);
  return isRender ? <>{children}</> : <></>;
};

export const Link = ({ children, to }) => {
  const { setPathname } = useContext(HistoryContext);
  const push = () => {
    history.pushState({}, "", to);
    setPathname(to);
  };
  return <div onClick={push}>{children}</div>;
};
