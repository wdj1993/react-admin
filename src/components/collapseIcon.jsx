import React,{ Component } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

export default class CollapseIcon extends Component{
  toggle = () => {
    this.props.toggle();
  }
  render(){
    return(
      <div>
        {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.toggle,
        })}
      </div>
    )
  }
}