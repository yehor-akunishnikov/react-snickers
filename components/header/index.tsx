import React from 'react';

import { Icons } from '../../shared';

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
        <Icons.Cart />
        <span>10 000 грн.</span>
      </li>
      <li>
        <Icons.Heart />
      </li>
      <li>
        <Icons.User />
      </li>
    </ul>
  </header>
);
