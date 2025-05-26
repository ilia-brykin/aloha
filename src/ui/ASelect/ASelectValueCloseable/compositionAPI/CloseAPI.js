import {
  computed,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../../../const/AKeys";

export default function CloseAPI(props, { emit }) {
  const data = toRef(props, "data");

  const currentValue = computed(() => {
    return data.value[AKeyId];
  });

  const closeModel = ({ $event }) => {
    emit("changeModelValue", {
      currentValue: currentValue.value,
      $event,
      isSelected: true,
    });
  };

  return {
    closeModel,
  };
}
