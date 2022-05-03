import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app';

import { PortalModals } from '~/components/HOC/ChildPortalModals';
import '~/styles/nprogress.css';
import { UseContexts } from '~/hooks/useContexts';
import { queryClient } from '~/services/reactQuery/queryClient';
import ResetStyle from '~/styles/reset';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UseContexts>
        <Component {...pageProps} />
        <ResetStyle />

        <PortalModals />
        <ToastContainer toastClassName="toastifyContainer" hideProgressBar />
      </UseContexts>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default MyApp;
