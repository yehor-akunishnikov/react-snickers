import React from 'react';

import { Icons } from '../../../shared';
import { IconBtn } from '../../../shared';

import './style.scss';

export const RemoveProductBtn = () => {
  return <IconBtn Icon={Icons.Remove} class="remove-btn" />;
};
