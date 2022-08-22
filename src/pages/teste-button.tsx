import React from 'react';

import { Button } from 'button-ripple-react';

import { BBQ } from '~/assets/icons';
import { Container } from '~/styles/pages/teste-button';

const TesteButton: React.FC = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'fcfcfc',
      }}
    >
      <Container>
        <Button
          isLoading={true}
          loadingIcon={<BBQ />}
          height="50px"
          backgroundColor="#2274A5"
        >
          Custom loading
        </Button>

        <Button isLoading={true} height="50px" backgroundColor="#c81d25">
          Default Loading
        </Button>

        <Button height="50px" backgroundColor="#087e8b">
          Default Loading
        </Button>
      </Container>
    </div>
  );
};

export default TesteButton;
