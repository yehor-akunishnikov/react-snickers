import React from 'react';

import { Plus } from '../../icons';
import { IconBtn } from '../icon-btn';

import './style.scss';

export const AddProductBtn = () => {
  return <IconBtn Icon={Plus} class="add-product-btn" />;
};
