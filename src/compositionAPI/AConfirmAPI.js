import {
  ref,
} from "vue";

import {
  forEach,
  isFunction,
} from "lodash-es";

export const isModalHidden = ref(true);
export const confirmOptions = ref({});

/*
 * bodyHtml
 * close
 * closeButtonClass
 * closeButtonText
 * disabled
 * headerTag
 * headerText
 * save
 * saveButtonClass
 * saveButtonText
 * selectorClose
 * size
 */

export default function AConfirmAPI() {
  return {
    changeConfirmOptions,
    closeConfirm,
    confirmOptions,
    isModalHidden,
    openConfirm,
  };
}

export function changeConfirmOptions(args = {}) {
  forEach(args, (argumentValue, argumentKey) => {
    confirmOptions.value[argumentKey] = argumentValue;
  });
}

export function openConfirm(args = {}) {
  changeConfirmOptions(args);

  isModalHidden.value = false;
}

export function closeConfirm(isCloseButton) {
  if (isCloseButton && isFunction(confirmOptions.value.close)) {
    confirmOptions.value.close();
  }
  isModalHidden.value = true;
  setTimeout(() => {
    confirmOptions.value = {};
  });
}
