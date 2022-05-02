import React from 'react';

import { AddProductBtn } from '../add-product-btn';
import { FavoriteBtn } from '../favorite-btn';

import './style.scss';

export const Card = () => (
  <div className="card">
    <FavoriteBtn />
    <img
      className="card-img mb-15"
      src="https://cdn.filestackcontent.com/riAjXNhXSQOrBqVCCqtM"
      alt=""
    />
    <p className="card-title mb-15">Мужские Кроссовки Nike Blazer Mid Suede</p>
    <div className="card-footer d-flex align-center">
      <div className="card-price">
        <div className="lh-1">Ціна:</div>
        <span className="lh-1">6 000 грн.</span>
      </div>
      <AddProductBtn />
    </div>
  </div>
);
