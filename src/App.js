import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router Class</h1>
        </header>
        <BrowserRouter>
          <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/contact" component={Contact}/>

          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
