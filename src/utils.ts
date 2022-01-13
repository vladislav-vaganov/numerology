import {isValid, isBefore, isAfter} from 'date-fns';
import {MAX_BIRTH_DATE, MIN_BIRTH_DATE} from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isValidBirthDate = (date: any): boolean =>
  isValid(date) && !isBefore(date, MIN_BIRTH_DATE) && !isAfter(date, MAX_BIRTH_DATE);

export const sumDigitsInNumber = (num: number): number => [...`${num}`].reduce((sum, digit) => sum + +digit, 0);

export const sumDigitsInDate = (date: Date): number =>
  sumDigitsInNumber(date.getDate()) + sumDigitsInNumber(date.getMonth() + 1) + sumDigitsInNumber(date.getFullYear());

export const reduceNumberToDigit = (num: number): number =>
  num > 9 ? reduceNumberToDigit(sumDigitsInNumber(num)) : num;

export const calcLifePathNumber = (birthDate: Date): number => reduceNumberToDigit(sumDigitsInDate(birthDate));
