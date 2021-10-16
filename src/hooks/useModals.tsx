import React from 'react';

interface ModalsContextData {
  createBBQ: boolean;
  showCreateBBQ: () => void;
}

const ModalsContext = React.createContext<ModalsContextData>(
  {} as ModalsContextData
);

const ModalsProvider: React.FC = ({ children }) => {
  const [createBBQ, setCreateBBQ] = React.useState<boolean>(false);

  const showCreateBBQ = () => setCreateBBQ(!createBBQ);

  return (
    <ModalsContext.Provider value={{ createBBQ, showCreateBBQ }}>
      {children}
    </ModalsContext.Provider>
  );
};

function useModals(): ModalsContextData {
  const context = React.useContext(ModalsContext);

  if (!context) {
    throw new Error('useModals error');
  }

  return context;
}

export { ModalsProvider, useModals };
