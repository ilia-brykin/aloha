import {
  h,
  onBeforeUnmount,
} from "vue";
import {
  ADropdown,
  AElement,
  AForm,
  AIcon,
  ASelect,
  ATranslation,
} from "../../index";

import AFiltersSaveModal from "../AFiltersSaveModal/AFiltersSaveModal";

import DropdownAPI from "./compositionAPI/DropdownAPI";
import EventBusAPI from "./compositionAPI/EventBusAPI";
import FiltersHiddenAPI from "./compositionAPI/FiltersHiddenAPI";
import FiltersSaveAPI from "./compositionAPI/FiltersSaveAPI";
import FiltersSavedDeleteAPI from "./compositionAPI/FiltersSavedDeleteAPI";
import FormAPI from "./compositionAPI/FormAPI";
import IdAPI from "./compositionAPI/IdAPI";
import SearchAPI from "./compositionAPI/SearchAPI";

const Filter = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>`;
const Floppy2Fill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy2-fill" viewBox="0 0 16 16">
  <path d="M12 2h-2v3h2z"/>
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5V2.914a1.5 1.5 0 0 0-.44-1.06L14.147.439A1.5 1.5 0 0 0 13.086 0zM4 6a1 1 0 0 1-1-1V1h10v4a1 1 0 0 1-1 1zM3 9h10a1 1 0 0 1 1 1v5H2v-5a1 1 0 0 1 1-1"/>
</svg>`;
const PlusLg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>`;
const Search = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024">
    <path d="M761.37 637.327l256.642 256.642q5.988 6.844 5.988 15.399t-5.988 15.399l-93.246 93.246q-6.844 5.988-15.399 5.988t-15.399-5.988l-256.642-256.642q-101.802 66.727-223.278 66.727-171.095 0-292.572-121.477t-121.477-292.572 121.477-292.572 292.572-121.477 292.572 121.477 121.477 292.572q0 121.477-66.727 223.278zM130.887 414.049q0 116.344 82.981 199.325t200.181 82.981 199.753-82.553 82.553-199.753-82.553-199.753-199.753-82.553-200.181 82.981-82.981 199.325z"></path>
</svg>
`;
const Trash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;
const XLg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;


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
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
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
    id: {
      type: String,
      required: true,
    },
    mainModel: {
      type: Object,
      required: false,
    },
    onUpdateModelFilters: {
      type: Function,
      required: true,
    },
    unappliedModel: {
      type: Object,
      required: true,
    },
    updateDataKeyByIdFromFilter: {
      type: Function,
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
      initEventName,
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
      initModelFiltersSaved,
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
      isConfirmHidden,
      openDeleteConfirm,
      textScreenreaderButtonDeleteFiltersSaved,
      titleButtonDeleteFiltersSaved,
    } = FiltersSavedDeleteAPI(props, {
      changeModelFiltersSaved,
      idFilterTop,
      isModelFilterSavedNew,
      modelFiltersSaved,
    });

    initEventName();
    initModelFiltersSaved();
    initEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
    });

    return {
      addFiltersVisible,
      buttonDeleteId,
      buttonSaveComponentId,
      changeModelFiltersSaved,
      closeDropdown,
      closeModalSave,
      dataForForm,
      deleteFiltersVisible,
      dropdownRef,
      filtersHidden,
      filtersSavedLocal,
      hasFiltersHiddenDefault,
      idFilterTop,
      initModelFiltersSaved,
      isConfirmHidden,
      isDropdownVisible,
      isModalSaveVisible,
      isModelFilterSavedNew,
      modelFiltersSaved,
      onSearch,
      openDeleteConfirm,
      openModalSave,
      selectorCloseIds,
      textScreenreaderButtonDeleteFiltersSaved,
      titleButtonDeleteFiltersSaved,
    };
  },
  render() {
    if (!this.isDropdownVisible) {
      return null;
    }

    return [
      h(ADropdown, {
        ref: "dropdownRef",
        buttonIconLeft: Filter,
        buttonText: "Filter",
        buttonClass: "a_btn a_btn_primary a_btn_small a_filter_horizontal__btn_dropdown",
        dropdownTag: "div",
        dropdownClass: "a_filter_horizontal__wrapper",
        dropdownRenderDefault: true,
        isCloseByClickInside: false,
        hasCaret: false,
        inBody: true,
        lockArrowsNavigation: false,
        lockTabNavigation: false,
        useEscape: !this.isModalSaveVisible && this.isConfirmHidden,
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
                    text: "_A_FILTERS_HOR_FILTER_HEADER_",
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
                  deselectable: false,
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
                  classColumnDefault: "",
                  classColumns: "",
                  data: this.dataForForm,
                  excludeRenderAttributes: this.excludeRenderAttributes,
                  modelValue: this.unappliedModel,
                  showErrors: false,
                  onChange: this.onUpdateModelFilters,
                }, {
                  ...this.$slots,
                  groupAppend: ({ item }) => h(AElement, {
                    type: "button",
                    class: "a_btn a_btn_primary a_ml_2",
                    title: "_A_FILTERS_TOP_CLOSE_",
                    textScreenReader: "_A_FILTERS_TOP_CLOSE_",
                    iconLeft: XLg,
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
                      disabled: !this.filtersHidden.length,
                      isLabelFloat: false,
                      keyGroup: "group",
                      keyId: "id",
                      keyLabel: "label",
                      label: "_A_FILTERS_ADD_FILTER_",
                      labelClass: "a_sr_only",
                      menuWidthType: "by_content",
                      sortOrderGroup: "asc",
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
                          icon: PlusLg,
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
                      iconLeft: Floppy2Fill,
                      type: "button",
                      text: "_A_FILTERS_SAVE_FILTER_SAVED_BTN_TEXT_",
                      onClick: this.openModalSave,
                    }),
                    h(AElement, {
                      id: this.buttonDeleteId,
                      ariaDisabled: this.isModelFilterSavedNew,
                      class: "a_btn a_btn_secondary",
                      iconLeft: Trash,
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
                    iconLeft: Search,
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
        "",
    ];
  },
};
