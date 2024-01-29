
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import bloodReducer from "./productReducer/Reducer"
import questionReducer from "./productReducer/Reducer"
import thunk from "redux-thunk";
const rootReducer = combineReducers({
   blood : bloodReducer,
   question : questionReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


