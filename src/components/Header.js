import React from 'react';
import headerLogo from './../images/header-logo.svg';
import { useLocation, Link } from 'react-router-dom';

const Header = ({loggedIn}) => {

   const location = useLocation();
   console.log(location);

  return (
    <header className="header">
      <img src={headerLogo} alt="Логотип" className="header__logo" />
      {loggedIn ?
        <p className="header__navbar">
          <span className="header__email">email@mail.ru</span>
          <span className="header__button">Выйти</span>
        </p>  
        :        
        location.pathname === '/aa' ?
        // <span className="header__button">Войти</span>
        <Link to="/" className="header__link">Войти</Link>
        :
        //<span className="header__button">Регистрация</span>
        <Link to="/" className="header__link">Регистрация</Link>
      }         
    </header>
  );
};

export default Header;