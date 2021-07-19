import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

const { location, history } = window;

interface IRouter {
  pathname: string;
  setPathname: Dispatch<SetStateAction<string>>;
}

const RouterContext = React.createContext({} as IRouter);

export const Router = ({ children }: { children: ReactNode }) => {
  const [pathname, setPathname] = useState(location.pathname);
  useEffect(() => {
    const changePath = () => setPathname(location.pathname);
    window.addEventListener("popstate", changePath);
    return () => window.removeEventListener("popstate", changePath);
  }, []);

  return <RouterContext.Provider value={{ pathname, setPathname }}>{children}</RouterContext.Provider>;
};

const isRender = (currentPath: string, routePath: string | undefined, isExact: boolean | undefined) => {
  const path = routePath === "*" || routePath === undefined ? "" : routePath;
  return isExact ? currentPath === path : currentPath.includes(path);
};

export const Switch = ({ children }: { children: ReactNode }) => {
  const { pathname } = useContext(RouterContext);
  console.log(children);
  return <>{(children as Array<ReactNode>)?.find(({ props }: any) => isRender(pathname, props.path, props.exact))}</>;
};

interface IRoute {
  children: ReactNode;
  path?: string;
  exact?: boolean;
}

export const Route = ({ children, path, exact }: IRoute) => {
  const { pathname } = useContext(RouterContext);
  return isRender(pathname, path, exact) ? <>{children}</> : <></>;
};

export const Link = ({ children, to }: { children: ReactNode; to: string }) => {
  const { setPathname } = useContext(RouterContext);
  const push = () => {
    history.pushState({}, "", to);
    setPathname(to);
  };
  return <div onClick={push}>{children}</div>;
};

export const Redirect = ({ to }: { to: string }) => {
  const { setPathname } = useContext(RouterContext);
  useEffect(() => {
    history.pushState({}, "", to);
    setPathname(to);
  }, []);
  return <></>;
};
