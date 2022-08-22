import {
  isNil,
  toNumber,
  toString,
  forEachRight,
  padStart,
  isUndefined,
  round,
  repeat,
  size,
} from "lodash-es";

export default function(value, { suffix = "€", digits = 2, digitGrouping = true } = {}) {
  if (isNil(value)) {
    return "";
  }
  let valString = toString(value);
  const countCommas = valString.split(",").length - 1;
  if (countCommas > 1) {
    return value;
  }

  valString = valString.replace(",", ".").replace(/[.](?=.*[.])/g, "");
  let valNumber = toNumber(valString);
  if (valNumber === 0) {
    return `0${ digits > 0 ? "," : "" }${ repeat("0", digits) }${ suffix ? ` ${ suffix }` : "" }`;
  }
  if (!valNumber) {
    return `${ value }${ suffix ? ` ${ suffix }` : "" }`;
  }
  valNumber = round(valNumber, digits);
  valString = toString(valNumber);
  const valArr = valString.split(".");
  let fractVal = "";
  if (valArr[1]) {
    for (let i = 0; i < digits; i++) {
      const VALUE_IN_FRACT = isUndefined(valArr[1][i]) ? "0" : valArr[1][i];
      fractVal = `${ fractVal }${ VALUE_IN_FRACT }`;
    }
  } else {
    fractVal = padStart("", digits, "0");
  }

  let floorValString = toString(valArr[0] || "0");
  let negative = false;
  if (floorValString.startsWith("-")) {
    floorValString = floorValString.substring(1);
    negative = true;
  }
  let count = 0;
  let antwort = "";
  forEachRight(floorValString, val => {
    if (count > 0 && count % 3 === 0 && digitGrouping) {
      antwort += ".";
    }
    count++;
    antwort += val;
  });
  return `${ negative ? "-" : "" }${ antwort.split("").reverse().join("") }${ size(fractVal) > 0 ? "," : "" }${ fractVal }${ suffix ? ` ${ suffix }` : "" }`;
}
