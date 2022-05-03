export interface ISchedules {
  id: string;
  title: string;
  date: string;
  priceTotal?: number;
  amountPeople?: number;
  idUser: number;
}

export type IArraySchedules = ISchedules[];

export interface CreateSchedulePayload {
  title: string;
  date: string;
  priceTotal: string;
}
