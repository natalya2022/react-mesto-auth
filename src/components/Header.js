import React from 'react';
import headerLogo from './../images/header-logo.svg';
import { useLocation, Link } from 'react-router-dom';

const Header = ({loggedIn, userEmail, onLogOut }) => {

   const location = useLocation();   

  return (
    <header className="header">
      <img src={headerLogo} alt="Логотип" className="header__logo" />
      {loggedIn ?
        <div className="header__navbar">
          <p className="header__email">{userEmail}</p>
          <button className="header__button" onClick={onLogOut} >Выйти</button>
        </div>  
        :        
        location.pathname === '/signup' ?
        // <span className="header__button">Войти</span>
        <Link to="/signin" className="header__link">Войти</Link>
        :
        //<span className="header__button">Регистрация</span>
        <Link to="/signup" className="header__link">Регистрация</Link>
      }         
    </header>
  );
};

export default Header;