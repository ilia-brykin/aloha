import {
  toRef,
} from "vue";

import {
  cloneDeep,
  isNil,
} from "lodash-es";

export default function ModelAPI(props) {
  const modelValue = toRef(props, "modelValue");
  const change = toRef(props, "change");
  const id = toRef(props, "id");

  const checkUndefinedValue = ({ value }) => {
    return isNil(value) ? undefined : value;
  };

  const onChange = ({ currentModel, id: idChild, model }) => {
    const VALUE_LOCAL = checkUndefinedValue({ value: cloneDeep(currentModel || model) });
    if (VALUE_LOCAL === modelValue.value) {
      return;
    }
    change.value({
      currentModel: VALUE_LOCAL,
      model: VALUE_LOCAL,
      id: `${ id.value }.${ idChild }`,
      $event: null,
    });
  };

  return {
    onChange,
    checkUndefinedValue,
  };
}
