var fn = require('funclib');
export const selectFilteredTodos = (state) => {
    const todos = state.todos
    if (state.filter === 'all') {
      return todos
    }
  // return todos.filter(todos, todo => todo.state === state.filter);
    return fn.filter(todos, todo => todo.state === state.filter);
  }