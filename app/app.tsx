import React from 'react';

import { Header } from '../components/header';
import { Card } from '../components/card';
import { SearchInput } from '../components/search-input';

import './app.scss';

export const App = () => (
  <div className="wrapper clear">
    <Header />
    <div className="content p-30">
      <div className="d-flex flex-wrap justify-between align-center mb-30">
        <h1 className="m-0 lh-1">Все взуття</h1>
        <SearchInput />
      </div>
      <div className="cards-container d-flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
);
