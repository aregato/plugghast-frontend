import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

import '../css/sign.css';

class ForgotPsw extends Component {


  render(){
    return(
      <div className="body">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-1"></div>
          <div className="col-lg-3 col-md-6 col-sm-10">
            <div className="well sign">
                <div className="navigation-sign">
                  <br />
                  <br />
                </div>
                <div className="form-sign">
                <br/>
                </div>
                <br/>
                <div className="button-sign">
                  <Link
                    className="btn"
                    to={'/signin'}
                  >
                  Tillbaka
                  </Link>
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-1"></div>
        </div>
      </div>
    )
  }

}

export default ForgotPsw;
