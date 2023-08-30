import {
  h,
  onBeforeUnmount,
} from "vue";

import AButton from "../../AButton/AButton";
import ASelect from "../../ui/ASelect/ASelect";
import ATableFiltersSaveModal from "../ATableFiltersSaveModal/ATableFiltersSaveModal";
import ATableFiltersTopFilter from "./ATableFiltersTopFilter/ATableFiltersTopFilter";
import ATableFiltersTopFilterUi from "./ATableFiltersTopFilterUi/ATableFiltersTopFilterUi";

import EventBusAPI from "./compositionAPI/EventBusAPI";
import FiltersHiddenAPI from "./compositionAPI/FiltersHiddenAPI";
import FiltersSaveAPI from "./compositionAPI/FiltersSaveAPI";
import SearchAPI from "./compositionAPI/SearchAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";
import VisibleAPI from "./compositionAPI/VisibleAPI";

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
      iconToggle,
      isOpen,
      onClose,
      onOpen,
      onToggle,
      styleToggle,
      textToggle,
    } = ToggleAPI();

    const {
      buttonSearchComponent,
      onSearch,
    } = SearchAPI(props, context, {
      onClose,
    });

    const {
      isBtnToggleVisible,
    } = VisibleAPI(props);

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
      changeModelFiltersSaved,
      closeModalSave,
      deleteFiltersVisible,
      selectorCloseIds,
      filtersHidden,
      hasFiltersHiddenDefault,
      isModalSaveVisible,
      iconToggle,
      isBtnToggleVisible,
      isOpen,
      modelFiltersSaved,
      onSearch,
      onToggle,
      styleToggle,
      textToggle,
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
          this.canSave && h(ASelect, {
            modelValue: this.modelFiltersSaved,
            class: "a_table__filters_top__save_select",
            type: "select",
            data: this.filtersSaved,
            keyLabel: "label",
            keyId: "label",
            label: "_A_TABLE_FILTER_SAVE_SELECT_",
            translateData: true,
            disabled: !this.filtersSaved.length,
            search: true,
            deselect: true,
            change: this.changeModelFiltersSaved,
          }),
          this.filtersGroup.main && h(ATableFiltersTopFilterUi, {
            class: ["a_width_100", {
              a_mr_2: !this.isOpen
            }],
            filter: this.filtersGroup.main,
            isLabelVisible: true,
            modelFilters: this.modelFilters,
            onUpdateModelFilters: this.onUpdateModelFilters,
            tableId: this.tableId,
          }),
          this.buttonSearchComponent,
          this.buttonSaveComponentTop,
          this.isBtnToggleVisible && h("div", {
            class: "a_column",
          }, [
            h(AButton, {
              class: "a_btn a_btn_link a_text_nowrap",
              type: "button",
              text: this.textToggle,
              iconRight: this.iconToggle,
              onClick: this.onToggle,
            }),
          ]),
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
