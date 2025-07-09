import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

import {
  setFocusToElement,
} from "../../../utils/utilsDOM";
import {
  cloneDeep,
  isArray,
} from "lodash-es";

export default function ListModeAPI(props, {
  htmlIdLocal = computed(() => undefined),
}) {
  const change = toRef(props, "change");
  const id = toRef(props, "id");
  const modelValue = toRef(props, "modelValue");

  const isModalCreateListModeVisible = ref(false);

  const modelListMode = computed(() => {
    return isArray(modelValue.value) ?
      modelValue.value :
      [];
  });

  const openModalCreateListMode = () => {
    isModalCreateListModeVisible.value = true;
  };

  const closeModalCreateListMode = ({ model } = {}) => {
    if (model) {
      const MODEL_VALUE = cloneDeep(modelListMode.value);
      MODEL_VALUE.push(model);
      change.value({
        currentModel: MODEL_VALUE,
        model: MODEL_VALUE,
        id: id.value,
      });
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
    change.value({
      currentModel: MODEL,
      model: MODEL,
      id: id.value,
    });
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
    change.value({
      currentModel: MODEL,
      model: MODEL,
      id: id.value,
    });
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

  const updateListMode = ({ index, model }) => {
    const MODEL = cloneDeep(modelListMode.value);
    MODEL.splice(index, 1, model);
    change.value({
      currentModel: MODEL,
      model: MODEL,
      id: id.value,
    });
  };

  return {
    closeModalCreateListMode,
    deleteListMode,
    isModalCreateListModeVisible,
    modelListMode,
    moveListMode,
    openModalCreateListMode,
    updateListMode,
  };
}
