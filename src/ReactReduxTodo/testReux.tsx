import store from "./store";
import {useDispatch, useSelector} from "react-redux"
import {ADD_TODO} from './actionTypes'
const { React } = require("react");
const { List, Button } = require("antd");
var fn = require('funclib');

// const state = store.getState();
function Test() {
  const dispatch = useDispatch()
  // 写法一
  // const todos = useSelector<TStore, TTodo[]>(state => {
  //   const todos = state.todos
  //   if (state.filter === 'all') {
  //     return todos
  //   }
  //   return fn.filter(todos, todo => todo.state === state.filter);
  // })
  // 写法二
  const selectFilteredTodos = (state) => {
      const todos = state.todos
      if (state.filter === 'all') {
        return todos
      }
    // return todos.filter(todos, todo => todo.state === state.filter);
      return fn.filter(todos, todo => todo.state === state.filter);
    }
  const todos = useSelector<TStore, TTodo[]>(selectFilteredTodos)
    // console.log(state);
    const add = () => {
        const newTodo: TTodo = {
            id: '99',
            text: '吃好吃的',
            state: 'todo',
          }
          dispatch({type: ADD_TODO, payload: newTodo})
    }
  return (
    <div>
      <Button type="primary" size="small" onClick={() => add()}>增加</Button>
      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              //   avatar={
              //     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              //   }
              title={<a href="https://ant.design">{item.text}</a>}
              description=""
            />
          </List.Item>
        )}
      />
    </div>
  );
}
export default Test;
