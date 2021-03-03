import React from "react";
import Burger from "../../components/Layout/Burger/Burger";
import Button from "../UI/Button/Button";
import "./CheckoutSummary.css";

export default function CheckoutSummary(props) {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it tastes well!</h1>
      <div style={{ margin: "auto", width: "100%", height: "300px" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked>
        Cancel
      </Button>
      <Button btnType="Success" clicked>
        Continue
      </Button>
    </div>
  );
}
