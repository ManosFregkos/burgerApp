import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import "./Toolbar.css";

export default function Toolbar(props) {
  return (
    <header className="Toolbar">
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className="Logo">
        <Logo />
      </div>
      <nav className="DesktopOnly">
        <NavItems />
      </nav>
    </header>
  );
}
