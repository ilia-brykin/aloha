import {
  toRef,
} from "vue";

import {
  cloneDeep,
  isNil,
} from "lodash-es";

export default function ModelAPI(props, { emit }) {
  const modelValue = toRef(props, "modelValue");
  const options = toRef(props, "options");
  const change = toRef(props, "change");

  const checkUndefinedValue = ({ value }) => {
    return isNil(value) ? undefined : value;
  };

  const onChange = ({ currentModel }) => {
    const VALUE_LOCAL = checkUndefinedValue({ value: cloneDeep(currentModel) });
    if (VALUE_LOCAL === modelValue.value) {
      return;
    }
    emit("update:modelValue", VALUE_LOCAL);
    change.value({
      currentModel: VALUE_LOCAL,
      model: VALUE_LOCAL,
      id: options.value.id,
      $event: null,
      param: options.value.param,
      options: options.value,
    });
  };

  return {
    onChange,
    checkUndefinedValue,
  };
}
