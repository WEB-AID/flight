import { IState, ITicket } from '../../../../interfaces';

export const getTicketsList = (state: IState, payload: any, handler: (ticket: ITicket) => number): IState => {
  const newTickets = [...state.tickets, ...payload.tickets];
  const sortedTickets =
    state.filterSelected === 'CHEAPEST'
      ? newTickets.sort((prev, next) => prev.price - next.price)
      : newTickets.sort((previous, next) => handler(previous) - handler(next));

  return {
    ...state,
    tickets: sortedTickets,
    stop: payload.stop,
  };
};
