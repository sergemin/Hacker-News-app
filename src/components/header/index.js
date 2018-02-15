import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => (
    <header className="header">
        <div className="container">
          <h1 className="section-title">Hackernews App</h1>
          <nav className="header-nav">
            <ul className="header__menu header-menu">
              <li className="header-menu__item">
                <Link className='header-menu__link link-app' to='/'>Home page</Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
);

export default Header;
