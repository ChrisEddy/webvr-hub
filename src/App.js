import React, { Component } from 'react';
import './css/App.css';
import Home from "./components/home";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Forums from "./components/forums";
import Reviews from "./components/reviews";
import Assets from "./components/assets";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeShown: true,
      forumsShown: false,
      reviewsShown: false,
      assetsShown: false
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
      <div className="App">
        <Router>
          <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">WebVR Hub</a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
              </button>

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/home">Home</Link>
                  <Link className="nav-item nav-link" to="/forums">Forums</Link>
                  <Link className="nav-item nav-link" to="/reviews">Reviews</Link>
                  <Link className="nav-item nav-link" to="/assets">Assets</Link>
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
                      <a className="dropdown-item" href="/">Social</a>
                      <a className="dropdown-item" href="/">Apps</a>
                      <a className="dropdown-item" href="/">Account</a>
                    </div>

                  </div>
                </div>

              </div>
            </nav>


            <Route path="//" component={Home} />
            <Route path="/home/" component={Home} />
            <Route path="/forums/" component={Forums} />
            <Route path="/reviews/" component={Reviews} />
            <Route path="/assets/" component={Assets} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
