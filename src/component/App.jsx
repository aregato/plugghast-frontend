import React, {Component} from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
import { firebaseApp } from '../firebase';
//Pages
import Courses from './page/Courses';
import Upload from './page/Upload';
import Help from './page/Help';
import Userdeals from './page/Userdeals';
import News from './page/News';
import Offers from './page/Offers';
//CSS
import '../css/style.css';
import '../css/navigation.css';
//Nav logo
import logo from '../assets/logo/mindreLogo.png';
//Nav Icons
import courseIcon from '../assets/icons/minakurser.png';
import uploadIcon from '../assets/icons/laddaupp.png';
import helpIcon from '../assets/icons/help.png';
import userdealsIcon from '../assets/icons/userdeals.png';

import userdealsSvg from '../assets/icons/testAnvändaravtal.svg';

import offersIcon from '../assets/icons/offers.png'


class App extends Component {

  signOut(){
    firebaseApp.auth().signOut();
  }

  userDropdown (){
    console.log("Drop");
    var element = document.getElementById("user-dropdown");
    element.classList.toggle("toggled");
  }

  render() {
    return(
    <HashRouter>
      <div className="page">
        <nav>
          <div className="head">
            <img src={logo} alt="Logo" />
          </div>
            <div className="sidenav">
              <NavLink to="/courses"><img src={courseIcon} alt="icon" />Mina kurser</NavLink>
              <NavLink to="/upload"><img src={uploadIcon} alt="icon" />Ladda upp kurs</NavLink>
              <br/><br/>
              <NavLink to="/help"><img src={helpIcon}  alt="icon"/>Hjälp</NavLink>
              <NavLink to="/userdeals">
                <svg className="svg" viewBox="0, 0, 400,400">
                  <g id="svgg">
                    <path id="path0" d="M98.253 46.751 C 51.259 55.259,51.968 53.928,52.912 131.880 C 53.769 202.672,56.936 220.975,74.236 255.114 C 98.200 302.404,167.260 360.000,200.000 360.000 C 246.200 360.000,324.385 279.577,342.083 213.850 C 349.509 186.273,348.403 66.498,340.651 58.746 C 323.726 41.821,168.038 34.117,98.253 46.751 M288.889 132.459 C 288.889 140.489,187.297 244.444,179.449 244.444 C 173.453 244.444,124.444 194.074,124.444 187.911 C 124.444 174.744,136.022 178.537,156.052 198.267 L 177.920 219.806 225.601 172.125 C 271.546 126.180,288.889 115.310,288.889 132.459 " stroke="none" fill-rule="evenodd">
                    </path>
                  </g>
                </svg>
                Användaravtal
              </NavLink>

              <NavLink to="/offers">
              <svg className="svg" viewBox="0, 0, 400,400">
                <g id="svgg">
                  <path id="path0" d="M98.253 46.751 C 51.259 55.259,51.968 53.928,52.912 131.880 C 53.769 202.672,56.936 220.975,74.236 255.114 C 98.200 302.404,167.260 360.000,200.000 360.000 C 246.200 360.000,324.385 279.577,342.083 213.850 C 349.509 186.273,348.403 66.498,340.651 58.746 C 323.726 41.821,168.038 34.117,98.253 46.751 M288.889 132.459 C 288.889 140.489,187.297 244.444,179.449 244.444 C 173.453 244.444,124.444 194.074,124.444 187.911 C 124.444 174.744,136.022 178.537,156.052 198.267 L 177.920 219.806 225.601 172.125 C 271.546 126.180,288.889 115.310,288.889 132.459 " stroke="none" fill-rule="evenodd">
                  </path>
                </g>
              </svg>
              Erbjudanden</NavLink>
          </div>
        </nav>

          <div className="userMenu">
            <a onClick ={this.userDropdown} className="">Noah Björner  <span className="glyphicon glyphicon-chevron-down"></span></a>
            <div  id="user-dropdown" className="dropdown-cont ">
              <a className="">Profil</a>
              <a className="">Inställningar</a>
              <hr/>

              <a className="" onClick={() => this.signOut()}>Logga ut</a>
            </div>
          </div>

        <section className="content">
          <Route path="/courses" component={Courses}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/help" component={Help}/>
          <Route path="/userdeals" component={Userdeals}/>
          <Route path="/news" component={News}/>
          <Route path="/offers" component={Offers}/>

        </section>
        <div className="content">
          hejasdasdasd
        </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
