import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Container } from './styles';

export const Loading = () => {
  return (
    <Container>
      <AiOutlineLoading3Quarters size={20} />
    </Container>
  );
};
