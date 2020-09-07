import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './components/About';
import Header from './components/Header';
import App from './App';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={App} exact />
        <Route path='/about' component={About} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
