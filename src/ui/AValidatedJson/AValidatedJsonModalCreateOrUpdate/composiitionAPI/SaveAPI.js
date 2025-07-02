import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../../../const/AKeys";
import {
  cloneDeep,
  forEach,
  get,
  some,
} from "lodash-es";

export default function SaveAPI(props, {
  isAnyRequiredElementEmpty = computed(() => false),
  model = ref({}),
}) {
  const close = toRef(props, "close");
  const currentIndex = toRef(props, "currentIndex");
  const isCreate = toRef(props, "isCreate");
  const keyId = toRef(props, "keyId");
  const mode = toRef(props, "mode");
  const modelAll = toRef(props, "modelAll");
  const uniqueChildrenIds = toRef(props, "uniqueChildrenIds");

  const errorsLocal = ref(undefined);

  const uniqueChildrenIdsLocal = computed(() => {
    if (mode.value === "json") {
      if (keyId.value) {
        if (!uniqueChildrenIds.value.includes(keyId.value)) {
          return [
            ...uniqueChildrenIds.value,
            keyId.value,
          ];
        }
      }
      return [
        ...uniqueChildrenIds.value,
        AKeyId,
      ];
    }

    return uniqueChildrenIds.value;
  });

  const deleteErrorsLocal = () => {
    errorsLocal.value = undefined;
  };

  const modelAllFiltered = computed(() => {
    if (isCreate.value) {
      return modelAll.value;
    }

    const MODEL = cloneDeep(modelAll.value);
    MODEL.splice(currentIndex.value, 1);

    return MODEL;
  });

  const isModelForIdUnique = id => {
    const CURRENT_MODEL = get(model.value, id);

    return some(modelAllFiltered.value, modelElement => {
      const MODEL = get(modelElement, id);
      return MODEL === CURRENT_MODEL;
    });
  };

  const validate = () => {
    let isValid = true;
    const ERRORS = {};
    if (!uniqueChildrenIdsLocal.value.length) {
      return {
        isValid,
      };
    }

    forEach(uniqueChildrenIdsLocal.value, id => {
      if (isModelForIdUnique(id)) {
        isValid = false;
        ERRORS[id] = ["_A_VALIDATED_JSON_MODAL_CREATE_ERROR_ID_UNIQUE_"];
      }
    });

    return {
      errors: ERRORS,
      isValid,
    };
  };

  const save = () => {
    if (isAnyRequiredElementEmpty.value) {
      return;
    }

    deleteErrorsLocal();

    const {
      isValid,
      errors,
    } = validate();

    if (!isValid) {
      errorsLocal.value = errors;
      return;
    }

    close.value({ model: model.value });
  };

  return {
    errorsLocal,
    save,
  };
}
