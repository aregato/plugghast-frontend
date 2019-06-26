import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

import '../css/sign.css';

class SignOut extends Component {
  constructor(props){
    super(props);
    this.state  = {
      email: '',
      password:'',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    console.log('this.state', this.state)
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('Error', error);
        this.setState({error})
      })
  }

  render(){
    return(
      <div className="sign-in-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-0"></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="form well log-nav">
                  <div className="form-nav">
                    <h3 className="nav-reg nav-active"><Link to={'/signup'}>Registrera dig</Link></h3>
                    <h3 className="nav-log"><Link to={'/signin'}>Logga in</Link></h3>
                    <hr/>
                  </div>
                  <div className="log-inputs">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Namn"
                  />
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="E-postadress"
                    onChange={event => this.setState({email: event.target.value})}
                  />
                  <br/>

                  <input
                    className="form-control"
                    type="password"
                    placeholder="Lösenord"
                    onChange={event => this.setState({password: event.target.value})}
                  />
                  </div>
                  
                  <br/>
                  <div>{this.state.error.message}</div>
                  <div className="button-center">
                    <button
                      className="btn"
                      type="button"
                      onClick={() => this.signUp()}
                    >
                    Registrera dig
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

export default SignOut;
