import { CreateSchedulePayload } from '~/types/schedule';

import { api } from '../client';

class SchedulesService {
  async getAllSchedule() {
    try {
      const { data } = await api.get('schedules/all');

      return data;
    } catch {
      throw new Error('Erro ao buscar os agendamentos');
    }
  }

  async createSchedule(payload: CreateSchedulePayload) {
    try {
      await api.post('schedules/create', payload);
    } catch {
      throw new Error('Erro ao criar o agendamento');
    }
  }
}

const schedulesService = new SchedulesService();

export { schedulesService };
