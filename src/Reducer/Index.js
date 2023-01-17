import AddCartReducer from "./AddCartReducer";
import DisplayReducer from "./DisplayReducer";
import ProductReducer from "./ProductReducer";
import TotalReducer from "./TotalReducer";
import CounterReducer from "./CounterReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  total: AddCartReducer,
  addcart: DisplayReducer,
  count: ProductReducer,
  display: TotalReducer,
  counter: CounterReducer
});

export default reducer;
