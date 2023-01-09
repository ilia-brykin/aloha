import DOMPurify from "dompurify";

import {
  isNumber,
  toString,
} from "lodash-es";

export default {
  beforeMount(el, binding) {
    el.innerHTML = DOMPurify.sanitize(toCorrectFormat(binding.value));
  },
  updated(el, binding) {
    el.innerHTML = DOMPurify.sanitize(toCorrectFormat(binding.value));
  },
};

function toCorrectFormat(value) {
  if (isNumber(value)) {
    return toString(value);
  }
  return value;
}
