import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { MdSpaceDashboard } from "react-icons/md";

import { Link } from "react-router-dom";
import Logo from "./Logo";

const { Sider } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider className="navbar" trigger={null} collapsible collapsed={collapsed}>
      <Logo />
      <Layout>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <MdSpaceDashboard />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <Link to="/covid-statistics">Statistics</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <Link to="/covid-history">History</Link>,
            },
          ]}
        />
      </Layout>
    </Sider>
  );
};

export default Navbar;
