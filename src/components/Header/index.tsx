import React from 'react';

import { Container } from './styles';

type Props = {
  small: boolean;
  title?: boolean;
};

export const Header: React.FC<Props> = ({ small, title }) => {
  return (
    <Container className={small ? 'small' : undefined}>
      {title && <h1>Agenda de Churras</h1>}
    </Container>
  );
};
