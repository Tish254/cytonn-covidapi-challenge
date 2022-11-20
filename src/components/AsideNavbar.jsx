import React from "react";
import { Layout, Menu } from "antd";
import { MdSpaceDashboard } from "react-icons/md";
import { TbHistory, TbFileReport } from "react-icons/tb";

import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const { Sider } = Layout;

const AsideNavbar = ({ toggleNav, onClick }) => {
  return (
    <Sider
      className={` ${
        toggleNav ? "navbar__mobile-toggled" : "navbar navbar__mobile-hide"
      }`}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Logo />
      <Layout>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[useLocation().pathname]}
          onSelect={() => (toggleNav ? onClick() : "")}
          items={[
            {
              key: "/dashboard",
              icon: <MdSpaceDashboard />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: "/covid-statistics",
              icon: <TbFileReport />,
              label: <Link to="/covid-statistics">Statistics</Link>,
            },
            {
              key: "/covid-history",
              icon: <TbHistory />,
              label: <Link to="/covid-history">History</Link>,
            },
          ]}
        />
      </Layout>
    </Sider>
  );
};

export default AsideNavbar;
