import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../css/courses.css';
import demo from '../../assets/test-images/demoPic.png';

class Courses extends Component {
  render() {

    return(
      <div>

        <div className="container">
          <h1>Mina kurser</h1>
          <hr />
          <form action="">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Lägg till din kurs..." name="search"/>
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"> Sök</i></button>
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
