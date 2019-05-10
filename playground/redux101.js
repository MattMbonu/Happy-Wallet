import { createStore } from "redux";

const incrementCount = ({ incrementBY = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBY
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count = 10 } = {}) => ({ type: "SET", count });
const resetCount = () => ({ type: "RESET" });

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBY
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);
store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch({
//   type: "INCREMENT",
//   incrementBY: 5
// });

store.dispatch(incrementCount({ incrementBY: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 3 }));
store.dispatch(decrementCount());
store.dispatch(incrementCount({ incrementBY: 40 }));
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(resetCount());
store.dispatch(decrementCount());

store.dispatch(setCount({ count: 25 }));
