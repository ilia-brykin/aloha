import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";

export default function TrueFalseValueAPI(props, {
  changeModel = () => {},
}) {
  const modelValue = toRef(props, "modelValue");
  const trueValue = toRef(props, "trueValue");
  const falseValue = toRef(props, "falseValue");
  const disabled = toRef(props, "disabled");

  const isChecked = computed(() => {
    return modelValue.value === trueValue.value;
  });

  const onClick = $event => {
    if (disabled.value) {
      return;
    }
    setTimeout(() => {
      const MODEL = isChecked.value ? falseValue.value : trueValue.value;
      changeModel({
        model: MODEL,
        $event,
      });
    });
    $event.stopPropagation();
    $event.preventDefault();
  };

  const onKeydown = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      onClick($event);
    }
  };

  return {
    isChecked,
    onClick,
    onKeydown,
  };
}
