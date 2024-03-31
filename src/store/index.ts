import { createStore, applyMiddleware } from 'redux';
import { useDispatch } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

import { ticketsListReducer } from './reducers/ticketsListReducer/ticketsListReducer.ts';

export const store = createStore(ticketsListReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
