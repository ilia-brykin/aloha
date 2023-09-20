import {
  h,
  onBeforeUnmount,
} from "vue";

import AFiltersSaveModal from "../AFiltersSaveModal/AFiltersSaveModal";
import AFiltersHorizontalFilter from "./AFiltersHorizontalFilter/AFiltersHorizontalFilter";

import EventBusAPI from "./compositionAPI/EventBusAPI";
import FilterMainAPI from "./compositionAPI/FilterMainAPI";
import FiltersHiddenAPI from "./compositionAPI/FiltersHiddenAPI";
import FiltersSaveAPI from "./compositionAPI/FiltersSaveAPI";
import FiltersSavedDeleteAPI from "./compositionAPI/FiltersSavedDeleteAPI";
import FiltersLayoutAPI from "./compositionAPI/FiltersLayoutAPI";
import IdAPI from "./compositionAPI/IdAPI";
import SearchAPI from "./compositionAPI/SearchAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

export default {
  name: "AFiltersHorizontal",
  props: {
    canSave: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    filtersGroup: {
      type: Object,
      required: true,
      default: () => ({
        main: undefined,
        alwaysVisible: [],
        filters: [],
      }),
    },
    filtersKeyById: {
      type: Object,
      required: true,
    },
    filtersSaved: {
      type: Array,
      required: true,
    },
    filtersVisible: {
      type: Array,
      required: true,
    },
    unappliedModel: {
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
    updateFiltersSaved: {
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
    "toggleFiltersVisible",
  ],
  setup(props, context) {
    const {
      idFilterTop,
    } = IdAPI(props);

    const {
      buttonToggleComponent,
      isOpen,
      onClose,
      onOpen,
      styleToggle,
    } = ToggleAPI(props);

    const {
      filterMainComponent,
    } = FilterMainAPI(props);

    const {
      buttonSearchComponent,
      onSearch,
    } = SearchAPI(props, context, {
      onClose,
    });

    const {
      destroyEventBus,
      initEventBus,
    } = EventBusAPI(props, {
      onOpen,
    });

    const {
      addFilterSelectComponent,
      addFiltersVisible,
      deleteFiltersVisible,
      filtersHidden,
      hasFiltersHiddenDefault,
    } = FiltersHiddenAPI(props, context);

    const {
      buttonSaveComponentBottom,
      buttonSaveTopComponent,
      changeModelFiltersSaved,
      closeModalSave,
      isModalSaveVisible,
      modelFiltersSaved,
      selectFiltersSavedComponent,
      selectorCloseIds,
    } = FiltersSaveAPI(props, {
      onOpen,
    });

    const {
      buttonDeleteFiltersSavedComponent,
    } = FiltersSavedDeleteAPI(props, {
      changeModelFiltersSaved,
      idFilterTop,
      modelFiltersSaved,
    });

    const {
      filtersTopFooter,
      filtersTopHeader,
    } = FiltersLayoutAPI({
      filterMainComponent,
      buttonSearchComponent,
      buttonToggleComponent,
      selectFiltersSavedComponent,
      buttonDeleteFiltersSavedComponent,
      buttonSaveTopComponent,
      addFilterSelectComponent,
    });

    initEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
    });

    return {
      addFiltersVisible,
      buttonSaveComponentBottom,
      buttonSearchComponent,
      changeModelFiltersSaved,
      closeModalSave,
      deleteFiltersVisible,
      filtersHidden,
      filtersTopFooter,
      filtersTopHeader,
      hasFiltersHiddenDefault,
      idFilterTop,
      isModalSaveVisible,
      isOpen,
      modelFiltersSaved,
      onSearch,
      selectorCloseIds,
      styleToggle,
    };
  },
  render() {
    return h("div", {
      id: this.idFilterTop,
      class: "a_table__filters_top",
    }, [
      h("form", {}, [
        this.filtersTopHeader,
        h("div", {
          class: "a_table__filters_top__always_visible",
          style: this.styleToggle,
        }, [
          this.filtersGroup.alwaysVisible.map(filter => {
            return h(AFiltersHorizontalFilter, {
              key: filter.id,
              closable: false,
              filter,
              unappliedModel: this.unappliedModel,
              onUpdateModelFilters: this.onUpdateModelFilters,
              updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
              id: this.id,
            }, this.$slots);
          }),
          this.filtersVisible.map(filter => {
            return h(AFiltersHorizontalFilter, {
              key: filter.id,
              closable: true,
              filter: filter,
              unappliedModel: this.unappliedModel,
              onUpdateModelFilters: this.onUpdateModelFilters,
              id: this.id,
              onDeleteFiltersVisible: this.deleteFiltersVisible,
              updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
            }, this.$slots);
          }),
          this.filtersTopFooter,
        ]),
      ]),
      this.isModalSaveVisible && h(AFiltersSaveModal, {
        changeModelFiltersSaved: this.changeModelFiltersSaved,
        filtersSaved: this.filtersSaved,
        modelFiltersSaved: this.modelFiltersSaved,
        selectorCloseIds: this.selectorCloseIds,
        updateFiltersSaved: this.updateFiltersSaved,
        onClose: this.closeModalSave,
      }),
    ]);
  },
};
