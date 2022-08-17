import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function ASelectModelChangeAPI(props, {
  isMultiselect = computed(() => false),
  changeModel = () => {},
  togglePopover = () => {},
  isCloseByClickLocal = computed(() => undefined),
}) {
  const options = toRef(props, "options");
  const isDeselect = toRef(props, "isDeselect");
  const isDeselectLocal = computed(() => {
    return "isDeselect" in options.value ?
      options.value.isDeselect :
      isDeselect.value;
  });

  const modelValue = toRef(props, "modelValue");

  const onChangeModelValue = ({ currentValue, $event, isSelected }) => {
    let modelValueLocal;
    if (isMultiselect.value) {
      modelValueLocal = cloneDeep(modelValue.value) || [];
      if (isSelected) {
        const INDEX = modelValueLocal.indexOf(currentValue);
        modelValueLocal.splice(INDEX, 1);
      } else {
        modelValueLocal.push(currentValue);
      }
    } else {
      if (isSelected) {
        if (isDeselectLocal.value) {
          modelValueLocal = undefined;
        } else {
          return;
        }
      } else {
        modelValueLocal = currentValue;
      }
    }
    changeModel({
      model: modelValueLocal,
      $event,
    });

    if (isCloseByClickLocal.value) {
      togglePopover();
    }
  };

  return {
    onChangeModelValue,
  };
}
