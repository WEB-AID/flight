import { IJSONTickets, IAction } from '../../interfaces';
import { ActionType } from '../../enums';

export const getTicketsAction = (payload: IJSONTickets): IAction => ({
  type: ActionType.GET_TICKETS,
  payload,
});
