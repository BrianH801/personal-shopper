import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY } from './env/env_variables';

class App extends Component {
  state = {
    shoppingArr: [],
    activeNutritionalObj: {},
  };

  getNutritionalData() {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/?api_key=${API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.setState({
          shoppingArr: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getNutritionalData();
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='flex-columns'></div>
        </div>
      </div>
    );
  }
}

export default App;
