import {
  computed,
  toRef,
} from "vue";

import AKeyId from "../../../const/AKeyId";
import AKeysCode from "../../../const/AKeysCode";
import {
  cloneDeep,
  get,
  isUndefined,
  take,
} from "lodash-es";

export default function ModelChangeAPI(props, {
  changeModel = () => {},
  dataAll = computed(() => []),
  dataKeyByKeyIdLocal = computed(() => ({})),
  disabledLocal = computed(() => false),
  isMultiselect = computed(() => false),
  togglePopover = () => {},
}) {
  const countMultiselect = toRef(props, "countMultiselect");
  const disabled = toRef(props, "disabled");
  const exclusiveOptionValue = toRef(props, "exclusiveOptionValue");
  const isCloseByClick = toRef(props, "isCloseByClick");
  const isExclusiveOptionEnabled = toRef(props, "isExclusiveOptionEnabled");
  const deselectable = toRef(props, "deselectable");
  const maxCountMultiselect = toRef(props, "maxCountMultiselect");
  const modelValue = toRef(props, "modelValue");

  const isMaxSelected = computed(() => {
    if (!isMultiselect.value || !maxCountMultiselect.value) {
      return false;
    }
    const MODEL_LENGTH = get(modelValue.value, "length");
    return MODEL_LENGTH >= maxCountMultiselect.value;
  });

  const isCloseByClickLocal = computed(() => {
    if (!isUndefined(isCloseByClick.value)) {
      return isCloseByClick.value;
    }
    return !isMultiselect.value;
  });

  const onChangeModelValue = ({ currentValue, $event, isSelected }) => {
    let modelValueLocal;
    if (isMultiselect.value) {
      modelValueLocal = cloneDeep(modelValue.value) || [];
      if (isSelected) {
        const INDEX = modelValueLocal.indexOf(currentValue);
        modelValueLocal.splice(INDEX, 1);
        if (isExclusiveOptionEnabled.value && currentValue === exclusiveOptionValue.value) {
          modelValueLocal = [];
        }
      } else if (isExclusiveOptionEnabled.value && currentValue === exclusiveOptionValue.value) {
        modelValueLocal = [currentValue];
      } else {
        if (isMaxSelected.value) {
          return;
        }
        modelValueLocal.push(currentValue);
      }
    } else if (isSelected) {
      if (deselectable.value) {
        modelValueLocal = undefined;
      } else {
        return;
      }
    } else {
      modelValueLocal = currentValue;
    }
    changeModel({
      model: modelValueLocal,
      $event,
      currentModel: currentValue,
      item: dataKeyByKeyIdLocal.value[currentValue],
    });

    if (isCloseByClickLocal.value) {
      togglePopover();
    }
  };

  const deleteExceededItems = $event => {
    const modelValueLocal = take(modelValue.value, countMultiselect.value);
    changeModel({
      model: modelValueLocal,
      $event,
    });
  };

  const onSelectAll = () => {
    if (disabledLocal.value) {
      return;
    }

    const MODEL = dataAll.value.map(item => item[AKeyId]);
    changeModel({
      model: MODEL,
    });
  };

  const onKeydownSelectAll = $event => {
    const KEY_CODE = $event.keyCode;
    if (KEY_CODE === AKeysCode.enter ||
      KEY_CODE === AKeysCode.space) {
      onSelectAll();
      $event.preventDefault();
    }
  };

  const onDeselectAll = () => {
    if (disabled.value) {
      return;
    }

    changeModel({
      model: [],
    });
  };

  const onKeydownDeselectAll = $event => {
    const KEY_CODE = $event.keyCode;
    if (KEY_CODE === AKeysCode.enter ||
      KEY_CODE === AKeysCode.space) {
      onDeselectAll();
      $event.preventDefault();
    }
  };

  return {
    deleteExceededItems,
    onChangeModelValue,
    onDeselectAll,
    onKeydownDeselectAll,
    onKeydownSelectAll,
    onSelectAll,
  };
}
