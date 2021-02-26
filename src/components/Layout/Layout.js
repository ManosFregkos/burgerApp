import React, { Fragment } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import "./Layout.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Toolbar />
      <SideDrawer />
      <main className="content">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
