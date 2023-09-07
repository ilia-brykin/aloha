import {
  h,
} from "vue";

import ComponentTypesAPI from "./compositionAPI/ComponentTypesAPI";
import ContainerAPI from "./compositionAPI/ContainerAPI";
import DataAPI from "./compositionAPI/DataAPI";
import FilterSpecificTypeAPI from "./compositionAPI/FilterSpecificTypeAPI";
import IdAPI from "./compositionAPI/IdAPI";
import ModelAPI from "./compositionAPI/ModelAPI";

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
    onUpdateModelFilters: {
      type: Function,
      required: true,
    },
    tableId: {
      type: String,
      required: true,
    },
  },
  inject: [
    "updateDataKeyByIdFromFilter",
  ],
  setup(props) {
    const {
      isContainer,
    } = ContainerAPI(props);

    const {
      onUpdateModelFiltersLocal,
    } = ModelAPI(props, {
      isContainer,
    });

    const {
      emitForComponentsWithData,
    } = DataAPI(props);

    const {
      idPrefix,
    } = IdAPI(props);

    const {
      componentTypesMapping,
    } = ComponentTypesAPI();

    const {
      filterSpecificAttributes,
    } = FilterSpecificTypeAPI(props);

    return {
      componentTypesMapping,
      emitForComponentsWithData,
      filterSpecificAttributes,
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
      ...this.filterSpecificAttributes,
      label: this.isLabelVisible ? this.filter.label : undefined,
      ...this.emitForComponentsWithData,
    }, this.$slots);
  },
};
