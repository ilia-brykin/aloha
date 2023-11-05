import {
  h,
} from "vue";

import AFiltersHorizontalFilterUi from "../AFiltersHorizontal/AFiltersHorizontalFilterUi/AFiltersHorizontalFilterUi";

import IdAPI from "./compositionAPI/IdAPI";

export default {
  name: "AFilersRight",
  props: {
    disabled: {
      type: Boolean,
      required: false,
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
    appliedModel: {
      type: Object,
      required: true,
    },
    onUpdateModelFilters: {
      type: Function,
      required: true,
    },
    id: {
      type: String,
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
            class: "a_filters_right__filter_ui",
            filter,
            isLabelVisible: true,
            unappliedModel: this.appliedModel,
            updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
            onUpdateModelFilters: this.onUpdateModelFilters,
            id: this.id,
          }, this.$slots);
        })
      ]),
    ]);
  },
};
