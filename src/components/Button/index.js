import React from 'react';
import './index.scss';

function Button({ type, disabled, children, onClick, ...rest }) {
  return (
    <button
      type={type}
      disabled
      className='center button-style'
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
