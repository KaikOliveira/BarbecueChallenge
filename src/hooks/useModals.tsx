import React from 'react';

interface ModalsContextData {
  createBBQ: boolean;
  showCreateBBQ: () => void;
}

const ModalsContext = React.createContext<ModalsContextData>(
  {} as ModalsContextData
);

export const ModalsProvider: React.FC = ({ children }) => {
  const [createBBQ, setCreateBBQ] = React.useState<boolean>(false);

  const showCreateBBQ = () => setCreateBBQ(!createBBQ);

  return (
    <ModalsContext.Provider value={{ createBBQ, showCreateBBQ }}>
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = () => React.useContext(ModalsContext);
