import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";

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

  const onKeydown = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
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
