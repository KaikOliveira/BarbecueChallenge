import { useQuery, UseQueryOptions } from 'react-query';

import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

import { IArraySchedules } from '~/interfaces/schedule';
import { api } from '~/services/api';

export async function getAllSchedule(
  ctx?: GetServerSidePropsContext
): Promise<IArraySchedules> {
  const cookies = parseCookies(ctx);
  const headers = {
    Authorization: `Bearer ${cookies['@Barbecue:token']}`,
  };

  const { data } = await api.get('schedules/all', { headers });

  return data;
}

export function useSchedule(options?: any | unknown) {
  return useQuery('schedules', () => getAllSchedule(), {
    ...options,
    staleTime: 50000,
  });
}
