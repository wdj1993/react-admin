import React, { Component } from "react";
import iconlist from './iconlist';
import IconLabel from "./icon";

export default class Icons extends Component{
  
  render(){
    return (
      <div>
      {iconlist.map((item, index) => {
        return <div key={index}>
          <IconLabel icon={item.name} />
        </div>
      })
      }
      </div>
    )
  }
}