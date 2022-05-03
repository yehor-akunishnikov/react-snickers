import React from 'react';

import { Icons } from '../../../shared';
import { IconBtn } from '../../../shared';

import './style.scss';

export const AddProductBtn = () => {
  return <IconBtn Icon={Icons.Plus} class="add-product-btn" />;
};
