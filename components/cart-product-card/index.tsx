import React from 'react';

import { RemoveProductBtn } from '../buttons/remove-product-btn';

import './style.scss';

export const CartProductCard = () => {
  return (
    <div className="cart-product-card">
      <img
        className="card-img"
        src="https://cdn.filestackcontent.com/2eEyNdM0T8OhJo0zuuHb"
        alt=""
      />
      <div className="card-body">
        <p className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</p>
        <span className="lh-1 card-price">6 000 грн.</span>
      </div>
      <RemoveProductBtn />
    </div>
  );
};
