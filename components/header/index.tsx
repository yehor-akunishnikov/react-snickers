import React from 'react';

import { Cart, Heart, User } from '../../icons';

import './style.scss';

export const Header = () => (
  <header className="d-flex align-center">
    <div className="d-flex align-center">
      <img
        className="mr-10"
        width={40}
        height={40}
        src="https://cdn.filestackcontent.com/Mly9tc8ISsaVwLMUq5AE"
        alt=""
      />
      <div>
        <h3 className="text-uppercase lh-1">React Snickers</h3>
        <p className="lh-1">Магазин найкращого взуття</p>
      </div>
    </div>
    <ul className="header-right d-flex img-va-b">
      <li>
        <Cart />
        <span>10 000 грн.</span>
      </li>
      <li>
        <Heart />
      </li>
      <li>
        <User />
      </li>
    </ul>
  </header>
);
