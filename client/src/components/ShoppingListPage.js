import React, { Component } from 'react';
import axios from 'axios';
import ShoppingList from './ShoppingList/ShoppingList';
import { API_KEY } from '../env/process.env';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://deploying-with-heroku.herokuapp.com'
    : 'http://localhost:5000';

class ShoppingListPage extends Component {
  state = {
    shoppers: [],
    shoppinglists: [],
  };

  componentDidMount() {
    console.log('Component mounted');
    this.getShoppers();
    this.getShoppinglists();
  }

  getShoppers = () => {
    axios
      .get(`${API_URL}/api/shoppinglist`)
      .then((response) => {
        console.log(response);
        this.setState({
          shoppers: response.data,
        });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  };

  getShoppinglists = () => {
    axios
      .get(`${API_URL}/api/shoppinglist`)
      .then((response) => {
        console.log(response);
        this.setState({
          shoppinglists: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <ShoppingList shoppinglists={this.state.shoppinglists} />
        </div>
      </div>
    );
  }
}

export default ShoppingListPage;
