import {
  computed,
  h,
  inject,
  onBeforeUnmount,
  ref,
} from "vue";

import AButton from "../../AButton/AButton";
import ATableFiltersTopFilter from "./ATableFiltersTopFilter";
import ATableFiltersTopFilterUi from "./ATableFiltersTopFilterUi";

import VisibleAPI from "./compositionAPI/VisibleAPI";

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
      return isOpen.value ? "_ERWEITERE_SUCHE_SCHLIESSEN_" : "_ERWEITERE_SUCHE_OEFFNEN_";
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

    const {
      isBtnToggleVisible,
    } = VisibleAPI(props);

    initEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
    });

    return {
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
      text: "_SUCHE_STARTEN_",
      prevent: true,
      stop: true,
      disabled: this.isLoadingTable,
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
              filter,
              modelFilters: this.modelFilters,
            }, this.$slots);
          }),
          this.filtersVisible.map(filter => {
            return h(ATableFiltersTopFilter, {
              key: filter.id,
              filter: filter,
              modelFilters: this.modelFilters,
            }, this.$slots);
          }),
          h("div", {}, [
            BUTTON_SEARCH,
          ]),
        ]),
      ]),
    ]);
  },
};
