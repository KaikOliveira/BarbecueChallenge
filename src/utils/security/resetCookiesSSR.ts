/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

import { redirectSSR } from './redirectSSR';

export function resetCookiesSSR(ctx: GetServerSidePropsContext) {
  nookies.set(ctx, '@Barbecue:user', null!, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });

  nookies.set(ctx, '@Barbecue:token', null!, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });

  return redirectSSR('/');
}
