import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './component/App';

import Courses from './component/page/Courses';
import Help from './component/page/Help';
import News from './component/page/News';
import Offers from './component/page/Offers';
import Upload from './component/page/Upload';
import Userdeals from './component/page/Userdeals';

ReactDOM.render(
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/courses" component={Courses} />
      <Route path="/help" component={Help} />
      <Route path="/news" component={News} />
      <Route path="/offers" component={Offers} />
      <Route path="/upload" component={Upload} />
      <Route path="/userdeals" component={Userdeals} />
    </Router>, document.getElementById('root')
)
