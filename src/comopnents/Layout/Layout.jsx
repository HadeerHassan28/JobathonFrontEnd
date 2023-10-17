import React from "react";
import styles from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
