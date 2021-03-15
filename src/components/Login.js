import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as auth from '../auth.js';
import './styles/Login.css';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    // здесь нужно будет добавить логин
    if (!this.state.username || !this.state.password){
      return;
    }
    auth.authorize(this.state.username, this.state.password)
    .then((data) => {
      // нужно проверить, есть ли у данных jwt
      // потом сбросить стейт, затем в колбэке установить
      // стейт loggedIn родительского App как true,
      // затем перенаправить его в /diary
      if (data.jwt) {
        this.setState({
          username: '',
          password: ''
        }), () => {
          this.props.handleLogin();
          this.props.history.push('/diary');
        }
      }
    })
    .catch(err => console.log(err));
  }
  render(){
    return(
      <div className="login">
        <p className="login__welcome">
          Добро пожаловать!
        </p>
        <form onSubmit={this.handleSubmit} className="login__form">
          <label htmlFor="username">
            Логин:
          </label>
          <input required id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          <label htmlFor="password">
            Пароль:
          </label>
          <input required id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <div className="login__button-container">
            <button type="submit" className="login__link">Войти</button>
          </div>
        </form>

        <div className="login__signup">
          <p>Ещё не зарегистрированы?</p>
          <Link to="/register" className="signup__link">Зарегистрироваться</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
