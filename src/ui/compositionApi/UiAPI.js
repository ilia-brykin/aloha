import {
  computed,
  toRef,
} from "vue";

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

  const clearModel = () => {
    if (disabledLocal.value) {
      return;
    }
    changeModel({
      model: modelUndefinedLocal.value,
    });
  };

  return {
    ariaRequired,
    changeModel,
    clearModel,
    disabledLocal,
    isModel,
    requiredLocal,
  };
}
