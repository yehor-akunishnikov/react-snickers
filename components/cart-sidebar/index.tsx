import React from 'react';

import { CartProductCard } from '../cart-product-card';

import './style.scss';

export const CartSidebar = () => {
  return (
    <div className="overlay">
      <div className="drawler">
        <h2>Корзина</h2>
        <div className="cart-content">
          <div className="products-list">
            <CartProductCard />
          </div>
          <div>
            <div className="total"></div>
            <div className="puschase-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
