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
  const modelType = toRef(props, "modelType");
  const thousandDivider = toRef(props, "thousandDivider");

  const getCleanIntValue = ({ value, thousandDivider }) => {
    return value
      .replaceAll(thousandDivider, "")
      .replaceAll("-", "")
      .split("").reverse().join("")
      .match(/.{1,3}/g).join(thousandDivider)
      .split("").reverse().join("");
  };

  const normalizeValueFromModel = value => {
    const valueString = `${ value }`;
    const isNumberStringWithDot = modelType.value === "number" &&
      decimalDivider.value !== "." &&
      /^-?\d+\.\d+$/.test(valueString);

    if (typeof value === "number" || isNumberStringWithDot) {
      return valueString.replace(".", decimalDivider.value);
    }

    return valueString;
  };

  const adjustFloatPartAndDivider = val => {
    if (isNil(val)) {
      return "";
    }

    if (decimalDivider.value) {
      const splitVal = normalizeValueFromModel(val).split(decimalDivider.value);
      const intPart = splitVal[0];
      const setMinusSymbol = intPart[0] === "-" ? "-" : "";
      const intPartWithoutMinus = setMinusSymbol ? intPart.slice(1) : intPart;
      const intPartWithDivider = thousandDivider.value
        ? getCleanIntValue({ value: intPartWithoutMinus, thousandDivider: thousandDivider.value })
        : intPartWithoutMinus;
      const floatPart = splitVal.length > 1 ? splitVal[1] : "";
      const floatPartLength = floatPart.length;
      const zerosToAdd = times(decimalPartLength.value - floatPartLength, () => "0").join("");
      const fullFloatPart = `${ floatPart }${ zerosToAdd }`;

      return `${ setMinusSymbol }${ intPartWithDivider }${ fullFloatPart ? decimalDivider.value : "" }${ fullFloatPart }`;
    }

    return val;
  };

  return {
    adjustFloatPartAndDivider,
    getCleanIntValue,
    normalizeValueFromModel,
  };
}
