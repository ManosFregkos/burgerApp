import React from "react";
import NavigationItem from "./NavItem/NavItem";
import "./NavItems.css";

export default function NavItems(props) {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
}
