import { FC } from 'react';
import type { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { ICheckBoxClickedAction, checkBoxClicked } from '../../store/actions/ticketOptionsActions';
import { IFilterTransfer, IState } from '../../interfaces';

import styles from './TicketsOptions.module.scss';

const { 'options-container': options, 'checkbox-container': checkboxContainer, 'check-box': checkBox } = styles;

const TicketsOptions: FC = () => {
  const dispatch: Dispatch<ICheckBoxClickedAction> = useDispatch();
  const filterTransfers: IFilterTransfer[] = useSelector((state: IState): IFilterTransfer[] => state.filterTransfers);

  const handleCheckBoxChange = (id: number): void => {
    dispatch(checkBoxClicked(id));
  };

  const checkboxes = filterTransfers.map((el: IFilterTransfer) => {
    return (
      <div className={checkboxContainer} key={el.id}>
        <label>
          <input type="checkbox" value={el.value} onChange={() => handleCheckBoxChange(el.id)} checked={el.isChecked} />
          <span className={checkBox}></span>
          {el.name}
        </label>
      </div>
    );
  });

  return (
    <form className={options}>
      <h3>количество пересадок</h3>
      {checkboxes}
    </form>
  );
};

export default TicketsOptions;
