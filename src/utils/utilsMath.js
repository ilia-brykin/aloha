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
 * @param {number} value - The number to check if it is even
 *
 * @return {boolean} - True if the number is an integer and even, otherwise false.
 */
export function isEven(value) {
  if (!isInteger(value)) {
    return false;
  }
  return value % 2 === 0;
}

/**
 * Sets number to the value with determined number of digits after divider
 *
 * @param num - Original number value
 * @param pre - Number of digits after divider
 *
 * @returns {number} - Result
 */
export function toPrecision(num, pre) {
  if (pre === 0) {
    return Math.round(num);
  }
  let snum = String(num);
  const pointPos = snum.indexOf(".");
  if (pointPos === -1) {
    return num;
  }
  const nums = snum.replace(".", "").split("");
  const datum = nums[pointPos + pre];
  if (!datum) {
    return num;
  }
  const length = snum.length;
  if (snum.charAt(length - 1) === "5") {
    snum = `${ snum.slice(0, Math.max(0, length - 1)) }6`;
  }

  return Number.parseFloat(Number(snum).toFixed(pre));
}
