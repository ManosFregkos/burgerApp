import React from "react";
import Logopng from "../../assets/burger-logo.png";
import "./Logo.css";

export default function Logo(props) {
  return (
    <div className="Logo">
      <img src={Logopng} alt="photo-logo" style={{ height: props.height }} />
    </div>
  );
}
