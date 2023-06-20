import React from 'react';
import InputUserData from './InputUserData';

const Login = (formValue, handleChange) => {
  return (
    <div className="regauto">
      <h2 className="regauto__title">Вход</h2>
      <form className="regauto__form" name="form-login">
      <InputUserData handleChange={handleChange} formValue={formValue} />
        <button className="regauto__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
