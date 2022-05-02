import React from 'react';

import './style.scss';

export interface IconBtnProps {
  Icon: React.ReactNode;
  class?: string;
}

export const IconBtn = (props: IconBtnProps) => {
  return (
    <button className={props.class}>
      <props.Icon />
    </button>
  );
};
