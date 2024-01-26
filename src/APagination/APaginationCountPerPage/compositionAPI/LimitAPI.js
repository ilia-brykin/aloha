import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";

export default function LimitAPI(props, { emit }) {
  const isLoadingTable = toRef(props, "isLoadingTable");
  const limit = toRef(props, "limit");

  const limitString = computed(() => {
    return `${ limit.value }`;
  });

  const changeLimit = limit => {
    if (isLoadingTable.value) {
      return;
    }
    emit("update:limit", +limit);
  };

  const changeLimitFromSelect = ({ model }) => {
    changeLimit(model);
  };

  const keyDownChangeLimit = ($event, limit) => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      changeLimit(limit);
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    changeLimit,
    changeLimitFromSelect,
    keyDownChangeLimit,
    limitString,
  };
}
