import React from 'react';

const Title = ({name, lastName}) => (
  <h2>{ `Olá ${name} ${lastName}` }</h2>
);

Title.defaultProps = {
  name: 'Não informado',
  lastName: 'Sobrenome não informado'
};

export default Title;