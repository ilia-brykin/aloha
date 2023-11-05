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
  name: "AFiltersHorizontalFilterUi",
  props: {
    filter: {
      type: Object,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: true,
    },
    isLabelVisible: {
      type: Boolean,
      required: true,
    },
    onUpdateModelFilters: {
      type: Function,
      required: true,
    },
    unappliedModel: {
      type: Object,
      required: true,
    },
    updateDataKeyByIdFromFilter: {
      type: Function,
      required: true,
    },
  },
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
      modelValue: this.isContainer ? this.unappliedModel : this.unappliedModel[this.filter.modelId || this.filter.id],
      "onUpdate:modelValue": this.onUpdateModelFiltersLocal,
      ...this.filter,
      ...this.filterSpecificAttributes,
      label: this.isLabelVisible ? this.filter.label : undefined,
      ...this.emitForComponentsWithData,
    }, this.$slots);
  },
};
