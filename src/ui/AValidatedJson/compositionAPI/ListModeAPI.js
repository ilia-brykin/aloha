import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

import {
  isArray,
} from "lodash";
import {
  setFocusToElement,
} from "../../../utils/utilsDOM";
import {
  cloneDeep,
} from "lodash-es";

export default function ListModeAPI(props, {
  htmlIdLocal = computed(() => undefined),
  updateModelValue = () => {},
}) {
  const modelValue = toRef(props, "modelValue");

  const isModalCreateListModeVisible = ref(false);

  const modelListMode = computed(() => {
    return isArray(modelValue.value) ?
      modelValue.value :
      [];
  });

  const listModeBtnIdAdd = computed(() => {
    return `${ htmlIdLocal.value }_btn_add`;
  });

  const openModalCreateListMode = () => {
    isModalCreateListModeVisible.value = true;
  };

  const closeModalCreateListMode = ({ model } = {}) => {
    if (model) {
      const MODEL_VALUE = cloneDeep(modelListMode.value);
      MODEL_VALUE.push(model);
      updateModelValue(MODEL_VALUE);
    }
    isModalCreateListModeVisible.value = false;
  };

  const moveUpListMode = ({ index }) => {
    if (index === 0) {
      return;
    }

    const MODEL = cloneDeep(modelListMode.value);
    const ITEM_MODEL = MODEL[index];
    MODEL.splice(index, 1);
    MODEL.splice(index - 1, 0, ITEM_MODEL);
    updateModelValue(MODEL);
    nextTick().then(
      () => {
        const ID = `#${ htmlIdLocal.value }_btn_move_up_${ index - 1 }`;
        setFocusToElement({
          selector: ID,
        });
      },
    );
  };

  const moveDownListMode = ({ index }) => {
    if (index >= modelListMode.value.length - 1) {
      return;
    }
    const MODEL = cloneDeep(modelListMode.value);
    const ITEM_MODEL = MODEL[index];
    MODEL.splice(index, 1);
    MODEL.splice(index + 1, 0, ITEM_MODEL);
    updateModelValue(MODEL);
    nextTick().then(
      () => {
        const ID = `#${ htmlIdLocal.value }_btn_move_down_${ index + 1 }`;
        setFocusToElement({
          selector: ID,
        });
      },
    );
  };

  const moveListMode = ({ action, index }) => {
    if (action === "up") {
      moveUpListMode({ index });
    } else {
      moveDownListMode({ index });
    }
  };

  const deleteListMode = ({ index }) => {
    const MODEL = cloneDeep(modelListMode.value);
    MODEL.splice(index, 1);
    updateModelValue(MODEL);
    nextTick().then(
      () => {
        setFocusToElement({
          selector: `#${ htmlIdLocal.value }`,
        });
      },
    );
  };

  const updateListMode = ({ index, model }) => {
    const MODEL = cloneDeep(modelListMode.value);
    MODEL.splice(index, 1, model);
    updateModelValue(MODEL);
  };

  return {
    closeModalCreateListMode,
    deleteListMode,
    isModalCreateListModeVisible,
    listModeBtnIdAdd,
    modelListMode,
    moveListMode,
    openModalCreateListMode,
    updateListMode,
  };
}
