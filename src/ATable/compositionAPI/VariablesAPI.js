import {
  ref,
  toRef,
} from "vue";

export default function VariablesAPI(props) {
  const modelIsTableWithoutScrollStart = toRef(props, "modelIsTableWithoutScrollStart");

  const columnsScrollInvisible = ref([]);
  const groupedHeaderRef = ref(undefined);
  const indexFirstScrollInvisibleColumn = ref(undefined);
  const isMultipleActionsActive = ref(undefined);
  const modelColumnsVisibleLocal = ref({});
  const modelIsTableWithoutScroll = ref(modelIsTableWithoutScrollStart.value);
  const tableGrandparentRef = ref(undefined);
  const tableRef = ref(undefined);

  return {
    columnsScrollInvisible,
    groupedHeaderRef,
    indexFirstScrollInvisibleColumn,
    isMultipleActionsActive,
    modelColumnsVisibleLocal,
    modelIsTableWithoutScroll,
    tableGrandparentRef,
    tableRef,
  };
}
