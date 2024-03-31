import type { Reducer } from 'redux';

import { IAction, IActionTypes, IState } from '../../../interfaces/index.ts';
import { ActionType } from '../../../enums/index.ts';

import { getTicketsList } from './helpers/getTickets.ts';
import { getTotalFlightDuration } from './helpers/getTotalFlightDuration.ts';
import { increaseNumberToShow } from './helpers/increaseNumberToShow.ts';
import { sortCheapest } from './helpers/sortCheapest.ts';
import { sortFastest } from './helpers/sortFastest.ts';
import { updateCheckBoxState } from './helpers/updateCheckBoxState.ts';

const defaultState: IState = {
  tickets: [],
  stop: false,
  numberToShow: 5,
  filterSelected: 'CHEAPEST',
  filterTransfers: [
    {
      id: 0,
      isChecked: true,
      name: 'Все',
      value: -1,
    },
    {
      id: 1,
      isChecked: true,
      name: 'Без пересадок',
      value: 0,
    },
    {
      id: 2,
      isChecked: true,
      name: '1 пересадка',
      value: 1,
    },
    {
      id: 3,
      isChecked: true,
      name: '2 пересадки',
      value: 2,
    },
    {
      id: 4,
      isChecked: true,
      name: '3 пересадки',
      value: 3,
    },
  ],
};

export const ticketsListReducer: Reducer<IState, IAction> = (state = defaultState, { type, payload }): IState => {
  const actionTypes: IActionTypes = {
    [ActionType.CHECKBOX_CLICKED]: () => updateCheckBoxState(state, payload),
    [ActionType.SET_CHEAPEST]: () => sortCheapest(state, payload),
    [ActionType.SET_FASTEST]: () => sortFastest(state, payload, getTotalFlightDuration),
    [ActionType.GET_TICKETS]: () => getTicketsList(state, payload, getTotalFlightDuration),
    [ActionType.SET_NUMBER_TO_SHOW]: () => increaseNumberToShow(state, payload),
  };

  if (actionTypes.hasOwnProperty(type)) {
    return actionTypes[type]();
  }
  return {
    ...state,
  };
};
