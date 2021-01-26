import React from 'react';
import './FoodAdder.css';

class FoodAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
      calories: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      food: '',
      calories: ''
    })

    this.props.handleSubmit(this.state.food, this.state.calories);
  }

  render() {
    // добавьте элементами обработчики handleSubmit и handleChange
    return (
      <form className="food-adder" onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="food" value={this.state.food} type="text" required placeholder="Добавьте продукты" />
        <input onChange={this.handleChange} name="calories" value={this.state.calories} type="number" required placeholder="Калории" />
        <button className="food-adder__submit"></button>
      </form>
    );
  }
}

export default FoodAdder;
