import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {logger } from 'redux-logger'
import { rootReducer } from './root-reducer'
// Every store requires reducer
// root-reducer


// runs before an action hits an reducer
const middleWares = []

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)