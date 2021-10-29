import React from 'react';

import type { AppProps } from 'next/app';

import { PortalModals } from '~/components/HOC/ChildPortalModals';
import '~/styles/nprogress.css';
import { LoaderProvider } from '~/hooks/contexts/useLoader';
import { ModalsProvider } from '~/hooks/useModals';
import ResetStyle from '~/styles/reset';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoaderProvider>
      <ModalsProvider>
        <Component {...pageProps} />
        <ResetStyle />

        <PortalModals />
      </ModalsProvider>
    </LoaderProvider>
  );
}
export default MyApp;
