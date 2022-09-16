import { Layout, Menu } from "antd";
import './index.css'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import React, { useState } from "react";

const { Sider } = Layout;

const menuList = [
  {
    key: "/home",
    icon: <UserOutlined />,
    label: "Home",
  },
  {
    key: "/user-manage",
    icon: <VideoCameraOutlined />,
    label: "User Management",
    children: [{ label: "User List", key: "/user-manage/list" }],
  },
  {
    key: "/right-manage",
    icon: <UploadOutlined />,
    label: "Right Management",
    children: [
      { label: "Role List", key: "/right-manage/role/list" },
      { label: "Right List", key: "/right-manage/right/list" },
    ],
  },
];

export default function SideMenu() {
const changePage = (item, key) => {
  console.log(item)
}
  return (
    <Sider trigger={null} collapsible>
      <div className="logo">Global News</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuList}
        onClick={changePage}
      >
        {/* {renderMenu(menuList)} */}
      </Menu>
    </Sider>
  );
}
