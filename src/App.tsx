// import React from 'react';
// import logo from './logo.svg';
import './App.less';
import  MyFirstGrid from './components/react-grid-layout-test'
import AntdDemo from './components/AntdDemo'
import  TestReux from './ReactReduxTodo/index'
const { React } = require('react');

function App() {
  console.log(AntdDemo)
  return (
    <div className="App">
      <TestReux/>
      {/* <MyFirstGrid ></MyFirstGrid>
      <AntdDemo></AntdDemo> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
