import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './components/styles/main.css';
import About from './components/About';
import Header from './components/Header';
import ShoppersForm from './components/ShoppersForm';
import ShoppersPage from './components/ShoppersPage';
import ShoppingListForm from './components/ShoppingListForm';
import ShoppingListPage from './components/ShoppingListPage';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Header />
        <Route path='/about' component={About} />
        <Route path='/shoppersform' component={ShoppersForm} />
        <Route path='/shopperspage' component={ShoppersPage} />
        <Route path='/shoppinglistform' component={ShoppingListForm} />
        <Route path='/shoppinglistpage' component={ShoppingListPage} />
        <Route path='/*' component={NotFound} />
      </Router>
    );
  }
}
export default App;
