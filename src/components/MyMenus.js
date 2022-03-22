import { Menu } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class MyMenus extends Component {
  render() {
    return (
      <div className="wy-menus">
        <Menu theme="dark" defaultSelectedKeys={["products"]}>
          <Menu.Item key="products">
            <Link to="/products">商品列表</Link>
          </Menu.Item>
          <Menu.Item key="users">
            <Link to="/users">用户列表</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MyMenus;
