import { ITicket, IFilterTransfer } from '../../../interfaces';

export function sortFollowToCheckBoxes(arr: ITicket[], filterTransfersArr: IFilterTransfer[]): ITicket[] {
  let sortedTickets = [...arr];

  filterTransfersArr.forEach((obj: IFilterTransfer): void => {
    if (!obj.isChecked) {
      sortedTickets = sortedTickets.filter((ticket: ITicket) => {
        return ticket.segments[0].stops.length !== obj.value && ticket.segments[1].stops.length !== obj.value;
      });
    }
  });
  return sortedTickets;
}
