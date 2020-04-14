import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Student from './student/Student';
import Lecturer from './lecturer/Lecturer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Switch>
    <Route path='/' exact={true} component={App} />
    <Route path='/student' component={Student} />
    <Route path='/lecturer' component={Lecturer} />
  </Switch>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
