import React, { Component } from 'react';
import axios from 'axios';
import ShoppersList from './ShoppersList/ShoppersList';
import { API_KEY } from '../env/process.env';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://deploying-with-heroku.herokuapp.com'
    : 'http://localhost:5000';

class ShoppersForm extends Component {
  state = {
    shoppers: [],
    shoppinglist: [],
    signed_in: false,
  };

  componentDidMount() {
    console.log('Component mounted');
    this.addShopper();
    this.addShopper();
    this.updateShopper();
    this.deleteShopper();
  }

  addShopper(postObj) {
    axios
      .post(`http://localhost:5000/api/shopper`, postObj)
      .then((response) => {
        console.log('This went to the server', response);
      })
      .catch((err) => console.log(err));
  }

  updateShopper(postObj) {
    axios
      .put(`http://localhost:5000/api/shopper`, postObj)
      .then((response) => {
        console.log('This Shopper inf has been updated', response);
      })
      .catch((err) => console.log(err));
  }

  deleteShopper(postObj) {
    axios
      .delete(`http://localhost:5000/api/shopper`, postObj)
      .then((response) => {
        console.log('This Shopper has been deleted', response);
      })
      .catch((err) => console.log(err));
  }

  validateData(event) {
    console.log(event);
    const name = event.target.name.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const credit_card = event.target.credit_card.value;
    const expiry_date = event.target.expiry_date.value;

    return (
      !!name &&
      !!address &&
      !!phone &&
      !!email &&
      !!credit_card &&
      !!expiry_date
    );
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const isDataValid = this.validateData(event);
    if (!isDataValid) {
      alert('Please Enter Required Data');
    } else {
      const name = event.target.name.value;
      const address = event.target.address.value;
      const phone = event.target.phone.value;
      const email = event.target.email.value;
      const credit_card = event.target.credit_card.value;
      const expiry_date = event.target.expiry_date.value;

      this.addShopper({
        name: name,
        address: address,
        phone: phone,
        email: email,
        credit_card: credit_card,
        expiry_date: expiry_date,
      });
      event.target.reset();
    }
  };
  render() {
    return (
      <>
        <div className='container'>
          <form id='ShoppersForm' onSubmit={this.handleFormSubmit}>
            <input
              className='Shoppers__input'
              type='text'
              name='name'
              placeholder='Input Name'
            />
            <input
              className='Shoppers__input'
              type='text'
              name='address'
              placeholder='Input Address'
            />
            <input
              className='Shoppers__input'
              type='text'
              name='phone'
              placeholder='Input Phone Number'
            />
            <input
              className='Shoppers__input'
              type='text'
              name='email'
              placeholder='Input Email Address'
            />
            <input
              className='Shoppers__input'
              type='text'
              name='credit_card'
              placeholder='Input Credit Card Information'
            />
            <input
              className='Shoppers__input'
              type='text'
              name='expiry_date'
              placeholder='Input Expiry Date'
            />
            <div className='upload__button-container'>
              <button type='submit'>Add</button>
              <button
                type='button'
                onClick={() => console.log('update shopper')}
              >
                Update
              </button>
              <button
                type='button'
                onClick={() => console.log('delete shopper')}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default ShoppersForm;
