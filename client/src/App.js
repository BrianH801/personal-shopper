import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import ShoppersPage from './components/ShoppersPage';
import ShoppingListItems from './components/ShoppingList/ShoppingListItems';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
export const API_URL = 'http://localhost/5000';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <NavBar />
        <switch>
          <Route path='/' component={ShoppersPage} exact />
          <Route path='/shopper/:id' component={ShoppingListItems} exact />
          <Route path='/about' component={About} />
          <Route path='/*' component={NotFound} />
        </switch>
      </Router>
    );
  }
}
export default App;
