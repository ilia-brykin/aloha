import {
  h,
} from "vue";

import AFilterCenter from "../AFilterCenter/AFilterCenter";
import AFiltersHorizontal from "../AFiltersHorizontal/AFiltersHorizontal";

import CloseFilterAPI from "./compositionAPI/CloseFilterAPI";
import DataKeyByKeyIdAPI from "./compositionAPI/DataKeyByKeyIdAPI";
import FiltersAPI from "./compositionAPI/FiltersAPI";
import SaveAPI from "./compositionAPI/SaveAPI";
import StartSearchAPI from "./compositionAPI/StartSearchAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AFilters",
  props: {
    appliedModel: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    canSave: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    filters: {
      type: Array,
      required: false,
      default: () => [],
    },
    filtersSaved: {
      type: Array,
      required: false,
      default: () => [],
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_filters_"),
    },
    unappliedModel: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    updateFiltersSaved: {
      type: Function,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "startSearch",
    "update:appliedModel",
    "update:unappliedModel",
  ],
  setup(props, context) {
    const {
      filtersDataKeyById,
      filtersGroup,
      filtersKeyById,
      filtersVisible,
      filtersVisibleAll,
      filtersVisibleIds,
      hasFilters,
      onUpdateModelFilters,
      setFiltersVisibleIds,
    } = FiltersAPI(props, context);

    const {
      closeFilterValue,
    } = CloseFilterAPI(props, context, {
      onUpdateModelFilters,
    });

    const {
      dataKeyByKeyIdPerFilter,
      updateDataKeyByIdFromFilter,
    } = DataKeyByKeyIdAPI();

    const {
      toggleFiltersVisible,
    } = ToggleAPI(props, {
      filtersVisibleIds,
      onUpdateModelFilters,
    });

    const {
      startSearch,
    } = StartSearchAPI(props, context, {
      onUpdateModelFilters,
    });

    const {
      filtersSavedLocal,
      initFiltersSaved,
      updateFiltersSavedLocal,
    } = SaveAPI(props);

    setFiltersVisibleIds();
    initFiltersSaved();

    return {
      closeFilterValue,
      dataKeyByKeyIdPerFilter,
      filtersDataKeyById,
      filtersGroup,
      filtersKeyById,
      filtersSavedLocal,
      filtersVisible,
      filtersVisibleAll,
      filtersVisibleIds,
      hasFilters,
      onUpdateModelFilters,
      setFiltersVisibleIds,
      startSearch,
      toggleFiltersVisible,
      updateDataKeyByIdFromFilter,
      updateFiltersSavedLocal,
    };
  },
  render() {
    if (!this.hasFilters) {
      return;
    }
    return h(
      "div",
      [
        h(AFiltersHorizontal, {
          id: this.id,
          canSave: this.canSave,
          disabled: this.disabled,
          filtersGroup: this.filtersGroup,
          filtersKeyById: this.filtersKeyById,
          filtersSaved: this.filtersSavedLocal,
          filtersVisible: this.filtersVisible,
          unappliedModel: this.unappliedModel,
          updateFiltersSaved: this.updateFiltersSavedLocal,
          onUpdateModelFilters: this.onUpdateModelFilters,
          updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
          onStartSearch: this.startSearch,
          onToggleFiltersVisible: this.toggleFiltersVisible,
        }, this.$slots),
        h(AFilterCenter, {
          id: this.id,
          appliedModel: this.appliedModel,
          closeFilterValue: this.closeFilterValue,
          dataKeyByKeyIdPerFilter: this.dataKeyByKeyIdPerFilter,
          disabled: this.disabled,
          filtersKeyById: this.filtersKeyById,
          filtersVisibleAll: this.filtersVisibleAll,
        }, this.$slots),
      ],
    );
  },
};
