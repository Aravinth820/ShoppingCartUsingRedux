import items from "../items";

let Itemkeys = {};

for (let item of items) {
  Itemkeys[item.key] = 0;
}

const IncCounter = (state = Itemkeys, action) => {
  switch (action.type) {
    case "INCCOUNTERITEMS":
      return {
        ...state,
        [action.payLoad]: state[action.payLoad] + 1
      };
    case "DECCOUNTERITEMS":
      return {
        ...state,
        [action.payLoad]: state[action.payLoad] - 1
      };
    default:
      return state;
  }
};

export default IncCounter;
