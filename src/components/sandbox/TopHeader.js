import React, { useState } from "react";

import { Layout, Dropdown, Menu, Avatar } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: 'Super Admin',
        },
        {
          key: '2',
          label: 'Log out',
        }
      ]}
    />
  );
  return (
    <Header className="site-layout-background" style={{ padding: "0 16px" }}>
      {collapsed ? (
        <MenuUnfoldOutlined onClick={changeCollapsed} />
      ) : (
        <MenuFoldOutlined onClick={changeCollapsed} />
      )}

      <div style={{ float: "right" }}>
        <span>Welcome</span>
        <Dropdown overlay={menu}>
          <Avatar size="small" icon={<UserOutlined />}></Avatar>
        </Dropdown>
      </div>
    </Header>
  );
}
