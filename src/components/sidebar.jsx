import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import _ from "lodash";
import { ROUTES } from "../router/routes.config";

const { Sider } = Layout;
const routes = _.clone(ROUTES);

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "/",
    };
  }

  toggle = () => {
    this.props.toggle();
  };

  handleClick = (e) => {
    this.setState({ activeKey: e.key });
    this.props.updateActive(e);
  };

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["Home"]}
          onClick={this.handleClick}
          selectedKeys={[this.state.activeKey]}
        >
          <div className="logo" />
          {routes.map((route) => (
            <Menu.Item key={route.key} icon ={route.icon}>
              <Link to={route.link}>                
                {route.text}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    );
  }
}
