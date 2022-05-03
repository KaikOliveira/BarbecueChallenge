export function redirectSSR(url: string) {
  return {
    redirect: {
      destination: url,
      permanent: false,
    },
  };
}
