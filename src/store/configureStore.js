import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import earningsReducer from "../reducers/earnings";
import authReducer from "../reducers/auth";

export default () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      earnings: earningsReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
