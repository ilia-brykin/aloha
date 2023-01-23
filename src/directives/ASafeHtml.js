import {
  sanitizeLocal,
} from "../utils/utils";

export default {
  beforeMount(el, binding) {
    el.innerHTML = sanitizeLocal(binding.value);
  },
  updated(el, binding) {
    el.innerHTML = sanitizeLocal(binding.value);
  },
};
