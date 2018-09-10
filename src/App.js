import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route , Switch , Link} from 'react-router-dom';
import Home from "./components/Home";
import One from "./components/One";
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
        <div>
          <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/one" component={One}/>
            <ul>
            <li><Link to="/One">One</Link></li>
            </ul>
          </Switch>
        </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
