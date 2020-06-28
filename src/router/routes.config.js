import React from 'react';
import Home from "../views/home";
import About from "../views/about";
import { HomeOutlined, PieChartOutlined, } from "@ant-design/icons";

const ROUTES = [
  {
    key: '/',
    link: '/',
    icon: <HomeOutlined />,
    text: '首页',
    component: Home
  }, {
    key: 'About',
    link: '/about',
    icon: <PieChartOutlined />,
    text: '组件',
    component: About
  }
];

export { ROUTES };