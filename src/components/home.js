import gunters from "../gunters.PNG";
import painter from "../painter.PNG";
import solar from "../solar.PNG";
import blast from "../ablast.PNG";

import React, { Component } from 'react';

import '../css/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iframeURL: ''
    };

  }

  componentDidMount(){
    document.getElementById('library').hidden = false;
    document.getElementById('Iframe').hidden = true;
  }


  enterApp(url){
    this.setState({ iframeURL: url });
    document.getElementById('library').hidden = true;
    document.getElementById('Iframe').hidden = false;
  }


  render() {
    return (
      <div className="Home">

        <iframe id="Iframe" width="100%" height="100%" allowFullScreen="yes"
                scrolling="no" title='Apps'
                src={this.state.iframeURL}/>

        <div className='row'>

          <div className='col-3'>
            <img src="https://backgroundcheckall.com/wp-content/uploads/2017/12/svg-background-images-2.jpg" className="img-fluid" alt="Randompic"/>
            <h3 className='pl-2 pt-2' style={{"color": "white"}}>Categories</h3>
            <nav className="nav flex-column pl-1" style={{"color": "white"}}>
              <a className="nav-link" href='/'>First Person Shooter</a>
              <a className="nav-link" href='/'>Adventure</a>
              <a className="nav-link" href='/'>Educational</a>
              <a className="nav-link" href='/'>Strategy</a>
            </nav>
          </div>

          <div className='col-6'>
            <div className='row'>
              <div className='col-12'>
                <div id='library'>
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                      <li data-target="#carouselExampleIndicators" data-slide-to="3"/>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={gunters}
                             alt="First slide"/>
                        <div className="carousel-caption d-none d-md-block">
                          <button type="button" className="btn btn-warning mb-3"
                                  onClick={() => this.enterApp('https://supermedium.com/gunters-of-oasis-deploy/')}>
                            Enter App</button>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={painter}
                             alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                          <button type="button" className="btn btn-warning mb-3"
                                  onClick={() => this.enterApp('https://aframe.io/a-painter/?url=https://ucarecdn.com/962b242b-87a9-422c-b730-febdc470f203/')}>
                            Enter App</button>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={solar}
                             alt="Third slide"/>
                        <div className="carousel-caption d-none d-md-block">
                          <button type="button" className="btn btn-warning mb-3"
                                  onClick={() => this.enterApp('https://chriseddy.github.io/threejs-webvr-solarsystem/')}>
                            Enter App</button>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={blast}
                             alt="Fourth slide"/>
                        <div className="carousel-caption d-none d-md-block">
                          <button type="button" className="btn btn-warning mb-3"
                                  onClick={() => this.enterApp('https://aframe.io/a-blast/')}>
                            Enter App</button>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"/>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"/>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-4'>
                <img src="https://i.ytimg.com/vi/aiU22lKiZbA/maxresdefault.jpg" className="mx-auto d-block" alt="app"
                     width={100 + '%'} height={100 + '%'}/>
              </div>

              <div className='col-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSTbqJPj4Zll29R8_35XiWxGA-FIN_gyYxWBD3qC8K4Gxtn9zBg"
                     className="mx-auto d-block" alt="app" width={100 + '%'} height={100 + '%'}/>
              </div>

              <div className='col-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgN6pY-b8RqbXeGhmZY8Hsdrco_ggedEoHhlTr0tUTcHRCoX5pxw"
                     className="mx-auto d-block" alt="app" width={100 + '%'} height={100 + '%'}/>
              </div>

            </div>

          </div>

          <div className='col-3'>

          </div>


        </div>

      </div>
    );
  }
}

export default Home;
