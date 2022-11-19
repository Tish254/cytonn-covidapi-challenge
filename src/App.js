import React from "react";
import {createBrowserRouter, RouterProvider, Outlet, Navigate} from "react-router-dom"
import  { Layout } from 'antd'

import Navbar from "./components/Navbar";
import { CovidHistory, CovidStatistics, Dashboard } from "./pages";
import "./App.css"

const { Header, Content } = Layout;

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Layout className="site-layout">
        <Header className="site-layout-background">
          Header goes here
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/covid-statistics",
        element: <CovidStatistics />
      },
      {
        path: "/covid-history",
        element: <CovidHistory />
      }
    ]
  }
])

const App = () => {

  return (
    <Layout className="container">
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
