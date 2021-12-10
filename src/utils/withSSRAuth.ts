import { destroyCookie, parseCookies } from 'nookies';

export function withSSRAuth(fn: any) {
  return async (ctx: any) => {
    const cookies = parseCookies(ctx);

    if (!cookies['@Barbecue:token']) {
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
        destroyCookie(ctx, '@Barbecue:token');
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
