import {createStore, combineReducers, applyMiddleware} from "redux"
import { todosReducer, filterReducer} from "./reducer"
import ReduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
})

// const store = createStore(reducer)
const store = createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)))

store.subscribe(() => console.log('update component', store.getState()))

export default store