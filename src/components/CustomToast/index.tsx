import React from 'react';

import { IconToastError, IconToastSucess, IconToastWarn } from '~/assets/icons';

import { Marker } from './Marker';
import { Container, MarkerContainer, IconContainer } from './styles';

interface CustomToastData {
  title?: string;
  message: string;
  status: string;
}

export const CustomToast = ({ title, message, status }: CustomToastData) => {
  function Icon() {
    return (
      <>
        {status === 'success' && <IconToastSucess />}
        {status === 'warn' && <IconToastWarn />}
        {status === 'error' && <IconToastError />}
      </>
    );
  }

  return (
    <>
      <MarkerContainer>
        <Marker status={status} />
      </MarkerContainer>
      <Container>
        <IconContainer>
          <Icon />
        </IconContainer>
        <div className="message">
          {!!title && <span>{title}</span>}
          <p>{message}</p>
        </div>
      </Container>
    </>
  );
};
