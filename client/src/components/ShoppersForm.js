import React, { Component } from 'react';
import axios from 'axios';
import lodash from 'lodash';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://deploying-with-heroku.herokuapp.com'
    : 'http://localhost:5000';

class ShoppersForm extends Component {
  state = {
    shoppers: [],
    shoppinglist: [],
    shoppinglistEdit: '',
    shopperToUpdate: '',
  };

  componentDidMount() {}

  addShopper(postObj) {
    axios
      .post(`http://localhost:5000/api/shopper`, postObj)
      .then((response) => {
        console.log('This went to the server', response);
      })
      .catch((err) => console.log(err));
  }

  updateShopper(id) {
    axios
      .post(`http://localhost:5000/api/shopper/${id}`, {})
      .then((response) => {
        console.log('This went to the server', response);
      })
      .catch((err) => console.log(err));
  }

  deleteShopper(id) {
    axios
      .delete(`http://localhost:5000/api/shopper${id}`, {})
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

    return !!name && !!address && !!phone && !!email;
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

      this.addShopper({
        name: name,
        address: address,
        phone: phone,
        email: email,
      });
      event.target.reset();
    }
  };

  render() {
    return (
      <>
        <div className='shoppers__container container'>
          <div className='shoppers__title'>
            <h2>Add Shopper</h2>
          </div>
          <form
            id='ShoppersForm'
            className='shoppers__form'
            onSubmit={this.handleFormSubmit}
          >
            <label className='shoppers__label'>
              Shopper Id:
              <input
                className='shoppers__input'
                type='text'
                name='id'
                placeholder='Shopper id'
              />
            </label>
            <label className='shoppers__label'>
              Name:
              <input
                className='shoppers__input'
                type='text'
                name='name'
                placeholder='Input Name'
              />
            </label>
            <label className='shoppers__label'>
              Address:
              <input
                className='shoppers__input'
                type='text'
                name='address'
                placeholder='Input Address'
              />
            </label>
            <label className='shoppers__label'>
              Phone:
              <input
                className='shoppers__input'
                type='text'
                name='phone'
                placeholder='Input Phone Number'
              />
            </label>
            <label className='shoppers__label'>
              Email:
              <input
                className='shoppers__input'
                type='text'
                name='email'
                placeholder='Input Email Address'
              />
            </label>
            <div className='shoppers__button-container'>
              <button type='submit'>Add</button>
              <button
                type='button'
                onClick={() => console.log('update shopper')}
              >
                Update
              </button>

              <button type='button' onClick={() => this.deleteShopper}>
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
