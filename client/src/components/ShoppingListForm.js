import React, { Component } from 'react';
import axios from 'axios';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://deploying-with-heroku.herokuapp.com'
    : 'http://localhost:5000';

class ShoppingListForm extends Component {
  state = {
    shoppers: [],
    shoppinglists: [],
  };

  componentDidMount() {
    console.log('Component mounted');
    this.addShoppinglists();
    this.updateShoppinglists();
    this.deleteShoppinglists();
  }

  addShoppinglists(postObj) {
    axios
      .post(`http://localhost:5000/api/shoppinglist`, postObj)
      .then((response) => {
        console.log('This shoppinglist has been added', response);
      })
      .catch((err) => console.log(err));
  }

  updateShoppinglists(postObj) {
    axios
      .put(`http://localhost:5000/api/shoppinglist`, postObj)
      .then((response) => {
        console.log('This Shoppinglist has been updated', response);
      })
      .catch((err) => console.log(err));
  }

  deleteShoppinglists(postObj) {
    axios
      .delete(`http://localhost:5000/api/shoppinglist`, postObj)
      .then((response) => {
        console.log('This Shoppinglist has been deleted', response);
      })
      .catch((err) => console.log(err));
  }

  validateData(event) {
    console.log(event);
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const flyer_item = event.target.flyer_item.value;
    const shopper_id = event.target.shopper_id.value;

    return (
      !!description && !!price && !!quantity && !!flyer_item && !!shopper_id
    );
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const isDataValid = this.validateData(event);
    if (!isDataValid) {
      alert('Please Enter Required Data');
    } else {
      const description = event.target.description.value;
      const price = event.target.price.value;
      const quantity = event.target.quantity.value;
      const flyer_item = event.target.flyer_item.value;
      const shopper_id = event.target.shopper_id.value;

      this.addShoppinglists({
        description: description,
        price: price,
        quantity: quantity,
        flyer_item: flyer_item,
        shopper_id: shopper_id,
      });
      event.target.reset();
    }
  };

  render() {
    return (
      <>
        <div className='container'>
          <form id='ShoppinglistForm' onSubmit={this.handleFormSubmit}>
            <input
              className='Shoppinglist__input'
              type='text'
              name='description'
              placeholder='Input the Description'
            />
            <input
              className='Shopperinglist__input'
              type='number'
              name='price'
              placeholder='Input the Price'
            />
            <input
              className='Shopperinglist__input'
              type='integer'
              name='quantity'
              placeholder='Input the Quantity'
            />
            <input
              className='Shopperinglist__input'
              type='text'
              name='flyer_item'
              placeholder='Input if a flyer item'
            />
            <input
              className='Shopperinglist__input'
              type='integer'
              name='shopper_id'
              placeholder='Input if a flyer item'
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

export default ShoppingListForm;
