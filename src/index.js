import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';

import { logUser } from './actions';
import reducer from './reducers'; 

//pages
import App from './component/App';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Courses from './component/page/Courses';
import Help from './component/page/Help';
import News from './component/page/News';
import Offers from './component/page/Offers';
import Upload from './component/page/Upload';
import Userdeals from './component/page/Userdeals';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Inloggad');
    console.log(user);
    const { email } = user;
    store.dispatch(logUser());
    browserHistory.push('/app');
  }else{
    console.log('Ingen inloggad');

    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
    <Provider store={store}>
      <Router path="/" history={browserHistory}>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/app" component={App} />
        <Route path="/courses" component={Courses} />
        <Route path="/help" component={Help} />
        <Route path="/news" component={News} />
        <Route path="/offers" component={Offers} />
        <Route path="/upload" component={Upload} />
        <Route path="/userdeals" component={Userdeals} />
      </Router>
    </Provider>, document.getElementById('root')
)
