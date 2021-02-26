import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";

export default function Burger(props) {
  //mas dinei enan Array me ta key-values onomata apo to object,
  // ingredients [salad,meat,cheese,bacon]
  let tranfromedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (tranfromedIngredients.length === 0) {
    tranfromedIngredients = <p>Please Start Adding Ingredients</p>;
  }
  console.log(tranfromedIngredients);
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {tranfromedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}
