import React from 'react';

import { DetailsBBQ } from '../Modals/DetailsBBQ';
import { NewBBQ } from '../Modals/NewBBQ/index';

export const PortalModals: React.FC = () => {
  return (
    <>
      <NewBBQ />
      <DetailsBBQ />
    </>
  );
};
