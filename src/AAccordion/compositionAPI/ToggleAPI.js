import {
  ref,
  toRef,
  watch,
} from "vue";

import {
  AKeyId,
} from "../../const/AKeys";
import {
  cloneDeep,
  filter,
  isEqual,
  isUndefined,
  startsWith,
} from "lodash-es";

export default function ToggleAPI(props, { emit }) {
  const alwaysOpen = toRef(props, "alwaysOpen");
  const disabled = toRef(props, "disabled");
  const idsForOpenDefault = toRef(props, "idsForOpenDefault");
  const modelValue = toRef(props, "modelValue");
  const oneItemAlwaysOpen = toRef(props, "oneItemAlwaysOpen");
  const prevent = toRef(props, "prevent");
  const stop = toRef(props, "stop");

  const idsForOpen = ref([]);

  // copies: the arrays of the parent are never changed
  const initIdsForOpen = () => {
    idsForOpen.value = isUndefined(modelValue.value) ?
      [...idsForOpenDefault.value] :
      [...modelValue.value];
  };

  const toggleWithAlwaysOpen = ({ currentId, isOpen }) => {
    if (isOpen) {
      // closes the item and its nested items (their ids start with "<id>_")
      idsForOpen.value = filter(idsForOpen.value, id => {
        return id !== currentId && !startsWith(id, `${ currentId }_`);
      });
    } else {
      idsForOpen.value = [...idsForOpen.value, currentId];
    }
  };

  const toggleWithoutAlwaysOpen = ({ currentId, parentsIds, isOpen }) => {
    if (isOpen) {
      if (oneItemAlwaysOpen.value) {
        return;
      }
      idsForOpen.value = parentsIds;
    } else {
      idsForOpen.value = [...parentsIds, currentId];
    }
  };

  const toggleLocal = ({ item, parentsIds, isOpen, $event }) => {
    if (disabled.value || item.disabled) {
      return;
    }
    const PARENT_IDS = cloneDeep(parentsIds);
    const CURRENT_ID = item[AKeyId];
    if (alwaysOpen.value) {
      toggleWithAlwaysOpen({ currentId: CURRENT_ID, isOpen });
    } else {
      toggleWithoutAlwaysOpen({ parentsIds: PARENT_IDS, currentId: CURRENT_ID, isOpen });
    }
    emit("toggle", { idsForOpen: idsForOpen.value, currentId: CURRENT_ID, parentsIds: PARENT_IDS, isOpen: isOpen, $event, item });

    if (stop.value && $event) {
      $event.stopPropagation();
    }
    if (prevent.value && $event) {
      $event.preventDefault();
    }
  };

  watch(idsForOpenDefault, newValue => {
    if (!isEqual(newValue, idsForOpen.value)) {
      idsForOpen.value = cloneDeep(newValue);
    }
  });

  // v-model: the parent changes the open items …
  watch(modelValue, newValue => {
    if (!isUndefined(newValue) && !isEqual(newValue, idsForOpen.value)) {
      idsForOpen.value = [...newValue];
    }
  });

  // … and gets every change of them
  watch(idsForOpen, newValue => {
    if (!isEqual(newValue, modelValue.value)) {
      emit("update:modelValue", [...newValue]);
    }
  });

  return {
    idsForOpen,
    initIdsForOpen,
    toggleLocal,
  };
}
