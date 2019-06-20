import React, { Component } from 'react';

import offers from '../../assets/test-images/offers.png';
import '../../css/help.css';

class Offers extends Component {
  render() {
    return(
      <div>
        <div className="container">
          <h1>Erbjudanden</h1>
          <hr />
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="well offers">
            <img className="offersImg" src={offers}alt="offers" />
              <h4>Lorem ipsum dolor sit amet!</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <br />
              <h6>Din kampanjkod</h6>
              <p className="code">0iausqitNxb8VmGVFwH4PipHerp2</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Offers;
