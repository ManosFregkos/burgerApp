import React, { Fragment } from "react";
import Button from "../../../UI/Button/Button";

export default function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price : {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to CheckOut ?</p>
      <Button btnType="Danger" clicked={props.purchaceCancel}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaceContinue}>
        Continue
      </Button>
    </Fragment>
  );
}
