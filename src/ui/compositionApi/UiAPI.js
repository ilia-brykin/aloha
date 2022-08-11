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

  const options = toRef(props, "options");

  const disabled = toRef(props, "disabled");
  const disabledLocal = computed(() => {
    return !!(disabled.value || options.value.disabled);
  });

  const modelValue = toRef(props, "modelValue");
  const isModel = computed(() => {
    return !!(modelValue.value || modelValue.value === 0);
  });

  const required = toRef(props, "required");
  const requiredLocal = computed(() => {
    return "required" in options.value ?
      options.value.required :
      required.value;
  });
  const ariaRequired = computed(() => {
    return `${ requiredLocal.value }`;
  });

  const modelUndefined = toRef(props, "modelUndefined");
  const modelUndefinedLocal = computed(() => {
    return "modelUndefined" in options.value ?
      options.value.modelUndefined :
      modelUndefined.value;
  });

  const id = toRef(props, "id");
  const idLocal = computed(() => {
    return "id" in options.value ?
      options.value.id :
      id.value;
  });

  const label = toRef(props, "label");
  const labelLocal = computed(() => {
    return "label" in options.value ?
      options.value.label :
      label.value;
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

  const clearModel = () => {
    if (disabledLocal.value) {
      return;
    }
    changeModel({
      model: modelUndefinedLocal.value,
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
    ariaRequired,
    changeModel,
    clearModel,
    disabledLocal,
    idLocal,
    isError,
    isFocus,
    isModel,
    labelLocal,
    onBlur,
    onFocus,
    requiredLocal,
  };
}
