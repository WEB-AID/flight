import { FC } from 'react';
import type { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { IFilterActions, setCheapest, setFastest } from '../../store/actions/filterActions.ts';
import { IState } from '../../interfaces';

import styles from './Filter.module.scss';

const { 'ticket-list-filter': formStyle, 'label-filter': labelFilter, checked } = styles;

const isFilterSelected = (stateFilter: string, filter: string): boolean => stateFilter === filter;

const Filter: FC = () => {
  const dispatch: Dispatch<IFilterActions> = useDispatch();
  const filterSelected: string = useSelector((state: IState): string => state.filterSelected);

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'CHEAPEST') return dispatch(setCheapest);
    if (e.target.value === 'FASTEST') return dispatch(setFastest);
  };

  const classCheap = isFilterSelected(filterSelected, 'CHEAPEST') ? `${labelFilter} ${checked}` : `${labelFilter}`;
  const classFast = isFilterSelected(filterSelected, 'FASTEST') ? `${labelFilter} ${checked}` : `${labelFilter}`;

  return (
    <form className={formStyle}>
      <input
        type="radio"
        id="cheap"
        name="ticketListFilter"
        hidden
        onChange={onFilterChange}
        value="CHEAPEST"
        checked={isFilterSelected(filterSelected, 'CHEAPEST')}
      />
      <label className={classCheap} htmlFor="cheap">
        самый дешевый
      </label>

      <input
        type="radio"
        id="fast"
        name="ticketListFilter"
        hidden
        onChange={onFilterChange}
        value="FASTEST"
        checked={isFilterSelected(filterSelected, 'FASTEST')}
      />
      <label className={classFast} htmlFor="fast">
        самый быстрый
      </label>
    </form>
  );
};

export default Filter;
