import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { Button } from 'button-ripple-react';

import { Container, Text, P } from '~/styles/pages/teste-button';

const TesteButton: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  function handleActiveLoading() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }

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
        <P>Default</P>
        <Button height="50px" backgroundColor="#087e8b">
          <Text>Default</Text>
        </Button>

        <P>Default Disabed</P>
        <Button height="50px" backgroundColor="#087e8b" disabled={true}>
          <Text>Default Disabled</Text>
        </Button>

        <P>Default Loading</P>
        <Button isLoading={true} height="50px" backgroundColor="#c81d25">
          Default Loading
        </Button>

        <P>Custom loading icon</P>
        <Button
          isLoading={true}
          loadingIcon={<FiHeart size={20} />}
          height="50px"
          backgroundColor="#2274A5"
        >
          Custom loading
        </Button>

        <P>Active loading 5s</P>
        <Button
          height="50px"
          backgroundColor="#087e8b"
          onClick={() => handleActiveLoading()}
          isLoading={isLoading}
        >
          <Text>Click me</Text>
        </Button>
      </Container>
    </div>
  );
};

export default TesteButton;
