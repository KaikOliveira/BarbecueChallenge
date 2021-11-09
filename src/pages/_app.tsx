import React from 'react';
import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app';

import { PortalModals } from '~/components/HOC/ChildPortalModals';
import '~/styles/nprogress.css';
import { UseContexts } from '~/hooks/useContexts';
import ResetStyle from '~/styles/reset';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseContexts>
      <Component {...pageProps} />
      <ResetStyle />

      <PortalModals />
      <ToastContainer toastClassName="toastifyContainer" hideProgressBar />
    </UseContexts>
  );
}
export default MyApp;
