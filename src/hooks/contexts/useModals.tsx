import React from 'react';

interface ModalsContextData {
  createBBQ: boolean;
  showCreateBBQ: () => void;
  detailsBBQ: boolean;
  showDetailsBBQ: (id: string) => void;
  idShowSchedule: string;
  onCloseDetailsBQQ: () => void;
}

const ModalsContext = React.createContext<ModalsContextData>(
  {} as ModalsContextData
);

export const ModalsProvider: React.FC = ({ children }) => {
  const [createBBQ, setCreateBBQ] = React.useState<boolean>(false);
  const [detailsBBQ, setDetailsBBQ] = React.useState<boolean>(false);
  const [idShowSchedule, setIdShowSchedule] = React.useState<string>('');

  const showCreateBBQ = () => {
    setCreateBBQ(!createBBQ);
  };

  const onCloseDetailsBQQ = () => {
    setIdShowSchedule('');
    setDetailsBBQ(false);
  };

  const showDetailsBBQ = (id: string) => {
    setIdShowSchedule(id);
    setDetailsBBQ(!detailsBBQ);
  };

  return (
    <ModalsContext.Provider
      value={{
        createBBQ,
        showCreateBBQ,
        detailsBBQ,
        showDetailsBBQ,
        idShowSchedule,
        onCloseDetailsBQQ,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = () => React.useContext(ModalsContext);
