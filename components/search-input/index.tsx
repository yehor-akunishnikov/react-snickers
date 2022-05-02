import React from 'react';

import { Search } from '../../icons';

import './style.scss';

export const SearchInput = () => (
  <div className="input-container">
    <input placeholder="Пошук..." />
    <Search />
  </div>
);
