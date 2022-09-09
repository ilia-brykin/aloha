import {
  computed,
  toRef,
  watch,
} from "vue";

export default function UiDataWatchEmitAPI(props, { emit }, {
  dataKeyByKeyIdLocal = computed(() => ({})),
}) {
  const data = toRef(props, "data");

  watch(data, () => {
    emit("updateData", {
      dataKeyByKeyId: dataKeyByKeyIdLocal.value,
    });
  }, {
    immediate: true,
    deep: true,
  });
}
