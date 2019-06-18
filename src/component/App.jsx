import React, {Component} from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
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
import uploadIcon from '../assets/icons/upload.png';
import helpIcon from '../assets/icons/help.png';
import userdealsIcon from '../assets/icons/userdeals.png';
import newsIcon from '../assets/icons/offers.png';
import offersIcon from '../assets/icons/offers.png'


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
              <NavLink to="/courses"><img src={courseIcon} />Mina kurser</NavLink>
              <NavLink to="/upload"><img src={uploadIcon} />Ladda upp kurs</NavLink>
              <br/><br/>
              <NavLink to="/help"><img src={helpIcon} />Hjälp</NavLink>
              <NavLink to="/userdeals"><img src={userdealsIcon} />Användaravtal</NavLink>

              <NavLink to="/offers"><img src={offersIcon} />Erbjudanden</NavLink>
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
