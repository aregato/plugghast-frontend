import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../css/upload.css';
import help from '../../assets/test-images/helpVid.png';

class Upload extends Component {
  render() {
    return(
      <div>
        <div className="container">

          <h1>Ladda upp kurs</h1>
          <hr />
          <h4>Kursinformation</h4>
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-9">
                <div className="well upload">
                  <form action="">
                    <div className="input-group">
                      <div className="flexContainer">
                        <input type="text" className="form-control left" placeholder="Kursnamn*" name=""/>
                        <input type="text" className="form-control right" placeholder="Ditt namn*" name=""/>
                      </div>
                      <textarea class="form-control area" rows="3" id="comment" placeholder="Sammanfattning av kurs*"></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <img src={help} alt="help" />
              </div>
            </div>
            <hr />
            <div>
              <h4>Lektion 1</h4>

              <div className="row">

                <div className="col-lg-10 col-md-10 col-sm-10">
                  <div className="well">
                      <form action="">
                        <div className="input-group">
                          <div className="flexContainer">
                            <input type="text" className="form-control left2" placeholder="Kursnamn*" name=""/>
                            <input type="text" className="form-control right2" placeholder="Ditt namn*" name=""/>
                          </div>
                          <textarea class="form-control lection" rows="3" id="" placeholder="Sammanfattning av lektion*"></textarea>
                        </div>
                      </form>
                      </div>

                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">

                  </div>
                </div>

              </div>


        </div>
      </div>
    )
  }
}

export default Upload;
