import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../../const/AKeys";
import {
  setFocusToElement,
} from "../../../utils/utilsDOM";
import {
  cloneDeep,
  forEach,
  isEmpty,
  isPlainObject,
  sortBy,
} from "lodash-es";

export default function JsonModeAPI(props, {
  htmlIdLocal = computed(() => undefined),
  updateModelValue = () => {},
}) {
  const keyId = toRef(props, "keyId");
  const modelValue = toRef(props, "modelValue");
  const sortId = toRef(props, "sortId");

  const isModalCreateJsonModeVisible = ref(false);

  const modelJsonMode = computed(() => {
    return isPlainObject(modelValue.value) ?
      modelValue.value :
      {};
  });

  const modelJsonModeSorted = computed(() => {
    const LIST = [];
    forEach(cloneDeep(modelJsonMode.value), (item, key) => {
      item[AKeyId] = key;
      LIST.push(item);
    });

    if (sortId.value) {
      return sortBy(LIST, [sortId.value]);
    }

    return LIST;
  });

  const isModelJsonModeEmpty = computed(() => {
    return isEmpty(modelJsonMode.value);
  });

  const openModalCreateJsonMode = () => {
    isModalCreateJsonModeVisible.value = true;
  };

  const closeModalCreateJsonMode = ({ model } = {}) => {
    if (model) {
      const MODEL_VALUE = cloneDeep(modelJsonMode.value);
      const CURRENT_KEY = model[keyId.value || AKeyId];
      MODEL_VALUE[CURRENT_KEY] = model;
      updateModelValue(MODEL_VALUE);
    }
    isModalCreateJsonModeVisible.value = false;
  };

  const deleteJsonMode = ({ key }) => {
    const MODEL = cloneDeep(modelJsonMode.value);
    delete MODEL[key];
    updateModelValue(MODEL);
    nextTick().then(
      () => {
        setFocusToElement({
          selector: `#${ htmlIdLocal.value }`,
        });
      },
    );
  };

  const updateJsonMode = ({ model, key, oldKey }) => {
    const MODEL = cloneDeep(modelJsonMode.value);
    delete MODEL[oldKey];
    MODEL[key] = model;
    updateModelValue(MODEL);
  };

  return {
    closeModalCreateJsonMode,
    deleteJsonMode,
    isModelJsonModeEmpty,
    isModalCreateJsonModeVisible,
    modelJsonMode,
    modelJsonModeSorted,
    openModalCreateJsonMode,
    updateJsonMode,
  };
}
