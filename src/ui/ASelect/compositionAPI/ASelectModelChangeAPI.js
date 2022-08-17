import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";
import AKeyId from "../../const/AKeyId";
import {
  cloneDeep,
} from "lodash-es";

export default function ASelectModelChangeAPI(props, {
  isMultiselect = computed(() => false),
  changeModel = () => {},
  togglePopover = () => {},
  isCloseByClickLocal = computed(() => undefined),
  dataLocal = computed(() => []),
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
