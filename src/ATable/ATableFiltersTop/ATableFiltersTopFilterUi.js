import {
  computed,
  h,
  inject,
  toRef,
} from "vue";

import AUiComponents from "../../ui/AUiComponents";
import AUiTypesContainer from "../../ui/const/AUiTypesContainer";

import {
  cloneDeep,
} from "lodash-es";
import AUiContainerComponents from "../../ui/AUiContainerComponents";

export default {
  name: "ATableFiltersTopFilterUi",
  props: {
    filter: {
      type: Object,
      required: false,
      default: undefined,
    },
    isLabelVisible: {
      type: Boolean,
      required: true,
    },
    modelFilters: {
      type: Object,
      required: true,
    },
  },
  inject: [
    "tableId",
    "onUpdateModelFilters",
    "updateDataKeyByIdFromFilter",
  ],
  setup(props) {
    const filter = toRef(props, "filter");

    const tableId = inject("tableId");

    const isContainer = computed(() => {
      return !!AUiTypesContainer[filter.value.type];
    });

    const componentTypesMapping = {
      ...AUiComponents,
      ...AUiContainerComponents,
    };

    const idPrefix = computed(() => {
      return `${ tableId.value }_`;
    });

    const onUpdateModelFilters = inject("onUpdateModelFilters");
    const modelFilters = toRef(props, "modelFilters");
    const onUpdateModelFiltersLocal = model => {
      if (isContainer.value) {
        onUpdateModelFilters({ model });
      } else {
        const MODEL_FILTERS = cloneDeep(modelFilters.value);
        MODEL_FILTERS[filter.value.id] = cloneDeep(model);
        onUpdateModelFilters({ model: MODEL_FILTERS });
      }
    };

    const updateDataKeyByIdFromFilter = inject("updateDataKeyByIdFromFilter");
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

    const typesWithData = ["select", "multiselect", "radio", "checkbox", "group", "fieldset"];
    const emitForComponentsWithData = computed(() => {
      const EMITS = {};
      if (typesWithData.indexOf(filter.value.type) !== -1) {
        EMITS.onUpdateData = updateDataLocal;
      }
      return EMITS;
    });

    return {
      componentTypesMapping,
      emitForComponentsWithData,
      idPrefix,
      isContainer,
      onUpdateModelFiltersLocal,
    };
  },
  render() {
    return h(this.componentTypesMapping[this.filter.type], {
      idPrefix: this.idPrefix,
      modelValue: this.isContainer ? this.modelFilters : this.modelFilters[this.filter.id],
      "onUpdate:modelValue": this.onUpdateModelFiltersLocal,
      ...this.filter,
      label: this.isLabelVisible ? this.filter.label : undefined,
      ...this.emitForComponentsWithData,
    }, this.$slots);
  },
};