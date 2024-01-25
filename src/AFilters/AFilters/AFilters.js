import {
  h,
  Teleport,
  toRef,
  watch,
} from "vue";

import AFilterCenter from "../AFilterCenter/AFilterCenter";
import AFiltersHorizontal from "../AFiltersHorizontal/AFiltersHorizontal";
import AFilersRight from "../AFilersRight/AFilersRight";

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
    view: {
      type: String,
      required: false,
      default: "top",
      validator: value => ["top", "right"].indexOf(value) !== -1,
    },
    viewRightTeleportSelector: {
      type: String,
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
    const filtersSaved = toRef(props, "filtersSaved");

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
      updateAppliedModel,
    } = FiltersAPI(props, context);

    const {
      closeAllFilters,
      closeFilterValue,
    } = CloseFilterAPI(props, context, {
      filtersVisibleAll,
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

    watch(filtersSaved, () => {
      initFiltersSaved();
    }, {
      deep: true,
    });

    setFiltersVisibleIds();
    initFiltersSaved();

    return {
      closeAllFilters,
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
      updateAppliedModel,
    };
  },
  render() {
    if (!this.hasFilters) {
      return;
    }
    return h(
      "div",
      [
        this.view === "top" && h(AFiltersHorizontal, {
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
        this.view === "right" && h(Teleport, {
          to: this.viewRightTeleportSelector,
          disabled: !this.viewRightTeleportSelector,
        }, [
          h(AFilersRight, {
            id: this.id,
            disabled: this.disabled,
            filters: this.filters,
            filtersKeyById: this.filtersKeyById,
            appliedModel: this.appliedModel,
            onUpdateModelFilters: this.updateAppliedModel,
            updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
            onStartSearch: this.startSearch,
          }, this.$slots),
        ]),
        h(AFilterCenter, {
          id: this.id,
          appliedModel: this.appliedModel,
          closeAllFilters: this.closeAllFilters,
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
