import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Menu } from 'antd';
import './styles.scss';

const Header = () => (
    <header className="header">
        <div className="container">
          <Row>
            <Col xs={6}>
              <h1 className="section-title">Hackernews App</h1>
            </Col>
            <Col xs={18}>
              <nav className="header-nav">
                <Menu mode="horizontal" className='header-menu'>
                  <Menu.Item className='header-menu__item'>
                    <Link className='header-menu__link link-app' to='/'>Home page</Link>
                  </Menu.Item>
                </Menu>
              </nav>
            </Col>
          </Row>
        </div>
    </header>
);

export default Header;
