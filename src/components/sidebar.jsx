import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link, withRouter  } from "react-router-dom";
import { ROUTES } from "../router/routes.config";
import _ from "lodash";

const { Sider } = Layout;
const routes = _.clone(ROUTES);

class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeKey: "/",
    };
  }

  toggle = () => {
    this.props.toggle();
  };

  handleClick = (e) => {
    this.setState({ activeKey: e.key });
    this.props.updateActive(e.key);
  };

  componentDidMount() {
    let pathname =  this.props.location.pathname;
    let index = _.findIndex(routes, route => route.link === pathname);
    if (index === -1) {
        index = 0;
    }
    this.setState({activeKey: routes[index]['key']});
    this.props.updateActive(routes[index]['key']);
  }

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          onClick={this.handleClick}
          selectedKeys={[this.state.activeKey]}
        >
          <div className="logo" />
          {routes.map((route) => (
            <Menu.Item key={route.key} icon={route.icon}>
              <Link to={route.link}>{route.text}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Sidebar);
