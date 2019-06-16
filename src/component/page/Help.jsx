import React, { Component } from 'react';

import '../../css/help.css';
import demo from '../../assets/test-images/helpVid.png';

class Help extends Component {
  render() {
    return(
      <div>
        <div className="container">
          <h1>Hjälp</h1>
          <hr />
          <div>
            <h4>Videogenomgångar</h4>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-3">
                <img className="helpPic" src={demo} alt="DEMO"/>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                <img className="helpPic" src={demo} alt="DEMO"/>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                <img className="helpPic" src={demo} alt="DEMO"/>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                <img className="helpPic" src={demo} alt="DEMO"/>
              </div>
            </div>
          </div>
          <hr />
          <h4>Kontakta oss</h4>
          <div className="well">
            <form action="">
              <div className="input-group">
                <div className="flexContainer">
                  <input type="text" className="form-control left" placeholder="Namn*" name=""/>
                  <input type="text" className="form-control right" placeholder="E-postadress*" name=""/>
                </div>
                <textarea class="form-control area" rows="5" id="comment" placeholder="Meddelande*"></textarea>
              </div>
              <a className="btn btn-warning">Skicka in</a>
            </form>
            </div>

        </div>
      </div>
    )
  }
}

export default Help;
