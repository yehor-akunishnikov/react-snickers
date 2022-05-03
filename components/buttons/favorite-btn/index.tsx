import React from 'react';

import { Icons } from '../../shared';
import { IconBtn } from '../../shared';

import './style.scss';

export const FavoriteBtn = () => {
  return <IconBtn Icon={Icons.Heart} class="favorite-btn" />;
};
