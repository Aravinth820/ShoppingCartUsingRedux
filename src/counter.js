import { useState } from "react";
import {
  INCREMENT,
  DECREMENT,
  INCCOUNTPRODUCTS,
  DECCOUNTPRODUCTS,
  IncCounterItems,
  DecCounterItems
} from "../src/Reducer/AddCartAction";

import { useDispatch, useSelector } from "react-redux";

function counter(props) {
  const addcartCounter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(IncCounterItems(props.id));
    dispatch(INCCOUNTPRODUCTS());
    dispatch(INCREMENT(props.price));
  };
  const decrement = () => {
    if (addcartCounter[props.id] === 0) {
      return;
    }
    dispatch(DecCounterItems(props.id));
    dispatch(DECCOUNTPRODUCTS());
    dispatch(DECREMENT(props.price));
  };

  return (
    <div className="counter">
      <button id="plus" onClick={increment}>
        +
      </button>
      <span>{addcartCounter[props.id]}</span>
      <button id="minus" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default counter;
