import {isValid, isBefore, isAfter} from 'date-fns';
import {MAX_BIRTH_DATE, MIN_BIRTH_DATE} from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isValidBirthDate = (date: any): boolean =>
  isValid(date) && !isBefore(date, MIN_BIRTH_DATE) && !isAfter(date, MAX_BIRTH_DATE);

export const sumDigitsInNumber = (num: number): number => [...`${num}`].reduce((sum, digit) => sum + +digit, 0);

export const reduceNumberToDigit = (num: number): number => {
  if (num < 10) {
    return num;
  }

  return reduceNumberToDigit(sumDigitsInNumber(num));
};

export const calcLifePathNumberWithSteps = (birthDate: Date): number[] => {
  const result = [];

  let step =
    sumDigitsInNumber(birthDate.getDate()) +
    sumDigitsInNumber(birthDate.getMonth() + 1) +
    sumDigitsInNumber(birthDate.getFullYear());
  result.push(step);

  while (step > 9) {
    step = sumDigitsInNumber(step);
    result.push(step);
  }

  return result;
};
