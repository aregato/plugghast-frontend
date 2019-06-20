import React, { Component } from 'react';

import '../../css/courses.css';
import demo from '../../assets/test-images/demoPic.png';

class Courses extends Component {

  searchdropDown(){
      var element = document.getElementById("searchdropDown");
      element.classList.toggle("toggled");
  }
  searchdropDownBtn(){
      var element = document.getElementById("searchdropDown");
      element.classList.toggle("toggled");
  }

  render() {
    return(
      <div id="html">
        <div className="container">
          <h1>Mina kurser</h1>
          <hr />
          <form action="">
            <div className="search">
              <span className="fa fa-search"></span>
              <input onClick={this.searchdropDown} placeholder="Lägg till din kurs..." />
              <button  onClick={this.searchdropDownBtn} class="btn btn-default searchBtn">Sök</button>
              <div id="searchdropDown" className="dropdown-content">
                <div className="searchText" href="">
                  <img className="searchImage" src={demo}/> Samhällskunskap 2
                  <p>Gustav Eriksson</p>
                  <a className="btn btn-default">Lägg till</a>
                </div>
                <div className="searchText" href="">
                  <img className="searchImage" src={demo}/> Samhällskunskap 2
                  <p>Gustav Eriksson</p>
                  <a className="btn btn-default">Lägg till</a>
                </div>
                <div className="searchText" href="">
                  <img className="searchImage" src={demo}/> Samhällskunskap 2
                  <p>Gustav Eriksson</p>
                  <a className="btn btn-default">Lägg till</a>
                </div>
              </div>
            </div>
          </form>
          <br />
          <hr />
          <h4>Tillagda kurser</h4>
          <div className="row course">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="well">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5">
                    <img className="demoPic" src={demo} alt="DEMO"/>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7">
                    <h2>Samhällskunskap 2</h2>
                    <p>Gustav Eriksson</p>
                    <p>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star last"></span>
                      baserat på 5 röster
                    </p>
                    <hr />
                    <h4>Antal visningar: 2494</h4>
                    <h4>Antal följare: 359</h4>
                    <h4>Beräknad inkomst: 4789 kr</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="well">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5">
                    <img className="demoPic" src={demo} alt="DEMO"/>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7">
                    <h2>Samhällskunskap 2</h2>
                    <p>Gustav Eriksson</p>
                    <p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star last"></span>
                      baserat på 5 röster
                    </p>
                    <hr />
                    <h4>Antal visningar: 2494</h4>
                    <h4>Antal följare: 359</h4>
                    <h4>Beräknad inkomst: 4789 kr</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="well">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5">
                    <img className="demoPic" src={demo} alt="DEMO"/>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7">
                    <h2>Samhällskunskap 2</h2>
                    <p>Gustav Eriksson</p>
                    <p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star last"></span>
                      baserat på 5 röster
                    </p>
                    <hr />
                    <h4>Antal visningar: 2494</h4>
                    <h4>Antal följare: 359</h4>
                    <h4>Beräknad inkomst: 4789 kr</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="well">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5">
                    <img className="demoPic" src={demo} alt="DEMO"/>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7">
                    <h2>Samhällskunskap 2</h2>
                    <p>Gustav Eriksson</p>
                    <p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star last"></span>
                      baserat på 5 röster
                    </p>
                    <hr />
                    <h4>Antal visningar: 2494</h4>
                    <h4>Antal följare: 359</h4>
                    <h4>Beräknad inkomst: 4789 kr</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Courses;
