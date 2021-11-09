import React from 'react';

import { AuthProvider } from './contexts/useAuth';
import { LoaderProvider } from './contexts/useLoader';
import { ModalsProvider } from './contexts/useModals';

export const UseContexts: React.FC = ({ children }) => {
  return (
    <LoaderProvider>
      <ModalsProvider>
        <AuthProvider>{children}</AuthProvider>
      </ModalsProvider>
    </LoaderProvider>
  );
};
