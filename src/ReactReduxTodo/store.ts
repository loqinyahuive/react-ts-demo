import {createStore} from "redux"
import { todosReducer, filterReducer} from "./reducer"
import { combineReducers } from "redux"

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
})

const store = createStore(reducer)

store.subscribe(() => console.log('update component', store.getState()))

export default store