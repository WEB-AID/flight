import { FC, useEffect } from 'react';
import Cookies from 'js-cookie';

import { useAppDispatch, AppDispatch } from '../../store';
import { getAsyncTickets } from '../../store/asyncActions/getAsyncTickets.ts';
import getSearchId from '../../api';
import Filter from '../Filter/Filter.tsx';
import HeaderLogo from '../HeaderLogo/HeaderLogo.tsx';
import TicketsOptions from '../TicketsOptions/TicketsOptions.tsx';
import TicketList from '../TicketList/TicketList.tsx';

import styles from './App.module.scss';

const { pageWrapper, contentWrapper, asideWrapper, mainWrapper } = styles;

const App: FC = () => {
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    getSearchId().then(() => {
      dispatch(getAsyncTickets());
    });

    return Cookies.remove('searchId');
  }, [dispatch]);

  return (
    <>
      <HeaderLogo />
      <main className={pageWrapper}>
        <div className={contentWrapper}>
          <aside className={asideWrapper}>
            <TicketsOptions />
          </aside>
          <div className={mainWrapper}>
            <Filter />
            <TicketList />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
