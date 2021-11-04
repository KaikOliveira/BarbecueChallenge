import React from 'react';
import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app';

import { PortalModals } from '~/components/HOC/ChildPortalModals';
import '~/styles/nprogress.css';
import { LoaderProvider } from '~/hooks/contexts/useLoader';
import { ModalsProvider } from '~/hooks/useModals';
import ResetStyle from '~/styles/reset';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoaderProvider>
      <ModalsProvider>
        <Component {...pageProps} />
        <ResetStyle />

        <PortalModals />
        <ToastContainer toastClassName="toastifyContainer" hideProgressBar />
      </ModalsProvider>
    </LoaderProvider>
  );
}
export default MyApp;
