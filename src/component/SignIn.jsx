import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

import '../css/sign.css';

class SignIn extends Component {
    constructor(props){
     super(props);
     this.state = {
       email: '',
       password: '',
       error: {
         message: ''
       },
       appearHome: true,
     }
   }
   signIn(){
      //console.log('this.state', this.state);
      const { email, password } = this.state;
      firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
          console.log('error', error)
          this.setState({error})
        })
    }

  render(){
    return(
      <div className="body">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-1"></div>
          <div className="col-lg-3 col-md-6 col-sm-10">
            <div className="well sign">
                <div className="navigation-sign">
                  <Link className="sign-up" to={'/signup'}>Registrera dig</Link>
                  <Link className="sign-in dark" to={'/signin'}>Logga in</Link>
                  <br />
                  <br />
                </div>
                <div className="form-sign">
                <input
                  type="text"
                  placeholder="E-postadress"
                  onChange={event => this.setState({email: event.target.value})}
                />
                <br/>
                <input
                  type="password"
                  placeholder="Lösenord"
                  onChange={event => this.setState({password: event.target.value})}
                />
                </div>
                <Link className="forget-pws" to={'/forgotpsw'}>Glömt lösenord?</Link>
                <br/>
                <div className="button-sign">
                  <button
                    type="button"
                    onClick={() => this.signIn()}
                  >
                  Logga in
                  </button>
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-1"></div>
        </div>
      </div>
    )
  }

}

export default SignIn;
