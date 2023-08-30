import {
  h,
  onBeforeUnmount,
} from "vue";

import ASelect from "../../ui/ASelect/ASelect";
import ATableFiltersSaveModal from "../ATableFiltersSaveModal/ATableFiltersSaveModal";
import ATableFiltersTopFilter from "./ATableFiltersTopFilter/ATableFiltersTopFilter";

import EventBusAPI from "./compositionAPI/EventBusAPI";
import FilterMainAPI from "./compositionAPI/FilterMainAPI";
import FiltersHiddenAPI from "./compositionAPI/FiltersHiddenAPI";
import FiltersSaveAPI from "./compositionAPI/FiltersSaveAPI";
import SearchAPI from "./compositionAPI/SearchAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

export default {
  name: "ATableFiltersTop",
  props: {
    canSave: {
      type: Boolean,
      required: false,
    },
    disabledFilters: {
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
    updateFiltersSaved: {
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
    } = EventBusAPI({
      onOpen,
    });

    const {
      addFiltersVisible,
      deleteFiltersVisible,
      filtersHidden,
      hasFiltersHiddenDefault,
    } = FiltersHiddenAPI(props, context);

    const {
      buttonSaveComponentBottom,
      buttonSaveComponentTop,
      changeModelFiltersSaved,
      closeModalSave,
      isModalSaveVisible,
      modelFiltersSaved,
      selectFiltersSavedComponent,
      selectorCloseIds,
    } = FiltersSaveAPI(props, {
      onOpen,
    });

    initEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
    });

    return {
      addFiltersVisible,
      buttonSaveComponentBottom,
      buttonSaveComponentTop,
      buttonSearchComponent,
      buttonToggleComponent,
      changeModelFiltersSaved,
      closeModalSave,
      deleteFiltersVisible,
      filterMainComponent,
      filtersHidden,
      hasFiltersHiddenDefault,
      isModalSaveVisible,
      isOpen,
      modelFiltersSaved,
      onSearch,
      selectFiltersSavedComponent,
      selectorCloseIds,
      styleToggle,
    };
  },
  render() {
    return h("div", {
      class: "a_table__filters_top",
    }, [
      h("form", {}, [
        h("div", {
          class: "a_table__filters_top__header",
        }, [
          this.selectFiltersSavedComponent,
          this.filterMainComponent,
          this.buttonSearchComponent,
          this.buttonSaveComponentTop,
          this.buttonToggleComponent,
        ]),
        h("div", {
          class: "a_table__filters_top__always_visible",
          style: this.styleToggle,
        }, [
          this.filtersGroup.alwaysVisible.map(filter => {
            return h(ATableFiltersTopFilter, {
              key: filter.id,
              closable: false,
              filter,
              modelFilters: this.modelFilters,
              onUpdateModelFilters: this.onUpdateModelFilters,
              tableId: this.tableId,
            }, this.$slots);
          }),
          this.filtersVisible.map(filter => {
            return h(ATableFiltersTopFilter, {
              key: filter.id,
              closable: true,
              filter: filter,
              modelFilters: this.modelFilters,
              onUpdateModelFilters: this.onUpdateModelFilters,
              tableId: this.tableId,
              onDeleteFiltersVisible: this.deleteFiltersVisible,
            }, this.$slots);
          }),
          h("div", {
            class: "a_table__filters_top__footer",
          }, [
            this.hasFiltersHiddenDefault && h(ASelect, {
              class: "a_table__filters_top__footer__select",
              type: "select",
              data: this.filtersHidden,
              keyLabel: "label",
              keyId: "id",
              label: "_A_TABLE_FILTER_ADD_",
              translateData: true,
              disabled: !this.filtersHidden.length,
              search: true,
              change: this.addFiltersVisible,
            }),
            this.buttonSearchComponent,
          ]),
        ]),
      ]),
      this.isModalSaveVisible && h(ATableFiltersSaveModal, {
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
