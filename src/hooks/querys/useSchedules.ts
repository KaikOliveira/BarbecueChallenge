import { useMutation, useQuery } from 'react-query';

import { queryClient } from '~/services/reactQuery/queryClient';
import { schedulesService } from '~/services/useCases/schedulesService';
import { ISchedules } from '~/types/schedule';

export const useGetSchedules = (options: any) => {
  const { data: items, ...rest } = useQuery(
    ['schedules'],
    schedulesService.getAllSchedule,
    {
      staleTime: 1000 * 60 * 20, // 20 minutos
      ...options,
    }
  );

  const data = items as ISchedules[];

  return { data, ...rest };
};

export const useCreateSchedule = () => {
  return useMutation(schedulesService.createSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries('schedules');
    },
  });
};
