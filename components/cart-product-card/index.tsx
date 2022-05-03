import React from 'react';

import './style.scss';

export const CartProductCard = () => {
  return (
    <div className="cart-product-card">
      <img
        className="card-img"
        src="https://cdn.filestackcontent.com/riAjXNhXSQOrBqVCCqtM"
        alt=""
      />
      <div className="card-body">
        <p className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</p>
        <span className="lh-1">6 000 грн.</span>
      </div>
      <p>BTN</p>
    </div>
  );
};
