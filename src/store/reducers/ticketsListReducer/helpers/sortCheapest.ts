import { IState, ITicket } from '../../../../interfaces';

export const sortCheapest = (state: IState, payload: any): IState => ({
  ...state,
  tickets: [...state.tickets.sort((prev: ITicket, next: ITicket): number => (prev.price > next.price ? 1 : -1))],
  filterSelected: payload,
});
