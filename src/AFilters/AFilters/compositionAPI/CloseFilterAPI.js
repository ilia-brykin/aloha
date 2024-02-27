import {
  computed,
  ref,
  toRef,
} from "vue";

import AUiTypesModelArray from "../../../ui/const/AUiTypesModelArray";
import AUiTypesModelObject from "../../../ui/const/AUiTypesModelObject";
import {
  cloneDeep,
  filter as _filter,
  forEach,
  isPlainObject,
} from "lodash-es";

export default function CloseFilterAPI(props, { emit }, {
  filtersHorizontalRef = ref(undefined),
  filtersVisibleAll = computed(() => []),
  onUpdateModelFilters = () => {},
}) {
  const appliedModel = toRef(props, "appliedModel");
  const unappliedModel = toRef(props, "unappliedModel");

  const updateFilterSavedModel = () => {
    filtersHorizontalRef.value?.initModelFiltersSaved();
  };

  const closeCurrentFilter = ({ filter, keyId, modelArray, appliedModelLocal, unappliedModelLocal }) => {
    const MODEL_ID = filter.modelId || filter.id;

    if (AUiTypesModelArray[filter.type]) {
      if (appliedModelLocal[MODEL_ID] &&
        appliedModelLocal[MODEL_ID].length) {
        if (modelArray) {
          appliedModelLocal[MODEL_ID] = _filter(appliedModelLocal[MODEL_ID], modelItem => {
            return modelArray.indexOf(modelItem) === -1;
          });
        } else {
          appliedModelLocal[MODEL_ID] = [];
        }
      }
      if (unappliedModelLocal[MODEL_ID] &&
        unappliedModelLocal[MODEL_ID].length) {
        if (modelArray) {
          unappliedModelLocal[MODEL_ID] = _filter(unappliedModelLocal[MODEL_ID], modelItem => {
            return modelArray.indexOf(modelItem) === -1;
          });
        } else {
          unappliedModelLocal[MODEL_ID] = [];
        }
      }
    } else if (AUiTypesModelObject[filter.type] && keyId) {
      if (isPlainObject(unappliedModelLocal?.[MODEL_ID])) {
        unappliedModelLocal[MODEL_ID][keyId] = undefined;
      }
      if (isPlainObject(appliedModelLocal?.[MODEL_ID])) {
        appliedModelLocal[MODEL_ID][keyId] = undefined;
      }
    } else {
      unappliedModelLocal[MODEL_ID] = undefined;
      appliedModelLocal[MODEL_ID] = undefined;
    }

    return {
      appliedModelLocal,
      unappliedModelLocal,
    };
  };

  const closeFilterValue = ({ filter, keyId, modelArray }) => {
    const APPLIED_MODEL = cloneDeep(appliedModel.value);
    const UNAPPLIED_MODEL = cloneDeep(unappliedModel.value);

    const {
      appliedModelLocal,
      unappliedModelLocal,
    } = closeCurrentFilter({
      filter,
      keyId,
      modelArray,
      appliedModelLocal: APPLIED_MODEL,
      unappliedModelLocal: UNAPPLIED_MODEL,
    });

    emit("update:unappliedModel", unappliedModelLocal);
    emit("update:appliedModel", appliedModelLocal);

    setTimeout(() => {
      onUpdateModelFilters({ model: appliedModel.value });
    });
  };

  const closeAllFilters = () => {
    let appliedModelLocal = cloneDeep(appliedModel.value);
    let unappliedModelLocal = cloneDeep(unappliedModel.value);

    forEach(filtersVisibleAll.value, filter => {
      const MODELS_OBJECT = closeCurrentFilter({
        filter,
        appliedModelLocal: appliedModelLocal,
        unappliedModelLocal: unappliedModelLocal,
      });

      appliedModelLocal = MODELS_OBJECT.appliedModelLocal;
      unappliedModelLocal = MODELS_OBJECT.unappliedModelLocal;
    });

    updateFilterSavedModel();

    emit("update:unappliedModel", unappliedModelLocal);
    emit("update:appliedModel", appliedModelLocal);

    setTimeout(() => {
      onUpdateModelFilters({ model: appliedModel.value });
    });
  };

  return {
    closeAllFilters,
    closeFilterValue,
  };
}
