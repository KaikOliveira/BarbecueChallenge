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
      <Button />
    </div>
  );
};

export default TesteButton;
