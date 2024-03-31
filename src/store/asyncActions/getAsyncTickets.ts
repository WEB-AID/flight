import Cookies from 'js-cookie';

import { AppDispatch } from '../../store';
import { getTicketsAction } from '../actions/getTicketsAction';

export const getAsyncTickets =
  () =>
  (dispatch: AppDispatch): void => {
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${Cookies.get('searchId')}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(getTicketsAction(json));
        if (!json.stop) {
          setTimeout(() => dispatch(getAsyncTickets()), 1000);
        }
      })
      .catch(() => {
        setTimeout(() => dispatch(getAsyncTickets()), 1000);
      });
  };
