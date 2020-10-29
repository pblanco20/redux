import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import pokesReducer from "./pokesDucsk";

const rootReducer = combineReducers({
  pokemones: pokesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generalStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(ApplyMiddleware(thunk))
  );
  return store;
}
