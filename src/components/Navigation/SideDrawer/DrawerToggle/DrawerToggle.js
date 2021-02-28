import React from "react";
import classes from "./DrawerToggle.css";

export default function DrawerToggle(props) {
  return (
    <div onClick={props.clicked}>
      <div className={classes.DrawerToggle}></div>
      <div className={classes.DrawerToggle}></div>
      <div className={classes.DrawerToggle}></div>
    </div>
  );
}
