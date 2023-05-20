import {
  isInteger,
} from "lodash-es";

export function isOdd(n) {
  if (!isInteger(n)) {
    return false;
  }
  return Math.abs(n % 2) === 1;
}

export function isEven(n) {
  if (!isInteger(n)) {
    return false;
  }
  return n % 2 === 0;
}

