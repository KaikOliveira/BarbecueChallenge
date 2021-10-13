import type { AppProps } from 'next/app';

import ResetStyle from '~/styles/reset';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ResetStyle />
    </>
  );
}
export default MyApp;
