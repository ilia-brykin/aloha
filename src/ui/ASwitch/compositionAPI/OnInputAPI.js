import {
  computed,
  toRef,
} from "vue";

export default function OnInputAPI(props, {
  changeModel = () => {},
  isModelFalse = computed(() => false),
  isModelTrue = computed(() => false),
}) {
  const defaultValue = toRef(props, "defaultValue");
  const disabled = toRef(props, "disabled");
  const falseValue = toRef(props, "falseValue");
  const isThreeState = toRef(props, "isThreeState");
  const trueValue = toRef(props, "trueValue");

  const onInput = $event => {
    if (disabled.value) {
      return;
    }
    let model;
    if (isModelTrue.value) {
      model = falseValue.value;
    } else if (isThreeState.value && isModelFalse.value) {
      model = defaultValue.value;
    } else {
      model = trueValue.value;
    }

    changeModel({
      model,
      $event,
    });
  };

  // Space is the native click of the checkbox (onInput), Enter is extra (WAI-ARIA switch)
  const onKeydown = $event => {
    if ($event.key === "Enter") {
      onInput($event);
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    onInput,
    onKeydown,
  };
}
