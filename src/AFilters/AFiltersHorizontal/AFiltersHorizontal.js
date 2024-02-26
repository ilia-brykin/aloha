import {
  h,
  onBeforeUnmount,
} from "vue";

import ADropdown from "../../ADropdown/ADropdown";
import AElement from "../../AElement/AElement";
import AFiltersSaveModal from "../AFiltersSaveModal/AFiltersSaveModal";
import AForm from "../../ui/AForm/AForm";
import AIcon from "../../AIcon/AIcon";
import ASelect from "../../ui/ASelect/ASelect";
import ATranslation from "../../ATranslation/ATranslation";

import DropdownAPI from "./compositionAPI/DropdownAPI";
import EventBusAPI from "./compositionAPI/EventBusAPI";
import FiltersHiddenAPI from "./compositionAPI/FiltersHiddenAPI";
import FiltersSaveAPI from "./compositionAPI/FiltersSaveAPI";
import FiltersSavedDeleteAPI from "./compositionAPI/FiltersSavedDeleteAPI";
import FormAPI from "./compositionAPI/FormAPI";
import IdAPI from "./compositionAPI/IdAPI";
import SearchAPI from "./compositionAPI/SearchAPI";


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
    mainModel: {
      type: Object,
      required: false,
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
      dataForForm,
    } = FormAPI(props);

    const {
      closeDropdown,
      dropdownRef,
      isDropdownVisible,
      openDropdown,
    } = DropdownAPI(props);

    const {
      idFilterTop,
    } = IdAPI(props);

    const {
      onSearch,
    } = SearchAPI(props, context, {
      closeDropdown,
    });

    const {
      destroyEventBus,
      initEventBus,
    } = EventBusAPI(props, {
      openDropdown,
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
      filtersSavedLocal,
      isModalSaveVisible,
      isModelFilterSavedNew,
      modelFiltersSaved,
      openModalSave,
      selectorCloseIds,
    } = FiltersSaveAPI(props, {
      openDropdown,
    });

    const {
      buttonDeleteId,
      openDeleteConfirm,
      textScreenreaderButtonDeleteFiltersSaved,
      titleButtonDeleteFiltersSaved,
    } = FiltersSavedDeleteAPI(props, {
      changeModelFiltersSaved,
      idFilterTop,
      isModelFilterSavedNew,
      modelFiltersSaved,
    });

    initEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
    });

    return {
      isDropdownVisible,
      closeDropdown,
      dropdownRef,
      addFiltersVisible,
      buttonSaveComponentId,
      changeModelFiltersSaved,
      filtersSavedLocal,
      closeModalSave,
      deleteFiltersVisible,
      dataForForm,
      filtersHidden,
      hasFiltersHiddenDefault,
      idFilterTop,
      isModalSaveVisible,
      modelFiltersSaved,
      openModalSave,
      onSearch,
      selectorCloseIds,
      buttonDeleteId,
      isModelFilterSavedNew,
      openDeleteConfirm,
      textScreenreaderButtonDeleteFiltersSaved,
      titleButtonDeleteFiltersSaved,
    };
  },
  render() {
    if (!this.isDropdownVisible) {
      return "";
    }

    return [
      h(ADropdown, {
        ref: "dropdownRef",
        buttonIconLeft: "Filter",
        buttonText: "Filter",
        buttonClass: "a_btn a_btn_primary a_filter_horizontal__btn_dropdown",
        dropdownTag: "div",
        dropdownClass: "a_filter_horizontal__wrapper",
        dropdownRenderDefault: true,
        isCloseByClickInside: false,
        hasCaret: false,
        inBody: true,
        lockArrowsNavigation: false,
        lockTabNavigation: false,
        floatingFlip: {
          use: true,
          fallbackPlacements: ["bottom", "top", "left", "right", "auto"],
        },
      }, {
        ...this.$slots,
        dropdown: () => {
          return h("div", {
            class: "a_filter_horizontal",
          }, [
            h("div", {
              class: "a_filter_horizontal__header__wrapper",
            }, [
              h("div", {
                class: "a_filter_horizontal__header",
              }, [
                h("div", {
                  class: "a_filter_horizontal__header__texts",
                }, [
                  h(ATranslation, {
                    class: "a_filter_horizontal__header__texts__filter",
                    tag: "span",
                    text: "_A_FILTERS_HOR_FILTER_HEADER_"
                  }),
                this.isModelFilterSavedNew ?
                  h(ATranslation, {
                    class: "a_filter_horizontal__header__texts__new",
                    tag: "em",
                    text: this.modelFiltersSaved,
                  }) :
                  h("span", {}, this.modelFiltersSaved),
                ]),
              this.canSave ?
                h(ASelect, {
                  modelValue: this.modelFiltersSaved,
                  change: this.changeModelFiltersSaved,
                  class: "a_filters_top__save_select",
                  data: this.filtersSavedLocal,
                  deselect: false,
                  // disabled: !this.filtersSaved.length,
                  keyId: "label",
                  keyLabel: "label",
                  keyGroup: "group",
                  label: "_A_FILTERS_SAVE_SELECT_",
                  menuWidthType: "by_content",
                  search: true,
                  translateData: true,
                  type: "select",
                }) :
                "",
              ]),
            ]),
            h("div", {
              class: "a_filter_horizontal__body__wrapper",
            }, [
              h("div", {
                class: "a_filter_horizontal__body",
              }, [
                h(AForm, {
                  idPrefix: this.idFilterTop,
                  class: "a_filter_horizontal__body__form",
                  classColumns: "",
                  classColumnDefault: "",
                  data: this.dataForForm,
                  showErrors: false,
                  modelValue: this.unappliedModel,
                  onChange: this.onUpdateModelFilters,
                }, {
                  ...this.$slots,
                  groupAppend: ({ item }) => h(AElement, {
                    type: "button",
                    class: "a_btn a_btn_primary a_ml_2",
                    title: "_A_FILTERS_TOP_CLOSE_",
                    textScreenReader: "_A_FILTERS_TOP_CLOSE_",
                    iconLeft: "Close",
                    stop: true,
                    onClick: () => this.deleteFiltersVisible({ filter: item }),
                  }),
                  formDataAppend: () => h("div", {
                    class: "a_filter_horizontal__add_filter__wrapper",
                  }, [
                    h(ASelect, {
                      buttonClassDefault: "a_btn a_btn_primary a_filter_horizontal__add_filter",
                      change: this.addFiltersVisible,
                      data: this.filtersHidden,
                      hasCaret: false,
                      isLabelFloat: false,
                      keyGroup: "group",
                      keyId: "id",
                      keyLabel: "label",
                      label: "_A_FILTERS_ADD_FILTER_",
                      labelClass: "a_sr_only",
                      menuWidthType: "by_content",
                      placement: "bottom-start",
                      search: true,
                      translateData: true,
                      type: "select",
                    }, {
                      fixedPlaceholder: () => [
                        h(ATranslation, {
                          tag: "span",
                          ariaHidden: true,
                          class: "a_position_absolute_all",
                          title: "_A_FILTERS_ADD_FILTER_",
                        }),
                        h(AIcon, {
                          icon: "Plus",
                        }),
                      ],
                    }),
                  ]),
                  formAppend: () => this.canSave ?
                  h("div", {
                    class: "a_filter_horizontal__save_actions",
                  }, [
                    h(AElement, {
                      id: this.buttonSaveComponentId,
                      class: "a_btn a_btn_primary",
                      iconLeft: "FloppyDisk",
                      type: "button",
                      text: "_A_FILTERS_SAVE_FILTER_SAVED_BTN_TEXT_",
                      onClick: this.openModalSave,
                    }),
                    h(AElement, {
                      id: this.buttonDeleteId,
                      ariaDisabled: this.isModelFilterSavedNew,
                      class: "a_btn a_btn_secondary",
                      iconLeft: "Trash",
                      text: {
                        desktop: "_A_FILTERS_DELETE_FILTER_SAVED_BTN_TEXT_",
                      },
                      textAriaHidden: true,
                      textScreenReader: this.textScreenreaderButtonDeleteFiltersSaved,
                      title: this.titleButtonDeleteFiltersSaved,
                      type: "button",
                      onClick: this.openDeleteConfirm,
                    }),
                  ]) :
                  "",
                }),
              ]),
              h("div", {
                class: "a_filter_horizontal__footer",
              }, [
                h("div", {
                  class: "a_filter_horizontal__footer__actions",
                }, [
                  h(AElement, {
                    type: "button",
                    class: "a_btn a_btn_primary a_text_nowrap a_filter_horizontal__footer__actions__btn_search",
                    iconLeft: "Search",
                    text: "_A_FILTERS_START_SEARCH_",
                    disabled: this.disabled,
                    onClick: this.onSearch,
                  }),
                  h(AElement, {
                    type: "button",
                    class: "a_btn a_btn_secondary a_text_nowrap a_filter_horizontal__footer__actions__btn_close",
                    text: "_A_FILTERS_HOR_CLOSE_DROPDOWN_",
                    onClick: this.closeDropdown,
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      }),
      this.isModalSaveVisible ?
        h(AFiltersSaveModal, {
          changeModelFiltersSaved: this.changeModelFiltersSaved,
          filtersSaved: this.filtersSaved,
          isModelFilterSavedNew: this.isModelFilterSavedNew,
          modelFiltersSaved: this.modelFiltersSaved,
          selectorCloseIds: this.selectorCloseIds,
          updateFiltersSaved: this.updateFiltersSaved,
          onClose: this.closeModalSave,
        }) :
        ""
    ];

    // return h("div", {
    //   id: this.idFilterTop,
    //   class: "a_filters_top",
    // }, [
    //   h("form", {
    //     class: "a_filters_top__form",
    //   }, [
    //     h("div", {
    //       class: "a_filters_top__header",
    //     }, [
    //       h(AFiltersHorizontalFilter, {
    //         id: this.id,
    //         class: "a_filters_top__filter_main",
    //         closable: false,
    //         filter: this.filtersGroup.main,
    //         isFilterMain: true,
    //         unappliedModel: this.unappliedModel,
    //         updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
    //         onUpdateModelFilters: this.onUpdateModelFilters,
    //       }, {
    //         ...this.$slots,
    //         btnSearchStart: () => {
    //           return BTN_SEARCH;
    //         },
    //       }),
    //     ]),
    //
    //     this.isBtnToggleVisible && h(AButton, {
    //       class: "a_btn a_btn_secondary a_text_nowrap a_filters_top__toggle_filter",
    //       type: "button",
    //       text: this.textToggle,
    //       iconRight: this.iconToggle,
    //       onClick: this.onToggle,
    //     }),
    //     h("div", {
    //       class: "a_filters_top__always_visible",
    //       style: this.styleToggle,
    //     }, [
    //       this.filtersGroup.alwaysVisible.map(filter => {
    //         return h(AFiltersHorizontalFilter, {
    //           key: filter.id,
    //           closable: false,
    //           filter,
    //           unappliedModel: this.unappliedModel,
    //           onUpdateModelFilters: this.onUpdateModelFilters,
    //           updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
    //           id: this.id,
    //         }, this.$slots);
    //       }),
    //       this.filtersVisible.map(filter => {
    //         return h(AFiltersHorizontalFilter, {
    //           key: filter.id,
    //           closable: true,
    //           filter: filter,
    //           unappliedModel: this.unappliedModel,
    //           onUpdateModelFilters: this.onUpdateModelFilters,
    //           id: this.id,
    //           onDeleteFiltersVisible: this.deleteFiltersVisible,
    //           updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
    //         }, this.$slots);
    //       }),
    //       h("div", {
    //         class: "a_filters_top__footer",
    //       }, [
    //         h(ASelect, {
    //           class: "a_filters_top__footer__select",
    //           type: "select",
    //           data: this.filtersHidden,
    //           keyGroup: "group",
    //           keyLabel: "label",
    //           keyId: "id",
    //           label: "_A_FILTERS_ADD_FILTER_",
    //           menuWidthType: "by_content",
    //           translateData: true,
    //           disabled: !this.filtersHidden.length,
    //           search: true,
    //           change: this.addFiltersVisible,
    //         }),
    //         BTN_SEARCH,
    //       ]),
    //     ]),
    //   ]),
    //   this.isModalSaveVisible && h(AFiltersSaveModal, {
    //     changeModelFiltersSaved: this.changeModelFiltersSaved,
    //     filtersSaved: this.filtersSaved,
    //     modelFiltersSaved: this.modelFiltersSaved,
    //     selectorCloseIds: this.selectorCloseIds,
    //     updateFiltersSaved: this.updateFiltersSaved,
    //     onClose: this.closeModalSave,
    //   }),
    //   this.canSave && h("div", {
    //     class: "a_filters_top__save",
    //   }, [
    //     h(ASelect, {
    //       modelValue: this.modelFiltersSaved,
    //       change: this.changeModelFiltersSaved,
    //       class: "a_filters_top__save_select",
    //       data: this.filtersSaved,
    //       deselect: true,
    //       disabled: !this.filtersSaved.length,
    //       keyId: "label",
    //       keyLabel: "label",
    //       label: "_A_FILTERS_SAVE_SELECT_",
    //       menuWidthType: "by_content",
    //       search: true,
    //       translateData: true,
    //       type: "select",
    //     }),
    //     h(AButton, {
    //       id: this.buttonSaveComponentId,
    //       onClick: this.openModalSave,
    //       class: "a_btn a_btn_secondary a_text_nowrap a_filters_top__delete_filter_saved",
    //       text: {
    //         desktop: "_A_FILTERS_SAVE_BTN_",
    //       },
    //       iconLeft: {
    //         mobile: "FloppyDisk",
    //       },
    //       textScreenReader: {
    //         mobile: "_A_FILTERS_SAVE_BTN_",
    //       },
    //     }),
    //     h(AButton, {
    //       id: this.buttonDeleteId,
    //       class: "a_btn a_btn_secondary",
    //       iconLeft: "Trash",
    //       textScreenReader: this.titleButtonDeleteFiltersSaved,
    //       title: this.titleButtonDeleteFiltersSaved,
    //       extra: {
    //         name: this.modelFiltersSaved,
    //       },
    //       ariaDisabled: this.hasNotModelFiltersSaved,
    //       onClick: this.openDeleteConfirm,
    //     }),
    //   ]),
    // ]);
  },
};
