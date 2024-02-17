import {
  isInteger,
} from "lodash-es";

/**
 * Determines if a given number is odd.
 *
 * @param {number} n - The number to check if it is odd
 *
 * @return {boolean} - True if the number is odd, otherwise false.
 */
export function isOdd(n) {
  if (!isInteger(n)) {
    return false;
  }
  return Math.abs(n % 2) === 1;
}

/**
 * Determines if a given number is even.
 *
 * @param {number} n - The number to be checked
 *
 * @returns {boolean} - True if the number is even, false otherwise.
 */
export function isEven(n) {
  if (!isInteger(n)) {
    return false;
  }
  return n % 2 === 0;
}

