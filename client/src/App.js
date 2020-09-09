import React, { Component } from 'react';
import axios from 'axios';
import ShoppersList from './components/ShoppersList/ShoppersList';
import Shoppers from './components/ShoppersList/Shoppers';
import SignIn from './components/SignIn';
import { API_KEY } from './env/process.env';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://deploying-with-heroku.herokuapp.com'
    : 'http://localhost:5000';

class App extends Component {
  state = {
    shopper: [],
    shoppinglist: [],
    signed_in: false,
  };

  componentDidMount() {
    this.getShoppers();
    this.getShoppinglists();
  }

  getShoppers = () => {
    axios
      .get(`${API_URL}/api/shopper`)
      .then((response) => {
        console.log(response);
        this.setState({
          shopper: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  getShoppinglists = () => {
    axios
      .get(`${API_URL}/api/shoppinglist`)
      .then((response) => {
        console.log(response);
        this.setState({
          shoppinglist: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <ShoppersList shopper={this.state.shopper} />
        </div>
      </div>
    );
  }
}

export default App;
