import React from 'react';

interface ModalsContextData {
  createBBQ: boolean;
  showCreateBBQ: () => void;
  detailsBBQ: boolean;
  showDetailsBBQ: () => void;
}

const ModalsContext = React.createContext<ModalsContextData>(
  {} as ModalsContextData
);

export const ModalsProvider: React.FC = ({ children }) => {
  const [createBBQ, setCreateBBQ] = React.useState<boolean>(false);
  const [detailsBBQ, setDetailsBBQ] = React.useState<boolean>(false);

  const showCreateBBQ = () => setCreateBBQ(!createBBQ);

  const showDetailsBBQ = () => setDetailsBBQ(!detailsBBQ);

  return (
    <ModalsContext.Provider
      value={{ createBBQ, showCreateBBQ, detailsBBQ, showDetailsBBQ }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = () => React.useContext(ModalsContext);
