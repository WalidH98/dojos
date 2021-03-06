import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { authAction } from "./store/actions/auth";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={()=> props.authAction({id: 1, username: 'toto', isConnected: true})}>click me</button>
    </div>
  );
}
const mapDispatchToProps = {
  authAction
}
const mapStateToprops = (state) =>({
  ...state
})
export default connect(mapStateToprops,mapDispatchToProps)(App);
