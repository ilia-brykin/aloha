import {
  h,
} from "vue";

import AFiltersHorizontalFilterUi from "../AFiltersHorizontal/AFiltersHorizontalFilterUi/AFiltersHorizontalFilterUi";

import IdAPI from "./compositionAPI/IdAPI";

export default {
  name: "AFilersRight",
  props: {
    appliedModel: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    filters: {
      type: Array,
      required: false,
      default: () => [],
    },
    filtersKeyById: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    onUpdateModelFilters: {
      type: Function,
      required: true,
    },
    updateDataKeyByIdFromFilter: {
      type: Function,
      required: true,
    },
  },
  emits: [
    "startSearch",
  ],
  setup(props) {
    const {
      idFilterRight,
    } = IdAPI(props);

    return {
      idFilterRight,
    };
  },
  render() {
    return h("div", {
      id: this.idFilterRight,
      class: "a_filters_right",
    }, [
      h("form", {}, [
        this.filters.map(filter => {
          return h(AFiltersHorizontalFilterUi, {
            id: this.id,
            class: "a_filters_right__filter_ui",
            excludeRenderAttributes: this.excludeRenderAttributes,
            filter,
            isLabelVisible: true,
            onUpdateModelFilters: this.onUpdateModelFilters,
            unappliedModel: this.appliedModel,
            updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
          }, this.$slots);
        }),
      ]),
    ]);
  },
};
