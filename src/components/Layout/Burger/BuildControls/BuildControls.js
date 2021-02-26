import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
export default function BuildControls(props) {
  return (
    <div className="BuildControls">
      <p>
        Current Price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          ingredientRemove={() => props.ingredientRemove(ctrl.type)}
          ingredientAdded={() => props.ingredientAdded(ctrl.type)}
          key={ctrl.label}
          label={ctrl.label}
          disabled={props.ingredients[ctrl.type] <= 0}
          //disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        onClick={props.ordered}
        disabled={!props.purchaseable}
        className="OrderButton"
      >
        ORDER NOW
      </button>
    </div>
  );
}
