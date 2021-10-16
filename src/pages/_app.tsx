import React from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import { PortalModals } from '~/components/HOC/ChildPortalModals';
import Portal from '~/components/HOC/Portal';
import '~/styles/nprogress.css';
import { ModalsProvider } from '~/hooks/useModals';
import ResetStyle from '~/styles/reset';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <ModalsProvider>
      <Component {...pageProps} />
      <ResetStyle />
      <Portal>
        <PortalModals />
      </Portal>
    </ModalsProvider>
  );
}
export default MyApp;
