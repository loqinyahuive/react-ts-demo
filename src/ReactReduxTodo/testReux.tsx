import store from "./store";
const { React } = require("react");
const { List, Button } = require("antd");

const state = store.getState();
function Test() {
    console.log(state);
    const add = () => {
        const newTodo: TTodo = {
            id: '99',
            text: '吃好吃的',
            state: 'todo',
          }
        store.dispatch({type: 'addTodo', payload: newTodo})
    }
  return (
    <div>
      <Button type="primary" size="small" onClick={() => add()}>增加</Button>
      <List
        itemLayout="horizontal"
        dataSource={state.todos}
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
