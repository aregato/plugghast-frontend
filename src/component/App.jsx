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
              <NavLink to="/courses">
              <svg className="svg" id="svg" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M66.667 53.333 L 66.667 66.667 200.000 66.667 L 333.333 66.667 333.333 53.333 L 333.333 40.000 200.000 40.000 L 66.667 40.000 66.667 53.333 M53.333 106.667 L 53.333 120.000 200.000 120.000 L 346.667 120.000 346.667 106.667 L 346.667 93.333 200.000 93.333 L 53.333 93.333 53.333 106.667 M45.333 152.000 C 37.778 159.556,37.778 347.111,45.333 354.667 C 52.972 362.305,347.028 362.305,354.667 354.667 C 362.222 347.111,362.222 159.556,354.667 152.000 C 347.028 144.362,52.972 144.362,45.333 152.000 " stroke="none" fill="#000000" fill-rule="evenodd"></path></g></svg>
                Mina kurser
              </NavLink>
              <NavLink to="/upload">
              <svg className="svg" id="svg" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M57.951 46.459 C 50.805 55.069,51.309 305.539,58.490 314.191 C 62.035 318.463,79.635 320.000,124.989 320.000 L 186.667 320.000 186.667 353.333 L 186.667 386.667 200.000 386.667 C 214.648 386.667,214.319 387.624,213.377 347.778 L 212.721 320.000 274.360 320.000 C 316.376 320.000,337.698 318.302,341.333 314.667 C 348.949 307.051,348.949 52.949,341.333 45.333 C 332.743 36.743,65.132 37.806,57.951 46.459 M234.325 138.760 C 261.917 166.107,269.446 182.222,254.632 182.222 C 250.457 182.222,239.457 174.816,230.187 165.765 L 213.333 149.307 213.333 234.654 L 213.333 320.000 200.000 320.000 L 186.667 320.000 186.667 234.654 L 186.667 149.307 169.813 165.765 C 151.852 183.303,137.778 187.169,137.778 174.564 C 137.778 165.128,190.536 111.111,199.752 111.111 C 203.424 111.111,218.981 123.553,234.325 138.760 " stroke="none" fill="#000000" fill-rule="evenodd"></path></g></svg>
                Ladda upp kurs
              </NavLink>
              <br/><br/>
              <NavLink to="/help">
                <svg className="svg" id="svg" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M143.564 36.012 C 76.645 61.739,52.061 108.215,54.127 205.095 L 55.556 272.106 69.414 283.831 C 77.037 290.279,86.454 301.795,90.341 309.422 C 117.200 362.119,197.153 389.568,251.674 364.810 C 283.179 350.503,279.997 346.667,236.625 346.667 C 169.075 346.667,130.191 326.323,111.607 281.259 C 108.364 273.396,101.811 265.725,97.045 264.212 C 81.083 259.146,74.027 226.667,88.889 226.667 C 95.478 226.667,97.778 223.704,97.778 215.214 C 97.778 194.806,118.542 179.657,158.059 171.237 C 217.747 158.518,234.813 151.541,253.302 132.299 L 270.524 114.376 279.800 129.410 C 293.112 150.985,301.263 183.174,304.712 227.778 C 306.544 251.482,309.643 266.667,312.647 266.667 C 315.358 266.667,312.142 272.100,305.501 278.741 C 290.008 294.235,234.639 299.857,225.164 286.899 C 216.976 275.702,177.742 278.887,173.286 291.111 C 164.023 316.519,172.115 320.000,240.443 320.000 C 313.951 320.000,326.129 315.466,342.291 282.079 C 347.565 271.185,353.707 261.142,355.940 259.762 C 362.877 255.475,360.763 210.611,353.333 204.444 C 348.610 200.524,346.667 190.150,346.667 168.855 C 346.667 112.734,314.201 53.333,283.528 53.333 C 277.297 53.333,269.455 50.024,266.100 45.978 C 248.837 25.163,185.239 19.990,143.564 36.012 " stroke="none" fill="#000000" fill-rule="evenodd"></path></g></svg>
                Hjälp
              </NavLink>
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
                <svg id="svg" className="svg" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M143.759 38.059 C 136.742 45.076,133.333 53.636,133.333 64.242 L 133.333 80.000 92.000 80.000 C 43.800 80.000,40.000 82.338,40.000 112.000 L 40.000 133.333 200.000 133.333 L 360.000 133.333 360.000 112.000 C 360.000 82.338,356.200 80.000,308.000 80.000 L 266.667 80.000 266.667 64.242 C 266.667 27.848,173.762 8.056,143.759 38.059 M184.551 67.002 C 188.253 78.666,185.332 81.586,173.668 77.884 C 161.737 74.097,161.222 57.778,173.034 57.778 C 177.824 57.778,182.918 61.858,184.551 67.002 M235.556 66.367 C 235.556 71.157,231.476 76.252,226.332 77.884 C 214.668 81.586,211.747 78.666,215.449 67.002 C 219.236 55.070,235.556 54.555,235.556 66.367 M53.333 254.667 C 53.333 369.459,46.867 360.000,125.333 360.000 L 186.667 360.000 186.667 260.000 L 186.667 160.000 120.000 160.000 L 53.333 160.000 53.333 254.667 M213.333 260.000 L 213.333 360.000 274.667 360.000 C 353.133 360.000,346.667 369.459,346.667 254.667 L 346.667 160.000 280.000 160.000 L 213.333 160.000 213.333 260.000 " stroke="none" fill="#000000" fill-rule="evenodd"></path></g></svg>
                Erbjudanden
              </NavLink>
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
