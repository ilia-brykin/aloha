import {
  computed,
  watch,
} from "vue";

export default function UiDataWatchEmitAPI({ emit }, {
  dataKeyByKeyIdLocal = computed(() => ({})),
  dataLocal = computed(() => ({})),
}) {
  watch(dataLocal, () => {
    emit("updateData", {
      dataKeyByKeyId: dataKeyByKeyIdLocal.value,
    });
  }, {
    immediate: true,
    deep: true,
  });
}
