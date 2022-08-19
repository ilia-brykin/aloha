import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isObject,
  isString,
  size,
} from "lodash-es";

export default function UiAPI(props, { emit }) {
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

  const id = toRef(props, "id");
  const idLocal = computed(() => {
    return id.value;
  });

  const errors = toRef(props, "errors");
  const isError = computed(() => {
    if (!errors.value) {
      return false;
    }
    if (isString(errors.value)) {
      return true;
    }
    if (isObject(errors.value)) {
      return !!size(errors.value);
    }
    return false;
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
    changeModel,
    clearModel,
    idLocal,
    isError,
    isFocus,
    isModel,
    onBlur,
    onFocus,
  };
}
