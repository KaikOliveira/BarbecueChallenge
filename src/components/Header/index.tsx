import React from 'react';

import { Container } from './styles';

type Size = {
  small: boolean;
};

export const Header: React.FC<Size> = (size) => {
  console.log(size);

  return (
    <Container className={size.small ? 'small' : undefined}>
      <h1>Agenda de Churras</h1>
    </Container>
  );
};
