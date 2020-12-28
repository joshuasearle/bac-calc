import { time, gender } from './types';

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
  return totalBac;
};
