import {
  isFunction,
} from "lodash-es";

export default {
  // called before bound element's attributes
  // or event listeners are applied
  created(el, binding) {
    if (isFunction(binding.value?.created)) {
      binding.value.created();
    }
  },
  // called right before the element is inserted into the DOM.
  beforeMount(el, binding) {
    if (isFunction(binding.value?.beforeMount)) {
      binding.value.beforeMount();
    }
  },
  // called when the bound element's parent component
  // and all its children are mounted.
  mounted(el, binding) {
    if (isFunction(binding.value?.mounted)) {
      binding.value.mounted();
    }
  },
  // called before the parent component is unmounted
  beforeUnmount(el, binding) {
    if (isFunction(binding.value?.beforeUnmount)) {
      binding.value.beforeUnmount();
    }
  },
  // called when the parent component is unmounted
  unmounted(el, binding) {
    if (isFunction(binding.value?.unmounted)) {
      binding.value.unmounted();
    }
  }
};
