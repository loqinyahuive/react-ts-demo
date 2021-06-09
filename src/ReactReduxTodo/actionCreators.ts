import {ADD_TODO} from './actionTypes'
export const addTodo = () => ({
    type: ADD_TODO,
    payload: {
          id: new Date().toISOString(),
          text: '测试测试',
          state: 'todo'
        }
      })