import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";

export default function SideDrawer(props) {
  return (
    <div className="SideDrawer">
      <div className="Logo">
        <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </div>
  );
}
