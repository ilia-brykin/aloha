import store from "../../store";
import {
  toString,
} from "lodash-es";

export default (value, { statusNotHtml } = {}) => {
  const FORMAT = store.getters["syConfigs/GET_VALUE"]("antragsnummerformat");
  return setStrInFormat({ format: FORMAT, value, statusNotHtml });
};

export function setStrInFormat({ format, value, statusNotHtml }) {
  const STR = toString(value);
  let SPASED_ONLY_IF_MATCHED = /^\d+$/;
  if (!format.antragsnr_numerisch && format.use_foe_prefix) {
    SPASED_ONLY_IF_MATCHED = /\d+$/;
  }
  const matches = STR.match(SPASED_ONLY_IF_MATCHED);
  if (!value || !matches) {
    return value;
  }
  let lastMatch = matches.pop();
  const index = STR.indexOf(lastMatch);
  const leftover = STR.replace(lastMatch, "");
  if (format.pad_with_zeros) {
    const numberQuantity = format.format.match(/#/g).length;
    if (numberQuantity > lastMatch.length) {
      const paddedZeros = new Array(numberQuantity - lastMatch.length + 1).join("0");
      lastMatch = format.richtung === "rnl" ? paddedZeros + lastMatch : lastMatch + paddedZeros;
    }
  }
  let strArr = lastMatch.split("");
  let maskArr = format.format.split("");
  if (format.richtung === "rnl") {
    strArr = strArr.reverse();
    maskArr = maskArr.reverse();
  }

  const RESULT = [];
  let strIndex = 0;
  for (let i = 0; i < maskArr.length; i++) {
    if (maskArr[i] !== "#") {
      if (statusNotHtml) {
        RESULT.push(maskArr[i]);
      } else {
        RESULT.push(`<span class="inline-character" style="--inline-character-var: '${ maskArr[i] }';" ie-style="--inline-character-var: '${ maskArr[i] }';"></span>`);
      }
      continue;
    }
    RESULT.push(strArr[strIndex]);
    strIndex++;
    if (strIndex >= strArr.length) {
      break;
    }
  }
  const FORMATTED_NUMBER = format.richtung === "rnl" ? RESULT.reverse().join("") : RESULT.join("");
  return [leftover.slice(0, index), FORMATTED_NUMBER, leftover.slice(index)].join("");
}
