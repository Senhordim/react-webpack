import React from 'react';
import Button from './button';  

const printConsole = () => {
  console.log('cliecked...')
}

const LikeButton = () => (
  <Button handleClick={() => printConsole() }> Curtir </Button>
);

export default LikeButton;