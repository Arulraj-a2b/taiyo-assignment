/* eslint-disable */
import type {IsEmptyValueType} from './validatorsTypes';

export const isEmpty = (value: IsEmptyValueType): boolean =>
  value === undefined || value === null || value === '';

export const isNumber = (value: string | number): boolean => {
  if (typeof value === 'string' || typeof value === 'number') {
    return value.toString().match(/^\d*$/) !== null;
  }
  return false;
};

export const isValidEmail = (value: string) => {
  if (typeof value === 'string') {
    return (
      value
        .trim()
        .match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) !==
      null
    );
  }
  return false;
};
