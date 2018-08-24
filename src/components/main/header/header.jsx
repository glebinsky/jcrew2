import React from 'react';
import { Link } from 'react-router-dom';
import Search from 'sub/search/search';
import SignIn from 'sub/sign-in/sign-in';
import Bag from 'sub/bag/bag';
import './header.css';

export default function Header(props) {
  return (
    <header>
      <div className="header-wrapper">
        <Search />
        <Link to="/" className="logo"><img src="/jcrew_logo.svg" alt="logo" /></Link>
        <div className="shop-links">
          <div className="stores">Stores</div>
          <SignIn />
          <Bag />
        </div>
      </div>
    </header>
  );
}
