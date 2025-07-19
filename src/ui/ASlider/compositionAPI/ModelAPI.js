import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

export default function ModelAPI(props, {
  changeModel,
}) {
  const modelValue = toRef(props, "modelValue");
  const modelUndefined = toRef(props, "modelUndefined");
  const range = toRef(props, "range");
  const min = toRef(props, "min");
  const max = toRef(props, "max");

  // Initialize model value
  const modelValueLocal = computed({
    get() {
      if (modelValue.value === undefined || modelValue.value === null) {
        return modelUndefined.value;
      }
      return modelValue.value;
    },
    set(value) {
      changeModel(value);
    },
  });

  // Handle input event (during dragging)
  const onInput = value => {
    changeModel(value);
  };

  // Handle change event (after dragging ends)
  const onChange = value => {
    if (props.change && typeof props.change === "function") {
      props.change(value);
    }
  };

  return {
    modelValueLocal,
    onInput,
    onChange,
  };
}