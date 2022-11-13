import {
  computed,
  ref,
} from "vue";

import {
  filter,
} from "lodash-es";

export default function MobileColumnsAPI({
  columnsOrdered = ref([]),
  isMobile = ref(false),
  modelColumnsVisibleLocal = ref({}),
}) {
  const allVisibleMobileColumns = computed(() => {
    if (!isMobile.value) {
      return [];
    }
    return filter(columnsOrdered.value, column => {
      return !!(column.isRender !== false && modelColumnsVisibleLocal.value[column.id]);
    });
  });

  return {
    allVisibleMobileColumns,
  };
}
