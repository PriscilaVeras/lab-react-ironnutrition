import { React, Component } from 'react';

import 'bulma/css/bulma.css';
import './style.css';
import foodList from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';

class App extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
    foodList: [...foodList],
  };

  render() {
    return (
      <div>
        <AddFood />
        {this.state.foodList.map((food) => {
          return (
            <FoodBox
              name={food.name}
              calories={food.calories}
              image={food.image}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
