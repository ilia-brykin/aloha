import {
  sanitizeLocal,
} from "../utils/utils";

import {
  isNil,
} from "lodash-es";

export default {
  beforeMount(el, binding) {
    el.innerHTML = isNil(binding.value) || binding.value === "" ? "" : sanitizeLocal(binding.value);
  },
  updated(el, binding) {
    el.innerHTML = isNil(binding.value) || binding.value === "" ? "" : sanitizeLocal(binding.value);
  },
};
