import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";
import { TTodoAction } from "./actionCreators";
import produce from 'immer'
type THandler = (todoState: TTodoStore, action: TTodoAction) => TTodoStore;
type THandlerMapper = { [key: string]: THandler };
const initTodos: TTodo[] = [
  {
    id: "1",
    text: "抽烟",
    state: "done"
  },
  {
    id: "2",
    text: "喝酒",
    state: "todo"
  },
  {
    id: "3",
    text: "烫头",
    state: "todo"
  }
];
const initFilter: TFilter = "all";
const initState = {
  todos: initTodos,
  filter: initFilter
};
export const todosReducer = (todos: TTodo[] = initTodos, action: any) => {
  const handlerMapper = {
    [ADD_TODO]: (todos, action) => {
      return produce(todos, draftTodos => {
        draftTodos.push(action.payload)
      })
    },
    [REMOVE_TODO]: (todos, action) => {
      return todos.filter(todo => todo.id !== action.payload)
    },
    [TOGGLE_TODO]: (todos, action) => {
      return todos.map(todo =>
        todo.id === action.payload
          ? {...todo, state: todo.state === 'todo' ? 'done' : 'todo'}
          : todo
      )
    }
  }

  const handler = handlerMapper[action.type]

  return handler ? handler(todos, action) : todos
}

export const filterReducer = (filter: TFilter = initFilter, action: any) => {
  switch (action.type) {
    case "setFilter":
      return action.payload;
    case "reset":
      return initFilter;
    default:
      return filter;
  }
};
// const reducer = combineReducers({
//   todos: todosReducer,
//   filter: filterReducer
// })
// export default reducer;
