import React from 'react';

import styled from 'styled-components';

export const DragBar: React.FC = () => {
  const Container = styled.aside`
    width: 35%;
    height: 0.5rem;
    background: var(--border);
    position: absolute;
    top: 1.2rem;
    left: calc(68% - 35%);
    display: none;
    @media (max-width: 993px) {
      display: block;
    }
  `;

  return <Container />;
};
