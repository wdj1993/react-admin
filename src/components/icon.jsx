import React, { Component } from "react";
import {FastBackwardOutlined} from "@ant-design/icons";

export default class IconLabel extends Component{
  render(){
    return (
      <div>
        <h3>{this.props.icon}</h3>
        <FastBackwardOutlined />
      </div>
    )
  }
}