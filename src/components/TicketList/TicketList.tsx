import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import type { Dispatch } from 'redux';

import Ticket from '../Ticket/Ticket';
import { ISetNumberToShow, setNumberToShow } from '../../store/actions/setNumberToShow';
import Loader from '../Loader';
import ErrorPage from '../ErrorPage';
import { IState, ITicket, IFilterTransfer } from '../../interfaces';

import { sortFollowToCheckBoxes } from './helpers';
import styles from './TicketList.module.scss';

const { 'ticket-list': ticketList, 'show-more-btn': showMore } = styles;

const sliceTickets = (arr: ITicket[], tickets = 5) => arr.slice(0, tickets);

const TicketList: FC = () => {
  const dispatch: Dispatch<ISetNumberToShow> = useDispatch();
  const tickets: ITicket[] = useSelector((state: IState): ITicket[] => state.tickets);
  const numberToShow: number = useSelector((state: IState): number => state.numberToShow);
  const stop: boolean = useSelector((state: IState): boolean => state.stop);
  const filterTransfers: IFilterTransfer[] = useSelector((state: IState): IFilterTransfer[] => state.filterTransfers);

  const list: ITicket[] = sliceTickets(sortFollowToCheckBoxes(tickets, filterTransfers), numberToShow);
  const listOfComponents = list.map((el) => {
    const [forward, backward] = el.segments;
    return <Ticket price={el.price} carrier={el.carrier} forward={forward} backward={backward} key={nanoid()} />;
  });

  return (
    <>
      {!stop ? <Loader /> : null}
      <ul className={ticketList}>{listOfComponents}</ul>
      {listOfComponents.length > 0 ? (
        <button className={showMore} onClick={() => dispatch(setNumberToShow())}>
          показать еще 5 билетов!
        </button>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default TicketList;
