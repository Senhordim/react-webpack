import React from 'react';

const Square = ({color}) => (
  <div style={{ 
    backgroundColor: color, 
    width: '250px',
    height: '250px'
  }}></div>
);

Square.defaultProps = {
  color: 'red'
};

export default Square;