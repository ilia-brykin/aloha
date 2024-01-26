import {
  h,
  onBeforeUnmount,
} from "vue";

import AButton from "../../AButton/AButton";
import ASelect from "../../ui/ASelect/ASelect";
import AFiltersSaveModal from "../AFiltersSaveModal/AFiltersSaveModal";
import AFiltersHorizontalFilter from "./AFiltersHorizontalFilter/AFiltersHorizontalFilter";

import EventBusAPI from "./compositionAPI/EventBusAPI";
import FiltersHiddenAPI from "./compositionAPI/FiltersHiddenAPI";
import FiltersSaveAPI from "./compositionAPI/FiltersSaveAPI";
import FiltersSavedDeleteAPI from "./compositionAPI/FiltersSavedDeleteAPI";
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
      iconToggle,
      isBtnToggleVisible,
      isOpen,
      onClose,
      onOpen,
      onToggle,
      styleToggle,
      textToggle,
    } = ToggleAPI(props);

    const {
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
      addFiltersVisible,
      deleteFiltersVisible,
      filtersHidden,
      hasFiltersHiddenDefault,
    } = FiltersHiddenAPI(props, context);

    const {
      buttonSaveComponentId,
      changeModelFiltersSaved,
      closeModalSave,
      isModalSaveVisible,
      modelFiltersSaved,
      openModalSave,
      selectorCloseIds,
    } = FiltersSaveAPI(props, {
      onOpen,
    });

    const {
      buttonDeleteId,
      disabledButtonDeleteFiltersSaved,
      openDeleteConfirm,
      titleButtonDeleteFiltersSaved,
    } = FiltersSavedDeleteAPI(props, {
      changeModelFiltersSaved,
      idFilterTop,
      modelFiltersSaved,
    });

    initEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
    });

    return {
      addFiltersVisible,
      buttonSaveComponentId,
      changeModelFiltersSaved,
      closeModalSave,
      deleteFiltersVisible,
      filtersHidden,
      hasFiltersHiddenDefault,
      idFilterTop,
      isBtnToggleVisible,
      isModalSaveVisible,
      onToggle,
      textToggle,
      isOpen,
      modelFiltersSaved,
      openModalSave,
      iconToggle,
      onSearch,
      selectorCloseIds,
      styleToggle,
      buttonDeleteId,
      disabledButtonDeleteFiltersSaved,
      openDeleteConfirm,
      titleButtonDeleteFiltersSaved,
    };
  },
  render() {
    const BTN_SEARCH = h(AButton, {
      class: "a_btn a_btn_primary a_text_nowrap a_filters_top__search",
      iconLeft: "Search",
      type: "submit",
      text: {
        desktop: "_A_FILTERS_START_SEARCH_",
      },
      textScreenReader: {
        mobile: "_A_FILTERS_START_SEARCH_",
      },
      prevent: true,
      stop: true,
      disabled: this.disabled,
      onClick: this.onSearch,
    });

    return h("div", {
      id: this.idFilterTop,
      class: "a_filters_top",
    }, [
      h("form", {
        class: "a_filters_top__form",
      }, [
        h("div", {
          class: "a_filters_top__header",
        }, [
          h(AFiltersHorizontalFilter, {
            id: this.id,
            class: "a_filters_top__filter_main",
            closable: false,
            filter: this.filtersGroup.main,
            isFilterMain: true,
            unappliedModel: this.unappliedModel,
            updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
            onUpdateModelFilters: this.onUpdateModelFilters,
          }, {
            ...this.$slots,
            btnSearchStart: () => {
              return BTN_SEARCH;
            },
          }),
        ]),

        this.isBtnToggleVisible && h(AButton, {
          class: "a_btn a_btn_secondary a_text_nowrap a_filters_top__toggle_filter",
          type: "button",
          text: this.textToggle,
          iconRight: this.iconToggle,
          onClick: this.onToggle,
        }),
        h("div", {
          class: "a_filters_top__always_visible",
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
          h("div", {
            class: "a_filters_top__footer",
          }, [
            h(ASelect, {
              class: "a_filters_top__footer__select",
              type: "select",
              data: this.filtersHidden,
              keyGroup: "group",
              keyLabel: "label",
              keyId: "id",
              label: "_A_FILTERS_ADD_FILTER_",
              menuWidthType: "by_content",
              translateData: true,
              disabled: !this.filtersHidden.length,
              search: true,
              change: this.addFiltersVisible,
            }),
            BTN_SEARCH,
          ]),
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
      this.canSave && h("div", {
        class: "a_filters_top__save",
      }, [
        h(ASelect, {
          modelValue: this.modelFiltersSaved,
          change: this.changeModelFiltersSaved,
          class: "a_filters_top__save_select",
          data: this.filtersSaved,
          deselect: true,
          disabled: !this.filtersSaved.length,
          keyId: "label",
          keyLabel: "label",
          label: "_A_FILTERS_SAVE_SELECT_",
          menuWidthType: "by_content",
          search: true,
          translateData: true,
          type: "select",
        }),
        h(AButton, {
          id: this.buttonSaveComponentId,
          onClick: this.openModalSave,
          class: "a_btn a_btn_secondary a_text_nowrap a_filters_top__delete_filter_saved",
          text: {
            desktop: "_A_FILTERS_SAVE_BTN_",
          },
          iconLeft: {
            mobile: "FloppyDisk",
          },
          textScreenReader: {
            mobile: "_A_FILTERS_SAVE_BTN_",
          },
        }),
        h(AButton, {
          id: this.buttonDeleteId,
          class: "a_btn a_btn_secondary",
          iconLeft: "Trash",
          textScreenReader: this.titleButtonDeleteFiltersSaved,
          title: this.titleButtonDeleteFiltersSaved,
          extra: {
            name: this.modelFiltersSaved,
          },
          ariaDisabled: this.disabledButtonDeleteFiltersSaved,
          onClick: this.openDeleteConfirm,
        }),
      ]),
    ]);
  },
};
