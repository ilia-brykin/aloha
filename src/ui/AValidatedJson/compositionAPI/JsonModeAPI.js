import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

import {
  aSortBy,
} from "../../../utils/utils";

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
} from "lodash-es";

export default function JsonModeAPI(props, { emit }, {
  htmlIdLocal = computed(() => undefined),
}) {
  const change = toRef(props, "change");
  const id = toRef(props, "id");
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
      return aSortBy(LIST, [sortId.value]);
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
      emit("update:modelValue", cloneDeep(MODEL_VALUE));
      change.value({
        currentModel: MODEL_VALUE,
        model: MODEL_VALUE,
        id: id.value,
      });
    }
    isModalCreateJsonModeVisible.value = false;
  };

  const deleteJsonMode = ({ key }) => {
    const MODEL = cloneDeep(modelJsonMode.value);
    delete MODEL[key];
    emit("update:modelValue", cloneDeep(MODEL));
    change.value({
      currentModel: MODEL,
      model: MODEL,
      id: id.value,
    });
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
    emit("update:modelValue", cloneDeep(MODEL));
    change.value({
      currentModel: MODEL,
      model: MODEL,
      id: id.value,
    });
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
