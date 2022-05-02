import React from 'react';

import { Icons } from '../../shared';

import './style.scss';

export const SearchInput = () => (
  <div className="input-container">
    <input placeholder="Пошук..." />
    <Icons.Search />
  </div>
);
