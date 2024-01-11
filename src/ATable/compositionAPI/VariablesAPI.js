import {
  ref,
  toRef,
} from "vue";

export default function VariablesAPI(props) {
  const modelIsTableWithoutScrollStart = toRef(props, "modelIsTableWithoutScrollStart");

  const columnsScrollInvisible = ref([]);
  const indexFirstScrollInvisibleColumn = ref(undefined);
  const isMultipleActionsActive = ref(undefined);
  const modelColumnsVisibleLocal = ref({});
  const modelIsTableWithoutScroll = ref(modelIsTableWithoutScrollStart.value);
  const tableGrandparentRef = ref(undefined);
  const tableRef = ref(undefined);

  return {
    columnsScrollInvisible,
    indexFirstScrollInvisibleColumn,
    isMultipleActionsActive,
    modelColumnsVisibleLocal,
    modelIsTableWithoutScroll,
    tableGrandparentRef,
    tableRef,
  };
}
