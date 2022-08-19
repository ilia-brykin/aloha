import {
  computed,
  ref,
  toRef,
} from "vue";

import UiErrorsAPI from "./UiErrorsAPI";

export default function UiAPI(props, { emit }) {
  const id = toRef(props, "id");
  const idLocal = computed(() => {
    return id.value;
  });

  const {
    errorsId,
    isErrors,
  } = UiErrorsAPI(props, {
    idLocal,
  });

  const changeModel = ({ model }) => {
    emit("update:modelValue", model);
    emit("change", {
      model,
      props,
    });
  };

  const modelValue = toRef(props, "modelValue");
  const isModel = computed(() => {
    return !!(modelValue.value || modelValue.value === 0);
  });

  const disabled = toRef(props, "disabled");
  const modelUndefined = toRef(props, "modelUndefined");
  const clearModel = () => {
    if (disabled.value) {
      return;
    }
    changeModel({
      model: modelUndefined.value,
    });
  };

  const helpTextId = computed(() => {
    return `${ idLocal.value }_help_text`;
  });

  const helpText = toRef(props, "helpText");
  const ariaDescribedbyLocal = computed(() => {
    let ariaDescribedby = "";
    if (helpText.value) {
      ariaDescribedby += helpTextId.value;
    }
    if (isErrors.value) {
      if (ariaDescribedby) {
        ariaDescribedby += " ";
      }
      ariaDescribedby += helpTextId.value;
    }
    return ariaDescribedby;
  });

  const isFocus = ref(false);
  const onFocus = $event => {
    isFocus.value = true;
    emit("focus", {
      event: $event,
      props,
    });
  };
  const onBlur = $event => {
    isFocus.value = false;
    emit("blur", {
      event: $event,
      props,
    });
  };

  return {
    ariaDescribedbyLocal,
    changeModel,
    clearModel,
    errorsId,
    helpTextId,
    idLocal,
    isErrors,
    isFocus,
    isModel,
    onBlur,
    onFocus,
  };
}
