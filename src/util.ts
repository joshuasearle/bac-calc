import { time } from './types';

export const capitalise = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const timeObjToString = ({ hours, minutes }: time): string => {
  const hoursString = String(hours);
  const minutesString = String(minutes);
  const doubleHoursString =
    hoursString.length === 2 ? hoursString : '0' + hoursString;
  const doubleMinutesString =
    minutesString.length === 2 ? minutesString : '0' + minutesString;
  return doubleHoursString + ':' + doubleMinutesString;
};

export const timeToHours = ({ hours, minutes }: time): number => {
  return;
};
