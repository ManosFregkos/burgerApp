import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import "./Toolbar.css";

export default function Toolbar(props) {
  return (
    <header className="Toolbar">
      <div>MENU</div>
      <div className="Logo">
        <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </header>
  );
}
