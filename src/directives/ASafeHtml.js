import {
  sanitizeLocal,
} from "../utils/utils";
import {
  isNil,
} from "lodash-es";

export default {
  beforeMount(el, binding) {
    el.innerHTML = sanitizeLocal(isNil(binding.value) ? "" : binding.value);
  },
  updated(el, binding) {
    el.innerHTML = sanitizeLocal(isNil(binding.value) ? "" : binding.value);
  },
};
