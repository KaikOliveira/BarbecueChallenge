/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import router from 'next/router';
import NProgress from 'nprogress';

interface LoaderContextData {
  handleStart: () => void;
  handleStop: () => void;
}

export const LoaderContext = React.createContext({} as LoaderContextData);

interface LoaderProviderProps {
  children: React.ReactNode;
}
export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const handleStart = () => {
    NProgress.start();
  };
  const handleStop = () => {
    NProgress.done();
  };

  React.useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router.events]);

  return (
    <LoaderContext.Provider value={{ handleStart, handleStop }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => React.useContext(LoaderContext);
