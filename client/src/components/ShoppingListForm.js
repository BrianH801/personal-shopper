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
        <div className='shoppinglist__container container'>
          <div className='shoppinglist__title'>
            <h2>Edit Shoppinglist</h2>
          </div>
          <form
            id='ShoppinglistForm'
            className='shoppinglist__form'
            onSubmit={this.handleFormSubmit}
          >
            <label className='shoppers__label'>
              Description:
              <input
                className='shoppinglist__input'
                type='text'
                name='description'
                placeholder='Input s Description'
              />
            </label>
            <label className='shoppers__label'>
              Price:
              <input
                className='shoppinglist__input'
                type='number'
                name='price'
                placeholder='Input a Price'
              />
            </label>
            <label className='shoppers__label'>
              Quantity:
              <input
                className='shoppinglist__input'
                type='integer'
                name='quantity'
                placeholder='Input a Quantity'
              />
            </label>
            <label className='shoppers__label'>
              Flyer Item:
              <input
                className='shoppinglist__input'
                type='text'
                name='flyer_item'
                placeholder='Input a flyer item'
              />
            </label>
            <label className='shoppers__label'>
              Shopper Id:
              <input
                className='shoppinglist__input'
                type='integer'
                name='shopper_id'
                placeholder='Input shopper_id'
              />
            </label>
            <div className='shoppinglist__button-container'>
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
