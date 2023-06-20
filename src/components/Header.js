import React from 'react';
import headerLogo from './../images/header-logo.svg';
import { useLocation, Link } from 'react-router-dom';

const Header = ({loggedIn}) => {

   const location = useLocation();
   //console.log(location);

  return (
    <header className="header">
      <img src={headerLogo} alt="Логотип" className="header__logo" />
      {loggedIn ?
        <div className="header__navbar">
          <p className="header__email">email@mail.ru</p>
          <p className="header__button">Выйти</p>
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