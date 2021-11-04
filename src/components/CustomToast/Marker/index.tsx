import React from 'react';

import styled from 'styled-components';

interface MarkerData {
  status?: string;
}

export function Marker({ status }: MarkerData) {
  const Container = styled.div`
    width: 0.4rem;
    height: 100%;
    border-bottom-right-radius: 1.3rem;
    border-top-right-radius: 1.3rem;
  `;

  return (
    <Container
      style={
        status === 'success'
          ? { background: '#00BA88' }
          : status === 'warn'
          ? { background: '#F4B740' }
          : status === 'error'
          ? { background: '#ED2E7E' }
          : { background: '#E8EBF0' }
      }
    />
  );
}
