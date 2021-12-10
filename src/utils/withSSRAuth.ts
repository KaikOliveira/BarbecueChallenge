import { destroyCookie, parseCookies } from 'nookies';

export function withSSRAuth(fn: any) {
  return async (ctx: any) => {
    const cookies = parseCookies(ctx);

    if (!cookies['@Auth:token']) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    try {
      return await fn(ctx);
    } catch (err) {
      if (err) {
        console.log('erro no token');
        destroyCookie(ctx, '@Auth:token');
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }
    }
  };
}
