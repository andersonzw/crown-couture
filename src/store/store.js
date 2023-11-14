import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";
// Every store requires reducer
// root-reducer

// creating our own logger function
const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState', store.getState());

  next(action)
  console.log('next state', store.getState());
};

// runs before an action hits an reducer
const middleWares = [loggerMiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
