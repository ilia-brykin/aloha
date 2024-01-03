import {
  ref,
} from "vue";

import {
  forEach, isFunction,
} from "lodash-es";

const isModalHidden = ref(true);
const confirmOptions = ref({});
// bodyHtml
// close
// closeButtonClass
// closeButtonText
// disabled
// headerTag
// headerText
// save
// saveButtonClass
// saveButtonText
// selectorClose
// size

export default function AConfirmAPI() {
  const changeConfirmOptions = (args = {}) => {
    forEach(args, (argumentValue, argumentKey) => {
      confirmOptions.value[argumentKey] = argumentValue;
    });
  };

  const openConfirm = (args = {}) => {
    changeConfirmOptions(args);

    isModalHidden.value = false;
  };

  const closeConfirm = isCloseButton => {
    if (isCloseButton && isFunction(confirmOptions.value.close)) {
      confirmOptions.value.close();
    }
    isModalHidden.value = true;
    setTimeout(() => {
      confirmOptions.value = {};
    });
  };

  return {
    changeConfirmOptions,
    closeConfirm,
    confirmOptions,
    isModalHidden,
    openConfirm,
  };
}
