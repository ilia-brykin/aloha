import {
  ref,
} from "vue";

import {
  isBrowser,
} from "../utils/isBrowser";
import {
  isNumber,
} from "lodash-es";

export const remPx = ref(getRemPx());
export const defaultRemPx = ref(16);

export default function ARemPxAPI() {
  return {
    remPx,
    scalePxWithRem,
  };
}

function getRemPx() {
  if (!isBrowser()) {
    return defaultRemPx.value;
  }

  const testEl = document.createElement("div");
  testEl.style.height = "1rem";
  testEl.style.position = "absolute";
  testEl.style.visibility = "hidden";
  document.body.appendChild(testEl);
  const value = testEl.offsetHeight;
  testEl.remove();

  return value;
}

export function scalePxWithRem(value, {
  baseRemPx = defaultRemPx.value,
} = {}) {
  if (!isNumber(value)) {
    return value;
  }

  const scale = remPx.value / baseRemPx;
  return value * scale;
}
