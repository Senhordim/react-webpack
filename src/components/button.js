import React from 'react';

const Buton = ({ children, handleClick }) => (
  <button onClick={ handleClick }>{ children }</button>
);

export default Buton;