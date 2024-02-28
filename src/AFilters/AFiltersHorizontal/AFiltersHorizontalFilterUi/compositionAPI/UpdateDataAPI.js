import {
  computed,
  toRef,
} from "vue";

export default function UpdateDataAPI(props) {
  const filter = toRef(props, "filter");
  const updateDataKeyByIdFromFilter = toRef(props, "updateDataKeyByIdFromFilter");

  const TYPES_WITH_DATA = ["select", "multiselect", "radio", "checkbox", "group", "fieldset"];

  const updateDataLocal = ({ dataKeyByKeyId, item }) => {
    let filterId = filter.value.id;
    if (item) {
      filterId = item.id;
    }
    updateDataKeyByIdFromFilter.value({
      filterId: filterId,
      dataKeyByKeyId,
    });
  };

  const emitForComponentsWithData = computed(() => {
    const EMITS = {};
    if (TYPES_WITH_DATA.indexOf(filter.value.type) !== -1) {
      EMITS.onUpdateData = updateDataLocal;
    }
    return EMITS;
  });

  return {
    emitForComponentsWithData,
  };
}
