import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Layout } from "antd";

import { CovidHistory, CovidStatistics, Dashboard } from "./pages";
import "./App.css";
import { TopNav, AsideNavbar } from "./components";

const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1024) {
      setToggleNav(false);
    }
  }, [screenSize]);

  const openNav = () => {
    setToggleNav((prev) => !prev);
  };
  return (
    <>
      <AsideNavbar toggleNav={toggleNav} onClick={openNav} />
      <Layout className="site-layout">
        <Header className="app__header">
          <TopNav toggleNavOnClick={openNav} />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer
          theme="dark"
          style={{
            textAlign: "center",
          }}
        >
          Covid-19 Tracker ©2022 Created by Oscar Tiego
        </Footer>
      </Layout>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/covid-statistics",
        element: <CovidStatistics />,
      },
      {
        path: "/covid-history",
        element: (
          <div className="section">
            <CovidHistory />
          </div>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <Layout className="container">
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
