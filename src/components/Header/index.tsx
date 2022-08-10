import React from 'react';

import { Container } from './styles';

type HeaderProps = {
  small: boolean;
  title?: boolean;
};

export const Header = ({ small, title }: HeaderProps) => {
  return (
    <Container className={small ? 'small' : undefined}>
      {title && <h1>Agenda de Churras</h1>}
    </Container>
  );
};
