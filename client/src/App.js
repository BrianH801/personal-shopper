import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ShoppersForm from './components/ShoppersForm';
import ShoppersPage from './components/ShoppersPage';
import ShoppingListForm from './components/ShoppingListForm';
import ShoppingListPage from './components/ShoppingListPage';
import NavBar from './components/NavBar';
import './components/styles/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='site-wrapper'>
          <NavBar />
          <div className='main-content'>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/shoppersform' component={ShoppersForm} />
            <Route path='/shopperspage' component={ShoppersPage} />
            <Route path='/shoppinglistform' component={ShoppingListForm} />
            <Route path='/shoppinglistpage' component={ShoppingListPage} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
