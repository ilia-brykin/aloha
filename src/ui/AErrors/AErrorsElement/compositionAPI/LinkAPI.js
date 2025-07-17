import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../../const/AKeysCode";
import {
  AFormPluginOptions,
} from "../../../../plugins/AFormPlugin";
import {
  AKeyId,
  AKeyLink,
} from "../../../../const/AKeys";
import {
  setFocusToElement,
} from "../../../../utils/utilsDOM";
import {
  get,
  isFunction,
  isNil,
  isPlainObject,
  size,
} from "lodash-es";

export default function LinkAPI(props) {
  const errorKey = toRef(props, "errorKey");
  const errorLabels = toRef(props, "errorLabels");
  const goToError = toRef(props, "goToError");
  const id = toRef(props, "id");
  const isErrorLink = toRef(props, "isErrorLink");

  const idLocal = computed(() => {
    return get(errorLabels.value, AKeyId) || id.value;
  });

  const isErrorLinkLocal = computed(() => {
    return isPlainObject(errorLabels.value) &&
      errorLabels.value[AKeyLink] &&
      isErrorLink.value;
  });

  const goToErrorLocal = () => {
    if (isFunction(goToError.value)) {
      return goToError.value({
        id: idLocal.value,
        key: errorKey.value,
      });
    }
    let idStr = idLocal.value;
    if (!isNil(errorKey.value)) {
      idStr = `${ idStr }_${ errorKey.value }`;
    }
    if (size(idStr) > 0) {
      if (isFunction(AFormPluginOptions.goToErrorCallback)) {
        AFormPluginOptions.goToErrorCallback({
          idStr,
        });

        return;
      }

      const ELEMENT = document.getElementById(idStr);
      if (ELEMENT) {
        setFocusToElement({ element: ELEMENT });
      }
    }
  };

  const onKeydown = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      goToErrorLocal();
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    goToErrorLocal,
    isErrorLinkLocal,
    onKeydown,
  };
}
