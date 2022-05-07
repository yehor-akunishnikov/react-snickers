import React from 'react';

import { CartProductCard } from '../cart-product-card';
import { PurchaseBtn } from '../buttons/purchase-btn';

import './style.scss';

export const CartSidebar = () => {
  return (
    <div className="overlay">
      <div className="drawler">
        <h2 className="cart-title">Корзина</h2>
        <div className="cart-content">
          <div className="products-list">
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
          </div>
          <div>
            <div className="total">
              <div className="d-flex justify-between mb-15">
                <span>Всього:</span>
                <span>21 000грн.</span>
              </div>
              <div className="d-flex justify-between mb-15">
                <span>Знижка:</span>
                <span>200грн.</span>
              </div>
            </div>
            <PurchaseBtn />
          </div>
        </div>
      </div>
    </div>
  );
};
