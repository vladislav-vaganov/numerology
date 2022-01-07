import {isValid, isBefore} from 'date-fns';
import {MIN_BIRTH_DATE} from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isValidBirthDate = (date: any): boolean => isValid(date) && !isBefore(date, MIN_BIRTH_DATE);
