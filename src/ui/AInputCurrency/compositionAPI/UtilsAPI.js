import {
  toRef,
} from "vue";

import {
  isNil,
  times,
} from "lodash-es";

export default function UtilsAPI(props) {
  const decimalDivider = toRef(props, "decimalDivider");
  const decimalPartLength = toRef(props, "decimalPartLength");
  const thousandDivider = toRef(props, "thousandDivider");

  const getCleanIntValue = ({ value, thousandDivider }) => {
    return value
      .replaceAll(thousandDivider, "")
      .replaceAll("-", "")
      .split("").reverse().join("")
      .match(/.{1,3}/g).join(thousandDivider)
      .split("").reverse().join("");
  };

  const adjustFloatPartAndDivider = val => {
    if (isNil(val)) {
      return "";
    }

    if (decimalDivider.value) {
      const splitVal = typeof val === "number"
        ? val.toString().split(".")
        : val.toString().split(decimalDivider.value);
      const intPart = splitVal[0];
      const setMinusSymbol = intPart[0] === "-" ? "-" : "";
      const intPartWithDivider = thousandDivider.value
        ? getCleanIntValue({ value: intPart, thousandDivider: thousandDivider.value })
        : intPart;
      const floatPart = splitVal.length > 1 ? splitVal[1] : "";
      const floatPartLength = floatPart.length;
      const zerosToAdd = times(decimalPartLength.value - floatPartLength, () => "0").join("");

      return `${ setMinusSymbol }${ intPartWithDivider }${ decimalDivider.value }${ floatPart }${ zerosToAdd }`;
    }

    return val;
  };

  return {
    adjustFloatPartAndDivider,
    getCleanIntValue,
  };
}
