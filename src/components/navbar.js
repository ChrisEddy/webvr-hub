import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../css/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  componentDidMount(){

  }

  async helloWorld(){
    try{
      let data = JSON.stringify({message: 'hello my friends!'});
      let response = await fetch("/helloworld", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: data,
        mode: "no-cors"
      });
      if(response.ok){
        console.log(response)
      }
    }
    catch(e){
      console.log(e);
    }

  }


  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">WebVR Hub</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="">Home<span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="" >Forums</a>
              <a className="nav-item nav-link" href="">Reviews</a>
              <a className="nav-item nav-link" href="">Assets</a>
            </div>

            <div className='spacer'>
            </div>

            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button onClick={() => this.helloWorld()} type="button" className="btn btn-outline-info">Sign-In</button>
              <button type="button" className="btn btn-outline-primary">Sign-Up</button>

              <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Profile
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="#">Social</a>
                  <a className="dropdown-item" href="#">Apps</a>
                  <a className="dropdown-item" href="#">Account</a>
                </div>

              </div>
            </div>

          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
