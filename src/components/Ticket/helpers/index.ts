import { format, add } from 'date-fns';

import { IRoute } from '../../../interfaces';

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumSignificantDigits: 6,
  }).format(price);
}

export function formatTransfers(arr: string[]): string {
  const count = arr.length;
  if (count === 0) return 'Без пересадок';
  if (count === 1) return 'пересадка';
  if (count < 5) return 'пересадки';
  return 'пересадок';
}

export function formatFlightTime(minutes: number): string {
  const hh = Math.floor(minutes / 60).toString();
  const mins = (minutes % 60).toString().padStart(2, '0');
  return `${hh}ч ${mins}м`;
}

export function formatArrivalAndDepartureTime(obj: IRoute): string {
  const departureTime = format(new Date(obj.date), 'hh:mm');
  const arrivalTime = format(
    add(new Date(obj.date), {
      minutes: obj.duration,
    }),
    'hh:mm'
  );
  return `${departureTime} - ${arrivalTime}`;
}
