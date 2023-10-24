import {
  toRef,
} from "vue";

import AUiTypesModelArray from "../../../ui/const/AUiTypesModelArray";
import AUiTypesModelObject from "../../../ui/const/AUiTypesModelObject";
import {
  cloneDeep,
  isPlainObject,
} from "lodash-es";

export default function CloseFilterAPI(props, { emit }, {
  onUpdateModelFilters = () => {},
}) {
  const appliedModel = toRef(props, "appliedModel");
  const unappliedModel = toRef(props, "unappliedModel");

  const closeFilterValue = ({ filter, currentModel, keyId }) => {
    const APPLIED_MODEL = cloneDeep(appliedModel.value);
    if (AUiTypesModelArray[filter.type]) {
      if (APPLIED_MODEL[filter.id] &&
        APPLIED_MODEL[filter.id].length) {
        const INDEX_IN_MODEL = APPLIED_MODEL[filter.id].indexOf(currentModel);
        if (INDEX_IN_MODEL !== -1) {
          APPLIED_MODEL[filter.id].splice(INDEX_IN_MODEL, 1);
        }
      }
      if (unappliedModel.value[filter.id] &&
        unappliedModel.value[filter.id].length) {
        const INDEX_IN_MODEL = unappliedModel.value[filter.id].indexOf(currentModel);
        if (INDEX_IN_MODEL !== -1) {
          const UNAPPLIED_MODEL = cloneDeep(unappliedModel.value);
          UNAPPLIED_MODEL[filter.id].splice(INDEX_IN_MODEL, 1);
          emit("update:unappliedModel", UNAPPLIED_MODEL);
        }
      }
    } else if (AUiTypesModelObject[filter.type] && keyId) {
      const UNAPPLIED_MODEL = cloneDeep(unappliedModel.value);
      if (isPlainObject(UNAPPLIED_MODEL?.[filter.id])) {
        UNAPPLIED_MODEL[filter.id][keyId] = undefined;
      }
      if (isPlainObject(APPLIED_MODEL?.[filter.id])) {
        APPLIED_MODEL[filter.id][keyId] = undefined;
      }
      emit("update:unappliedModel", UNAPPLIED_MODEL);
    } else {
      const UNAPPLIED_MODEL = cloneDeep(unappliedModel.value);
      UNAPPLIED_MODEL[filter.id] = undefined;
      emit("update:unappliedModel", UNAPPLIED_MODEL);
      APPLIED_MODEL[filter.id] = undefined;
    }
    emit("update:appliedModel", APPLIED_MODEL);

    setTimeout(() => {
      onUpdateModelFilters({ model: appliedModel.value });
    });
  };

  return {
    closeFilterValue,
  };
}
