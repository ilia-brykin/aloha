import {
  isInteger,
} from "lodash-es";

export function isOdd(n) {
  if (!isInteger(n)) {
    return false;
  }
  console.log("n", n);
  console.log("Math.abs(n % 2) === 1", Math.abs(n % 2) === 1);
  return Math.abs(n % 2) === 1;
}

export function isEven(n) {
  if (!isInteger(n)) {
    return false;
  }
  return n % 2 === 0;
}

