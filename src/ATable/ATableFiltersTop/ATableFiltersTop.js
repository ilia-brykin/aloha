import {
  h,
  onBeforeUnmount,
} from "vue";

import AButton from "../../AButton/AButton";
import ASelect from "../../ui/ASelect/ASelect";
import ATableFiltersTopFilter from "./ATableFiltersTopFilter";
import ATableFiltersTopFilterUi from "./ATableFiltersTopFilterUi";

import EventBusAPI from "./compositionAPI/EventBusAPI";
import FiltersHiddenAPI from "./compositionAPI/FiltersHiddenAPI";
import SearchAPI from "./compositionAPI/SearchAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";
import VisibleAPI from "./compositionAPI/VisibleAPI";

export default {
  name: "ATableFiltersTop",
  props: {
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
    filtersVisible: {
      type: Array,
      required: true,
    },
    modelFilters: {
      type: Object,
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

    initEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
    });

    return {
      addFiltersVisible,
      deleteFiltersVisible,
      filtersHidden,
      hasFiltersHiddenDefault,
      iconToggle,
      isBtnToggleVisible,
      isOpen,
      onSearch,
      onToggle,
      styleToggle,
      textToggle,
    };
  },
  render() {
    const BUTTON_SEARCH = h(AButton, {
      class: "a_btn a_btn_primary a_text_nowrap",
      iconLeft: "Search",
      type: "submit",
      text: {
        desktop: "_START_SEARCH_",
      },
      textScreenReader: {
        mobile: "_START_SEARCH_",
      },
      prevent: true,
      stop: true,
      disabled: this.disabledFilters,
      onClick: this.onSearch,
    });

    return h("div", {
      class: "a_table__filters_top",
    }, [
      h("form", {}, [
        h("div", {
          class: "a_columns a_columns_count_12 a_columns_gab_2 a_align_items_center",
        }, [
          h("div", {
            class: "a_column a_column_12_mobile a_column_12_tablet a_column_4_desktop a_column_4_widescreen a_column_4_fullhd a_d_flex",
          }, [
            this.filtersGroup.main && h(ATableFiltersTopFilterUi, {
              filter: this.filtersGroup.main,
              modelFilters: this.modelFilters,
              isLabelVisible: true,
              class: ["a_width_100", {
                a_mr_2: !this.isOpen
              }],
            }),
            !this.isOpen && BUTTON_SEARCH,
          ]),
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
            }, this.$slots);
          }),
          this.filtersVisible.map(filter => {
            return h(ATableFiltersTopFilter, {
              key: filter.id,
              closable: true,
              filter: filter,
              modelFilters: this.modelFilters,
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
            BUTTON_SEARCH,
          ]),
        ]),
      ]),
    ]);
  },
};
