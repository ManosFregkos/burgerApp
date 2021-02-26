import React from "react";
import "./BuildControl.css";

export default function BuildControl(props) {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button
        disabled={props.disabled}
        onClick={props.ingredientRemove}
        className="Less"
      >
        Less
      </button>
      <button onClick={props.ingredientAdded} className="More">
        More
      </button>
    </div>
  );
}
