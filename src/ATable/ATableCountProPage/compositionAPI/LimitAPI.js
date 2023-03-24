import {
  computed,
  toRef,
} from "vue";

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

  return {
    changeLimit,
    changeLimitFromSelect,
    limitString,
  };
}
