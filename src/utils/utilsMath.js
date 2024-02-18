import {
  isInteger,
} from "lodash-es";

/**
 * Determines if a given number is odd.
 *
 * This function first checks if the provided value is an integer.
 * It returns false for non-integer values to ensure accurate oddness check.
 * For integer values, it checks if the number is odd.
 *
 * @param {number} value - The number to check if it is odd
 *
 * @return {boolean} - True if the number is an integer and odd, otherwise false.
 */
export function isOdd(value) {
  if (!isInteger(value)) {
    return false;
  }
  return Math.abs(value % 2) === 1;
}

/**
 * Determines if a given number is even.
 *
 * This function first checks if the provided value is an integer.
 * It returns false for non-integer values to ensure accurate evenness check.
 * For integer values, it checks if the number is even.
 *
 * @param {number} value - The number to check if it is even.
 *
 * @return {boolean} - True if the number is an integer and even, otherwise false.
 */
export function isEven(value) {
  if (!isInteger(value)) {
    return false;
  }
  return value % 2 === 0;
}

