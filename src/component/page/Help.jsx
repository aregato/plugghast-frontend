import React, { Component } from 'react';

import '../../css/help.css';
import demo from '../../assets/test-images/helpVid.png';

class Help extends Component {
  render() {
    return(
      <div>
        <div className="container">
          <h1>Hjälp</h1>
          <br />
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
              <div className="input-group contact">
                <textarea className="form-control area-contact" rows="5" id="comment" placeholder="Meddelande*"></textarea>
              </div>
              <a className="btn btn-default sendIn">Skicka in</a>
            </form>
            </div>

        </div>
      </div>
    )
  }
}

export default Help;
