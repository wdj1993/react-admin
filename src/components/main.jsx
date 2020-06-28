import React, { Component } from "react";
import { Layout } from "antd";
import Sidebar from "./sidebar";
import CollapseIcon from "./collapseIcon";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ROUTES } from "../router/routes.config";
import _ from "lodash";

const { Header, Content, Footer } = Layout;

const routes = _.clone(ROUTES);

export default class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      collapsed: false,
      current: "",
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  updateActive = (key) => {
    this.setState({ current: key });
  };

  render() {
    return (
      <Router>
        <Layout className="main">
          <Sidebar
            className="sideBar"
            collapsed={this.state.collapsed}
            updateActive={this.updateActive}
          />
          <Layout>
            <Header className="header">
              <CollapseIcon
                collapsed={this.state.collapsed}
                toggle={this.toggle}
              />
            </Header>
            <Content>
              {routes.map((route) => (
                <Route
                  exact
                  key={route.key}
                  path={route.link}
                  component={route.component}
                />
              ))}
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
