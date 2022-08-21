import React from 'react';

import { Button } from 'button-ripple-react';

// import { Container } from './styles';

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
      <div style={{ width: '150px', height: '80px', border: '1px solid red' }}>
        <Button height="50px" backgroundColor="#2274A5">
          Button
        </Button>
      </div>
    </div>
  );
};

export default TesteButton;
