export interface ISchedules {
  id: string;
  title: string;
  date: string;
  priceTotal?: number;
  amountPeople?: number;
  idUser: number;
}

// export interface IArraySchedules {
//   schedules: ISchedules[];
// }

export type IArraySchedules = ISchedules[];
