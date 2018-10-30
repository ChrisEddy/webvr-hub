import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/navbar";
import Home from "./components/home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

export default App;
