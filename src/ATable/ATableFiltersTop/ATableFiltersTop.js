import {
  computed,
  h, inject, onBeforeUnmount,
  ref,
} from "vue";

import AIcon from "../../AIcon/AIcon";
import ATableFiltersTopFilter from "./ATableFiltersTopFilter";
import ATableFiltersTopFilterUi from "./ATableFiltersTopFilterUi";

import EventBus from "../../utils/EventBus";

export default {
  name: "ATableFiltersTop",
  inject: [
    "isLoadingTable",
  ],
  props: {
    filtersGroup: {
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
  ],
  setup(props, { emit }) {
    const isOpen = ref(false);

    const iconToggle = computed(() => {
      return isOpen.value ? "ChevronUp" : "ChevronDown";
    });

    const textToggle = computed(() => {
      return isOpen.value ? "Erweiterte Suche schließen" : "Erweiterte Suche öffnen";
    });

    const styleToggle = computed(() => {
      return isOpen.value ? "" : "display: none;";
    });

    const onOpen = () => {
      isOpen.value = true;
    };

    const onClose = () => {
      isOpen.value = false;
    };

    const onToggle = () => {
      if (isOpen.value) {
        onClose();
      } else {
        onOpen();
      }
    };

    const onSearch = () => {
      onClose();
      emit("startSearch");
    };

    const tableId = inject("tableId");
    const eventName = `eventATableFilterTopOnOpen_${ tableId.value }`;
    const initEventBus = () => {
      EventBus.$on(eventName, onOpen);
    };

    const destroyEventBus = () => {
      EventBus.$off(eventName, onOpen);
    };

    initEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
    });

    return {
      iconToggle,
      isOpen,
      onSearch,
      onToggle,
      styleToggle,
      textToggle,
    };
  },
  render() {
    const BUTTON_SEARCH = h("button", {
      class: "a_btn a_btn_primary a_text_nowrap",
      type: "button",
      disabled: this.isLoadingTable,
      onClick: this.onSearch,
    }, [
      h(AIcon, {
        class: "a_mr_2",
        icon: "Search",
      }),
      h("span", {}, "Suche starten"),
    ]);

    return h("div", {
      class: "a_table__filters_top",
    }, [
      h("form", null, [
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
          h("div", {
            class: "a_column",
          }, [

            h("button", {
              class: "a_btn a_btn_link a_text_nowrap",
              type: "button",
              onClick: this.onToggle,
            }, [
              h("span", {}, this.textToggle),
              h(AIcon, {
                class: "a_ml_2",
                icon: this.iconToggle,
              }),
            ]),
          ]),
        ]),
        h("div", {
          class: "a_table__filters_top__always_visible",
          style: this.styleToggle,
        }, [
          this.filtersGroup.alwaysVisible.map(filter => {
            return h(ATableFiltersTopFilter, {
              key: filter.id,
              filter,
              modelFilters: this.modelFilters,
            });
          }),
          this.filtersVisible.map(filter => {
            return h(ATableFiltersTopFilter, {
              key: filter.id,
              filter: filter,
              modelFilters: this.modelFilters,
            });
          }),
          h("div", {}, [
            BUTTON_SEARCH,
          ]),
        ]),
      ]),
    ]);
  },
};
