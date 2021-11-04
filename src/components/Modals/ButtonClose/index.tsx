import React from 'react';
import { IoMdClose } from 'react-icons/io';

import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonClose: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <IoMdClose size={22} />
    </Container>
  );
};
