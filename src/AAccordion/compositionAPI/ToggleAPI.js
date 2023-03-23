import {
  ref,
  toRef,
  watch,
} from "vue";

import AKeyId from "../../ui/const/AKeyId";
import {
  cloneDeep,
  filter,
  isEqual,
  startsWith,
} from "lodash-es";

export default function ToggleAPI(props, { emit }) {
  const alwaysOpen = toRef(props, "alwaysOpen");
  const disabled = toRef(props, "disabled");
  const idsForOpenDefault = toRef(props, "idsForOpenDefault");
  const prevent = toRef(props, "prevent");
  const stop = toRef(props, "stop");

  const idsForOpen = ref(idsForOpenDefault.value);

  const toggleWithAlwaysOpen = ({ currentId, isOpen }) => {
    if (isOpen) {
      const CURRENT_ID_PREFIX = currentId.split("__")[0];
      idsForOpen.value = filter(idsForOpen.value, index => {
        return !startsWith(index, CURRENT_ID_PREFIX);
      });
    } else {
      idsForOpen.value.push(currentId);
    }
  };

  const toggleWithoutAlwaysOpen = ({ currentId, parentsIds, isOpen }) => {
    if (isOpen) {
      idsForOpen.value = parentsIds;
    } else {
      idsForOpen.value = [...parentsIds, currentId];
    }
  };

  const toggleLocal = ({ item, parentsIds, isOpen, $event }) => {
    if (disabled.value) {
      return;
    }
    const PARENT_IDS = cloneDeep(parentsIds);
    const CURRENT_ID = item[AKeyId];
    if (alwaysOpen.value) {
      toggleWithAlwaysOpen({ item, currentId: CURRENT_ID, isOpen });
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

  return {
    idsForOpen,
    toggleLocal,
  };
}
