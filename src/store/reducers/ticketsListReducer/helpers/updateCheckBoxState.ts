import { IState, IFilterTransfer } from '../../../../interfaces/index.ts';

export function updateCheckBoxState(state: IState, id: any): IState {
  const newFilters = [...state.filterTransfers];
  const idx = newFilters.findIndex((el: IFilterTransfer): boolean => el.id === id);

  if (id === 0) {
    const newChecked = !newFilters[id].isChecked;
    newFilters.forEach((item) => (item.isChecked = newChecked));
  } else {
    newFilters[idx].isChecked = !newFilters[idx].isChecked;
    newFilters[0].isChecked = newFilters.slice(1).every((el) => el.isChecked) ? true : false;
  }

  return {
    ...state,
    filterTransfers: newFilters,
  };
}
