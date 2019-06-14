import React, {Component} from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";

import Courses from './page/Courses';
import Upload from './page/Upload';
import Help from './page/Help';
import Userdeals from './page/Userdeals';
import News from './page/News';
import Offers from './page/Offers';

import '../css/style.css';
import '../css/navigation.css';

import logo from '../images/orange-logo.png';

class App extends Component {


  render() {
    return(
    <HashRouter>
      <div className="page">
        <nav>
          <div className="head">
            <img src={logo} alt="Logo" />
          </div>
            <div className="sidenav">
              <NavLink to="/courses">Mina kurser</NavLink>
              <NavLink to="/upload">Ladda upp kurs</NavLink>
              <br/><br/>
              <NavLink to="/help">Hjälp</NavLink>
              <NavLink to="/userdeals">Användaravtal</NavLink>
              <NavLink to="/news">Nyheter</NavLink>
              <NavLink to="/offers">Erbjudanden</NavLink>
          </div>
        </nav>
        <section className="content">
          <Route path="/courses" component={Courses}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/help" component={Help}/>
          <Route path="/userdeals" component={Userdeals}/>
          <Route path="/news" component={News}/>
          <Route path="/offers" component={Offers}/>
        </section>
      </div>
      </HashRouter>
    )
  }
}

export default App;
