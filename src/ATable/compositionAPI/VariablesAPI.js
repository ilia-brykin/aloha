import {
  ref,
} from "vue";

export default function VariablesAPI() {
  const columnsScrollInvisible = ref([]);
  const indexFirstScrollInvisibleColumn = ref(undefined);
  const isMultipleActionsActive = ref(undefined);
  const modelColumnsVisibleLocal = ref({});
  const tableGrandparentRef = ref(undefined);
  const tableRef = ref(undefined);

  return {
    columnsScrollInvisible,
    indexFirstScrollInvisibleColumn,
    isMultipleActionsActive,
    modelColumnsVisibleLocal,
    tableGrandparentRef,
    tableRef,
  };
}
