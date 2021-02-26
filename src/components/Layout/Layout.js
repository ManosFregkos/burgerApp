import React, { Fragment } from "react";
import "./Layout.css";

const Layout = (props) => {
  return (
    <Fragment>
      <div>Toolbar , SideDrawwer, Backdrop</div>
      <main className="content">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
