import {
  toRef,
} from "vue";

import AKeysCode from "../../const/AKeysCode";
import {
  isArray,
} from "lodash-es";

export default function KeydownAPI(props, { attrs }) {
  const preventKeyboardRepeat = toRef(props, "preventKeyboardRepeat");

  const onKeydown = $event => {
    if (preventKeyboardRepeat.value &&
      $event.repeat &&
      ($event.keyCode === AKeysCode.enter || $event.keyCode === AKeysCode.space)) {
      $event.preventDefault();
      $event.stopPropagation();
      return;
    }

    const onKeydownAttr = attrs.onKeydown;

    if (isArray(onKeydownAttr)) {
      onKeydownAttr.forEach(callback => callback?.($event));
      return;
    }

    onKeydownAttr?.($event);
  };

  return {
    onKeydown,
  };
}
