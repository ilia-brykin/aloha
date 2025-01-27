import {
  toRef,
} from "vue";

export default function StartSearchAPI(props, { emit }, {
  onUpdateModelFilters = () => {
  },
}) {
  const appliedModel = toRef(props, "appliedModel");
  const unappliedModel = toRef(props, "unappliedModel");

  const startSearch = () => {
    emit("update:appliedModel", unappliedModel.value);

    setTimeout(() => {
      onUpdateModelFilters({ model: appliedModel.value });
    });
  };

  return {
    startSearch,
  };
}
