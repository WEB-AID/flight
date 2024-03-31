import { ActionType } from '../enums';

export interface IState {
  tickets: ITicket[];
  stop: boolean;
  numberToShow: number;
  filterSelected: string;
  filterTransfers: IFilterTransfer[];
}

export interface IActionTypes {
  [key: string]: () => IState;
  CHECKBOX_CLICKED: () => IState;
  GET_TICKETS: () => IState;
  SET_NUMBER_TO_SHOW: () => IState;
  SET_CHEAPEST: () => IState;
  SET_FASTEST: () => IState;
}

export interface IAction {
  type: ActionType;
  payload: string | number | boolean | IJSONTickets;
}

export interface ITicket {
  price: number;
  carrier: string;
  segments: ISegment[];
}

export interface ISegment {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: string[];
}

export interface ITicketProps {
  price: number;
  carrier: string;
  forward: IRoute;
  backward: IRoute;
}

export interface IRoute {
  date: string;
  destination: string;
  duration: number;
  origin: string;
  stops: string[];
}

export interface IFilterTransfer {
  id: number;
  isChecked: boolean;
  name: string;
  value: number;
}

export interface IJSONTickets {
  stop: boolean;
  tickets: ITicket[];
}
