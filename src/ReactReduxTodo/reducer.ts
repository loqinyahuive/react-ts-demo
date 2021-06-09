import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './actionTypes'
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
  switch (action.type) {
    case ADD_TODO:
      const newTodos1 = [...todos, action.payload];
      return newTodos1;
    case REMOVE_TODO:
      // const newTodos = state.todos.filter(todo => todo.id !== action.payload)

      return {
        ...todos,
        todos: todos.filter((todo) => todo.id !== action.payload)
      };
    case TOGGLE_TODO:
      const newTodos = todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, state: todo.state === "todo" ? "done" : "todo" }
          : todo
      );

      return { ...todos, todos: newTodos };
    default:
      return todos;
  }
};

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
