import { useState } from "react";
import {
  INCREMENT,
  DECREMENT,
  INCCOUNTPRODUCTS,
  DECCOUNTPRODUCTS
} from "../src/Reducer/AddCartAction";
import { useDispatch } from "react-redux";

function counter(props) {
  const [count, setCounter] = useState(0);

  const dispatch = useDispatch();

  const increment = () => {
    setCounter(
      count + 1,
      dispatch(INCCOUNTPRODUCTS()) /*props.setCount(props.count + 1)*/
    );
    dispatch(INCREMENT(props.price));
    //props.setTotal(props.total + props.price);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCounter(
      count - 1,
      dispatch(DECCOUNTPRODUCTS()) /*props.setCount(props.count - 1)*/
    );
    dispatch(DECREMENT(props.price));
    //props.setTotal(props.total - props.price);
  };

  const clearAll = () => {
    let clear = count * props.price;
    props.setTotal(props.total - clear);
    props.setCount(props.count - count);
  };

  return (
    <div className="counter">
      <button id="plus" onClick={increment}>
        +
      </button>
      <span>{count}</span>
      <button id="minus" onClick={decrement}>
        -
      </button>

      {/* <button onClick={cart}>Add to Cart </button>
      <h1>{addcart}</h1> */}
    </div>
  );
}

export default counter;
