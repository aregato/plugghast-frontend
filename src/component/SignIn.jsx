import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

import '../css/sign.css';

class SignIn extends Component {


  render(){
    return(
      <div className="sign-in-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-0"></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="form well log-nav">
                  <div className="form-nav">
                    <h3 className="nav-reg"><Link to={'/signup'}>Registrera dig</Link></h3>
                    <h3 className="nav-log nav-active"><Link to={'/signin'}>Logga in</Link></h3>
                    <hr/>
                  </div>
                  <div className="log-inputs">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="E-postadress"
                  />
                  <br/>

                  <input
                    className="form-control"
                    type="text"
                    placeholder="Lösenord"
                  />
                  </div>
                  <a className="forget-psw">Glömt lösenord?</a>
                  <br/>
                  <div className="button-center">
                    <button
                      className="btn"
                      type="button"
                    >
                    Logga in
                    </button>
                  </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-0"></div>
          </div>
        </div>
      </div>
    )
  }

}

export default SignIn;
