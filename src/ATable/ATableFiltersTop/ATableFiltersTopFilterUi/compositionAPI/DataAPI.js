import {
  computed,
  inject,
  toRef,
} from "vue";

export default function DataAPI(props) {
  const filter = toRef(props, "filter");

  const updateDataKeyByIdFromFilter = inject("updateDataKeyByIdFromFilter");

  const typesWithData = ["select", "multiselect", "radio", "checkbox", "group", "fieldset"];

  const updateDataLocal = ({ dataKeyByKeyId, item }) => {
    let filterId = filter.value.id;
    if (item) {
      filterId = item.id;
    }
    updateDataKeyByIdFromFilter({
      filterId: filterId,
      dataKeyByKeyId,
    });
  };

  const emitForComponentsWithData = computed(() => {
    const EMITS = {};
    if (typesWithData.indexOf(filter.value.type) !== -1) {
      EMITS.onUpdateData = updateDataLocal;
    }
    return EMITS;
  });

  return {
    emitForComponentsWithData,
  };
}
