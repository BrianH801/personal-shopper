import React, { Component } from 'react';
import axios from 'axios';
import ShoppersList from './ShoppersList/ShoppersList';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://deploying-with-heroku.herokuapp.com'
    : 'http://localhost:5000';

class ShoppersPage extends Component {
  state = {
    shoppers: [],
    shoppinglist: [],
    signed_in: false,
  };

  componentDidMount() {
    console.log('Component mounted');
    this.getShoppers();
    this.getShoppinglists();
  }

  getShoppers = () => {
    axios
      .get(`${API_URL}/api/shopper`)
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
          shoppinglist: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div>
          <ShoppersList shoppers={this.state.shoppers} />
        </div>
      </>
    );
  }
}

export default ShoppersPage;
