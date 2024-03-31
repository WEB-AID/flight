import { IState } from '../../../../interfaces';

export const increaseNumberToShow = (state: IState, payload: any = 5): IState => ({
  ...state,
  numberToShow: state.numberToShow + payload,
});
