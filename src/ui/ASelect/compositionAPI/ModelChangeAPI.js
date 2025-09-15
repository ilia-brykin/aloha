import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";
import {
  AKeyId,
} from "../../../const/AKeys";
import {
  cloneDeep,
  forEach,
  get,
  isUndefined,
  take,
} from "lodash-es";

export default function ModelChangeAPI(props, {
  changeModel = () => {},
  dataAll = computed(() => []),
  dataGrouped = computed(() => ({})),
  dataKeyByKeyIdLocal = computed(() => ({})),
  disabledLocal = computed(() => false),
  isModeOnePerGroup = computed(() => false),
  isMultiselect = computed(() => false),
  togglePopover = () => {},
}) {
  const countMultiselect = toRef(props, "countMultiselect");
  const deselectable = toRef(props, "deselectable");
  const disabled = toRef(props, "disabled");
  const exclusiveOptionValue = toRef(props, "exclusiveOptionValue");
  const isCloseByClick = toRef(props, "isCloseByClick");
  const isExclusiveOptionEnabled = toRef(props, "isExclusiveOptionEnabled");
  const keyGroup = toRef(props, "keyGroup");
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

  const changeModelInGroup = ({ modelValueLocal, currentValue, dataItem }) => {
    const GROUP_KEY = get(dataItem, keyGroup.value);
    const CURRENT_GROUP = dataGrouped.value?.[GROUP_KEY] || [];
    forEach(CURRENT_GROUP, item => {
      const ID = item[AKeyId];
      const INDEX = modelValueLocal.indexOf(ID);
      if (INDEX !== -1) {
        modelValueLocal.splice(INDEX, 1);
      }
    });

    modelValueLocal.push(currentValue);

    return modelValueLocal;
  };

  const onChangeModelValue = ({ currentValue, $event, isSelected, dataItem }) => {
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
      } else if (isModeOnePerGroup.value) {
        modelValueLocal = changeModelInGroup({
          modelValueLocal,
          currentValue,
          dataItem,
        });
        if (maxCountMultiselect.value &&
          modelValueLocal.length > maxCountMultiselect.value) {
          return;
        }
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
