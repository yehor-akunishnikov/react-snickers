import React from 'react';

import './style.scss';

export interface IconBtnProps {
  Icon: React.ReactNode;
  class?: string;
  click?: (...args: any[]) => void;
}

export const IconBtn = (props: IconBtnProps) => {
  return (
    <button className={props.class} onClick={props.click}>
      <props.Icon />
    </button>
  );
};
