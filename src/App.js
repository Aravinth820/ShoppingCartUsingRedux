import "./styles.css";

import { react, useState } from "react";
import Total from "./Total";
import { useSelector, useDispatch } from "react-redux";
import { DisplayPrice, DisplayProducts } from "./Reducer/AddCartAction";
export default function App() {
  const total = useSelector((state) => state.total);
  const addcart = useSelector((state) => state.addcart);
  const count = useSelector((state) => state.count);
  const display = useSelector((state) => state.display);
  const dispatch = useDispatch();

  return (
    <div>
      <header>
        <h1>My Shopping Cart </h1>
      </header>

      <div className="fullpage">
        <div className="page">
          <Total />
        </div>
      </div>
      <br />
      <br />
      <div>
        <footer>
          <div className="center">
            <button
              id="addproduct"
              onClick={() => {
                dispatch(DisplayPrice(total));
                dispatch(DisplayProducts(count));
              }}
            >
              addcart
            </button>
          </div>
          <p>
            Total Price:{addcart} <div className="divider">/</div>
            <span id="span">Total Products</span>
            {display}
          </p>
        </footer>
      </div>
    </div>
  );
}
