import { time, gender, bacData } from './types';

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

export const widmark = (
  drinks: number,
  standardDrink: number,
  bodyWeight: number,
  gender: gender,
  timeElapsed: number
): number => {
  const waterToTotalWeightRatio =
    gender === 'male' ? 0.68 : gender === 'female' ? 0.55 : 0.615;
  const bodyWeightInGrams = bodyWeight * 1000;
  const waterBodyWeight = bodyWeightInGrams * waterToTotalWeightRatio;

  const alcoholInGrams = drinks * standardDrink;

  const alcoholUnitPerWaterWeightUnit = alcoholInGrams / waterBodyWeight;

  const densityOfBlood = 1.055;
  const bacBeforeMetabolisation =
    alcoholUnitPerWaterWeightUnit * densityOfBlood * 100;

  const alcoholMetabolised = 0.015 * timeElapsed;
  const totalBac = bacBeforeMetabolisation - alcoholMetabolised;
  return totalBac <= 0 ? 0 : totalBac;
};

export const createBacData = (bacs: number[], startTime: time): bacData => {
  let currentTime = startTime;
  const bacData: bacData = [];
  for (let bac of bacs) {
    bacData.push({ bac: bac, time: timeToString(currentTime) });
    currentTime = nextTime(currentTime);
  }
  return bacData;
};

export const nextTime = ({ hours, minutes }: time): time => {
  if (hours === 23 && minutes === 30) return { hours: 0, minutes: 0 };
  if (minutes === 30) return { hours: hours + 1, minutes: 0 };
  return { hours: hours, minutes: minutes + 30 };
};

export const timeToString = ({ hours, minutes }: time): string => {
  const am = hours < 12 ? 'AM' : 'PM';
  const hour = hours === 0 || hours === 12 ? '12' : String(hours % 12);
  const minute = String(minutes).length === 2 ? String(minutes) : `0${minutes}`;
  return `${hour}:${minute}${am}`;
};
