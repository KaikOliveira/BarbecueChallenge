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
  // const { data: schedulesData, ...rest } = useQuery(
  //   ['schedules'],
  //   () => getAllSchedule(),
  //   {
  //     staleTime: 50000, //, 5 minutos
  //     ...options,
  //   }
  // );

  // const data = schedulesData as IArraySchedules;

  // return { data, ...rest };
  return useQuery('schedules', () => getAllSchedule(), {
    ...options,
    staleTime: 50000,
  });
}
