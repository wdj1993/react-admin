import React, { Component } from "react";
import { Layout } from "antd";
import Sidebar from "./sidebar";
import CollapseIcon from "./collapseIcon";
const { Header, Content, Footer } = Layout;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }
  toggle = () => {
    this.setState({
      collapsed : !this.state.collapsed
    })
  }

  render() {
    return (
      <Layout className="main">
        <Sidebar className="sideBar" collapsed={this.state.collapsed}/>
        <Layout>
          <Header className="header">
            <CollapseIcon  collapsed={this.state.collapsed} toggle={this.toggle} />
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
