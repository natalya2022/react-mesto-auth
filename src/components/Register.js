import React from 'react';
import InputUserData from './InputUserData';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="regauto">
      <h2 className="regauto__title">Регистрация</h2>
      <form className="regauto__form" name="form-register">
        <InputUserData />
        <button className="regauto__button" type="submit">
          Зарегистрироваться
        </button>      
        <p className="regauto__text">Уже зарегистрированы?&nbsp;
          <Link to="/signin" className="regauto__link">Войти</Link>
        </p>
      </form>
    </div>
  )
}

export default Register;