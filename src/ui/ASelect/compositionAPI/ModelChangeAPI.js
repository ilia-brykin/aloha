import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";
import AKeyId from "../../const/AKeyId";
import {
  cloneDeep,
  get,
  isUndefined,
} from "lodash-es";

export default function ModelChangeAPI(props, {
  isMultiselect = computed(() => false),
  changeModel = () => {},
  togglePopover = () => {},
  dataLocal = computed(() => []),
  dataKeyByKeyIdLocal = computed(() => ({})),
}) {
  const isCloseByClick = toRef(props, "isCloseByClick");
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
      } else {
        if (isMaxSelected.value) {
          return;
        }
        modelValueLocal.push(currentValue);
      }
    } else {
      if (isSelected) {
        if (deselectable.value) {
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
      currentModel: currentValue,
      item: dataKeyByKeyIdLocal.value[currentValue],
    });

    if (isCloseByClickLocal.value) {
      togglePopover();
    }
  };

  const onSelectAll = () => {
    const MODEL = dataLocal.value.map(item => item[AKeyId]);
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
    onChangeModelValue,
    onDeselectAll,
    onKeydownDeselectAll,
    onKeydownSelectAll,
    onSelectAll,
  };
}
