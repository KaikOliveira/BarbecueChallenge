import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { parseCookies } from 'nookies';

import { redirectSSR } from './redirectSSR';
import { resetCookiesSSR } from './resetCookiesSSR';

export function withSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const { '@Barbecue:token': token } = parseCookies(ctx);

    if (token) return redirectSSR('/agenda');

    try {
      return await fn(ctx);
    } catch (err) {
      return resetCookiesSSR(ctx);
    }
  };
}
