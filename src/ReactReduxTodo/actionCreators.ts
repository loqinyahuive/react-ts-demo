import { ADD_TODO, SET_TODOS } from "./actionTypes";
import {Dispatch} from "redux"
export type TAddTodoAction = {
  type: ADD_TODO;
  payload: {
    id: 99;
    text: "测试测试";
    state: "todo";
  };
};

export type TSetTodosAction = {
  type: SET_TODOS;
  payload: TTodo[];
};

export type TTodoAction = TSetTodosAction | TAddTodoAction;

export const addTodo = {
  type: ADD_TODO,
  payload: {
    id: 99,
    text: "测试测试",
    state: "todo"
  }
}