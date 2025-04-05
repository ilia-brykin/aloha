import {
  h,
  onBeforeUnmount,
  Teleport,
  watch,
} from "vue";
import {
  ACheckboxRadioGroups,
  ACloak,
  AElement,
  AErrorsText,
  AFormHelpText,
  AFormReadonly,
  AIcon,
  AInput,
  AKeyId,
  ALabel,
  APlacements,
  APopupAPI,
  ATranslation,
  UiAPI,
  UiDataFromServerAPI,
  UIDataGroupAPI,
  UiDataSortAPI,
  UiDataWatchEmitAPI,
  UiDataWithKeyIdAndLabelAPI,
  UIExcludeRenderAttributesAPI,
  UiLabelClickEventBusAPI,
  UiLoadingAPI,
  UiSearchAPI,
  UiStyleHideAPI,
} from "../../index";

import ASelectElement from "./ASelectElement/ASelectElement";
import ASelectLabelElement from "./ASelectLabelElement/ASelectLabelElement";
import ASelectValueCloseable from "./ASelectValueCloseable/ASelectValueCloseable";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import DisabledAPI from "./compositionAPI/DisabledAPI";
import DividerAPI from "./compositionAPI/DividerAPI";
import ExclusiveOptionsAPI from "./compositionAPI/ExclusiveOptionsAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import ModelChangeAPI from "./compositionAPI/ModelChangeAPI";
import PopperContainerAPI from "../../ATooltip/compositionAPI/PopperContainerAPI";
import SelectedTitleAPI from "./compositionAPI/SelectedTitleAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import CheckLg from "aloha-svg/dist/js/bootstrap/CheckLg";
import Search from "aloha-svg/dist/js/bootstrap/Search";
import XLg from "aloha-svg/dist/js/bootstrap/XLg";
import {
  ASelectPluginOptions,
} from "../../plugins/ASelectPlugin";
import {
  take,
  uniqueId,
} from "lodash-es";

export default {
  name: "ASelect",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    apiSaveId: {
      type: String,
      required: false,
      default: undefined,
    },
    autocomplete: {
      type: String,
      required: false,
      default: undefined,
    },
    buttonClass: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.buttonClass,
    },
    buttonClassDefault: {
      type: [String, Object],
      required: false,
      default: "a_form_control a_select_toggle",
    },
    caretIcon: {
      type: [String, Object],
      required: false,
      default: () => ASelectPluginOptions.propsDefault.caretIcon,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    class: {
      type: [String, Object],
      required: false,
    },
    countMultiselect: {
      type: Number,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.countMultiselect,
    },
    data: {
      type: Array,
      required: false,
      default: undefined,
    },
    dataExtra: {
      type: Array,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.dataExtra,
    },
    dependencies: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    deselectable: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.deselectable,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    errors: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    errorsAll: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    exceededItemsDeletable: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.exceededItemsDeletable,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    exclusiveOptionLabel: {
      type: String,
      required: false,
      default: "_A_SELECT_EXCLUSIVE_",
    },
    exclusiveOptionValue: {
      type: [String, Number, Boolean],
      required: false,
      default: "_exclusive_",
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    hasCaret: {
      type: Boolean,
      required: false,
      default: true,
    },
    helpText: {
      type: String,
      required: false,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_ui_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    inBody: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.inBody,
    },
    isCloseByClick: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.isCloseByClick,
    },
    isDataSimpleArray: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.isDataSimpleArray,
    },
    isDeselectAll: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.isDeselectAll,
    },
    isExclusiveOptionEnabled: {
      type: Boolean,
      required: false,
      default: false,
      validator: (value, props) => {
        const type = props?.type;
        if (type !== "multiselect") {
          return value === false;
        }
        return true;
      },
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: true,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    isSelectAll: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.isSelectAll,
    },
    isSelectionCloseable: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.isSelectionCloseable,
    },
    keyDisabled: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.keyDisabled,
    },
    keyDisabledCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyGroup: {
      type: [String, Number, Array],
      required: false,
      default: () => ASelectPluginOptions.propsDefault.keyGroup,
    },
    keyGroupLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyId: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.keyId,
    },
    keyLabel: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.keyLabel,
    },
    keyLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyTitle: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.keyTitle,
    },
    keyTitleCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    maxCountMultiselect: {
      type: Number,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.maxCountMultiselect,
      validator: value => value > 0,
    },
    menuWidthType: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.menuWidthType,
      validator: value => ["as_button", "by_content"].indexOf(value) !== -1,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelUndefined: {
      required: false,
      default: null,
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      required: false,
      default: () => ASelectPluginOptions.propsDefault.modelValue,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    placeholder: {
      type: String,
      required: false,
      default: undefined,
    },
    placement: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.placement,
      validator: placement => APlacements.indexOf(placement) !== -1,
    },
    popperContainerId: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.popperContainerId,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.readonlyDefault,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    search: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.search,
    },
    searchApi: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.searchApi,
    },
    searchApiKey: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.searchApiKey,
    },
    searchInGroup: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    searchOutside: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.searchOutside,
    },
    searchTextInHtml: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.searchTextInHtml,
    },
    searchTimeout: {
      type: Number,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.searchTimeout,
    },
    selectMenuClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    slotName: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.slotName,
    },
    sortOrder: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.sortOrder,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    sortOrderGroup: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.sortOrderGroup,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    textDeselectAll: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.textDeselectAll,
    },
    textSelectAll: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.textSelectAll,
    },
    translateData: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.translateData,
    },
    type: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.type,
      validator: value => ["select", "multiselect"].indexOf(value) !== -1,
    },
    url: {
      type: String,
      required: false,
      default: undefined,
    },
    urlParams: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "blur",
    "focus",
    "onSearchOutside",
    "open",
    "update:modelValue",
    "updateData",
  ],
  setup(props, context) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      ariaDescribedbyLocal,
      changeModel,
      clearModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      closePopup,
      openPopup,
    } = APopupAPI();

    const {
      dataAll,
      dataFromServer,
      dataExtraLocal,
      dataKeyByKeyIdLocal,
      dataLocal,
      hasDataExtra,
    } = UiDataWithKeyIdAndLabelAPI(props);

    const {
      loadDataFromServer,
      loadDataFromServerForSearchAPI,
      loadingDataFromServer,
      loadingSearchApi,
      onSearchInApi,
      searchApiLocal,
      updateUrlPropsComputed,
      urlPropsComputed,
    } = UiDataFromServerAPI(props, {
      changeModel,
      dataExtraLocal,
      dataFromServer,
    });

    const {
      loadingLocal,
    } = UiLoadingAPI(props, {
      loadingDataFromServer,
    });

    const {
      addPopperContainerInBody,
      popperContainerIdSelector,
    } = PopperContainerAPI(props);

    UiDataWatchEmitAPI(context, {
      dataKeyByKeyIdLocal,
      dataLocal,
    });

    const {
      disabledAttribut,
      disabledLocal,
      disabledLocalAttribut,
      isExclusiveOptionSelected,
    } = DisabledAPI(props);

    const {
      exclusiveOption,
      exclusiveDataKeyByKeyIdLocal,
    } = ExclusiveOptionsAPI(props);

    const {
      isModelLengthLimitExceeded,
      isModelValue,
      isMultiselect,
      limitExceededModelData,
      modelValueLength,
      modelValueMultiselectFiltered,
    } = ModelAPI(props, {
      dataKeyByKeyIdLocal,
    });

    const {
      ariaLabelledby,
      containerId,
      idForList,
      tabindex,
    } = AttributesAPI(props, {
      htmlIdLocal,
    });

    const {
      dataSort,
    } = UiDataSortAPI(props, {
      data: dataLocal,
    });

    const {
      dataGrouped,
      groupsForLever,
      hasKeyGroup,
      keyGroupArray,
    } = UIDataGroupAPI(props, {
      data: dataSort,
    });

    const {
      hasNotElementsExclusiveWithSearch,
      hasNotElementsExtraWithSearch,
      hasNotElementsWithSearch,
      idForButtonSearchOutside,
      modelSearch,
      modelSearchLowerCase,
      modelSearchOutside,
      onSearchOutside,
      searching,
      searchingElements,
      searchingElementsExclusive,
      searchingElementsExtra,
      searchingGroups,
      searchingGroupsWithSearchInGroup,
      searchOutsideOrApi,
      searchOutsideRef,
      updateModelSearch,
      updateModelSearchOutside,
    } = UiSearchAPI(props, context, {
      data: dataSort,
      dataExtra: dataExtraLocal,
      exclusiveOption,
      groupsForLever,
      hasKeyGroup,
      htmlIdLocal,
      keyGroupArray,
      onSearchInApi,
      searchApiLocal,
    });

    const {
      buttonRef,
      handleKeydown,
      isOpen,
      menuParentRef,
      menuRef,
      togglePopover,
    } = ToggleAPI(props, context, {
      closePopup,
      htmlIdLocal,
      openPopup,
    });

    const {
      deleteExceededItems,
      onChangeModelValue,
      onDeselectAll,
      onKeydownDeselectAll,
      onKeydownSelectAll,
      onSelectAll,
    } = ModelChangeAPI(props, {
      changeModel,
      dataAll,
      dataKeyByKeyIdLocal,
      disabledLocal,
      isMultiselect,
      togglePopover,
    });

    const {
      hasSelectedTitle,
      selectedTitle,
    } = SelectedTitleAPI(props, {
      dataKeyByKeyIdLocal,
      isModelLengthLimitExceeded,
      isModelValue,
      isMultiselect,
      modelValueLength,
      modelValueMultiselectFiltered,
    });

    const {
      isDividerSelectDeselectVisible,
    } = DividerAPI(props, {
      isMultiselect,
    });

    const {
      destroyEventBusClickLabel,
      initEventBusClickLabel,
    } = UiLabelClickEventBusAPI({
      htmlIdLocal,
      clickLabel: togglePopover,
    });

    watch(urlPropsComputed, updateUrlPropsComputed);

    addPopperContainerInBody({ className: "a_select_container" });
    initEventBusClickLabel();
    loadDataFromServer();
    loadDataFromServerForSearchAPI();

    onBeforeUnmount(() => {
      destroyEventBusClickLabel();
      closePopup({
        id: htmlIdLocal.value,
      });
    });

    return {
      ariaDescribedbyLocal,
      ariaLabelledby,
      attributesToExcludeFromRender,
      buttonRef,
      clearModel,
      componentStyleHide,
      containerId,
      dataExtraLocal,
      dataGrouped,
      dataKeyByKeyIdLocal,
      dataLocal,
      dataSort,
      deleteExceededItems,
      disabledAttribut,
      disabledLocal,
      disabledLocalAttribut,
      errorsId,
      exclusiveDataKeyByKeyIdLocal,
      exclusiveOption,
      groupsForLever,
      handleKeydown,
      hasDataExtra,
      hasKeyGroup,
      hasNotElementsExclusiveWithSearch,
      hasNotElementsExtraWithSearch,
      hasNotElementsWithSearch,
      hasSelectedTitle,
      helpTextId,
      htmlIdLocal,
      idForButtonSearchOutside,
      idForList,
      isDividerSelectDeselectVisible,
      isErrors,
      isExclusiveOptionSelected,
      isModelLengthLimitExceeded,
      isModelValue,
      isMultiselect,
      isOpen,
      limitExceededModelData,
      loadingLocal,
      loadingSearchApi,
      menuParentRef,
      menuRef,
      modelSearch,
      modelSearchLowerCase,
      modelSearchOutside,
      modelValueLength,
      modelValueMultiselectFiltered,
      onBlur,
      onChangeModelValue,
      onDeselectAll,
      onFocus,
      onKeydownDeselectAll,
      onKeydownSelectAll,
      onSearchOutside,
      onSelectAll,
      popperContainerIdSelector,
      searching,
      searchingElements,
      searchingElementsExclusive,
      searchingElementsExtra,
      searchingGroups,
      searchingGroupsWithSearchInGroup,
      searchOutsideOrApi,
      searchOutsideRef,
      selectedTitle,
      tabindex,
      togglePopover,
      updateModelSearch,
      updateModelSearchOutside,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    if (this.readonly) {
      return h(AFormReadonly, {
        ...this.$attrs,
        id: this.htmlIdLocal,
        alwaysTranslate: this.alwaysTranslate,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        modelValue: undefined,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
        type: this.type,
      }, this.isModelValue ?
        () => [
          this.isMultiselect ?
            this.modelValueMultiselectFiltered.length ?
              h("ul", {}, [
                this.modelValueMultiselectFiltered.map(item => {
                  return h(ASelectLabelElement, {
                    key: item,
                    alwaysTranslate: this.alwaysTranslate,
                    data: this.dataKeyByKeyIdLocal[item] || {},
                    slotName: this.slotName,
                    tag: "li",
                  }, this.$slots);
                }),
              ]) :
              "" :
            h(ASelectLabelElement, {
              alwaysTranslate: this.alwaysTranslate,
              data: this.dataKeyByKeyIdLocal[this.modelValue] || {},
              slotName: this.slotName,
            }, this.$slots),
        ] :
        "");
    }

    return h("div", {
      ...this.$attrs,
      class: this.class,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_float: this.isLabelFloat,
          a_form_element__parent_not_empty: this.isModelValue || this.isOpen,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          isLabelFloat: this.isLabelFloat,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          loading: this.loadingLocal,
          required: this.required,
          type: this.type,
          isError: this.isErrors,
        }),
        h("div", {
          class: "a_form_element",
        }, [
          h("div", {
            id: this.containerId,
            ref: "ui_select",
            class: "a_select",
            role: "application",
          }, [
            h("div", {
              ref: "buttonRef",
              id: this.htmlIdLocal,
              autocomplete: this.autocomplete,
              class: [this.buttonClassDefault, this.buttonClass, {
                disabled: this.disabled,
                a_select_toggle_closeable: this.isMultiselect && this.isSelectionCloseable && this.isModelValue,
                a_form_control_invalid: this.isErrors,
              }],
              "aria-labelledby": this.ariaLabelledby,
              role: "combobox",
              tabindex: this.tabindex,
              "aria-haspopup": "listbox",
              ariaExpanded: this.isOpen,
              ariaRequired: this.required,
              ariaDisabled: this.disabledLocal,
              ariaInvalid: this.isErrors,
              "aria-describedby": this.ariaDescribedbyLocal,
              title: this.hasSelectedTitle ? this.selectedTitle : undefined, // TODO: title
              onClick: this.togglePopover,
              onKeydown: this.handleKeydown,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
            }, [
              this.$slots.fixedPlaceholder ?
                this.$slots.fixedPlaceholder({
                  dataKeyByKeyId: this.dataKeyByKeyIdLocal,
                  modelValue: this.modelValue,
                }) :
                this.isModelValue ?
                  this.isMultiselect ?
                    this.isSelectionCloseable ?
                      h("ul", {
                        class: "a_select__ul_closeable",
                      }, [
                        take(this.modelValueMultiselectFiltered, this.countMultiselect).map((item, index) => {
                          return h(ASelectValueCloseable, {
                            key: index,
                            alwaysTranslate: this.alwaysTranslate,
                            data: this.dataKeyByKeyIdLocal[item] || this.exclusiveDataKeyByKeyIdLocal[item] || {},
                            slotName: this.slotName,
                            disabled: this.disabled,
                            onChangeModelValue: this.onChangeModelValue,
                          }, this.$slots);
                        }),
                        this.isModelLengthLimitExceeded && h(ASelectValueCloseable, {
                          key: this.countMultiselect,
                          alwaysTranslate: this.alwaysTranslate,
                          data: this.limitExceededModelData,
                          disabled: this.disabledLocal,
                          hideDeleteButton: !this.exceededItemsDeletable,
                          onChangeModelValue: this.deleteExceededItems,
                        }),
                      ]) :
                      h("span", {
                        class: "a_select__value__label",
                      }, [
                        this.isModelLengthLimitExceeded ?
                          h(ATranslation, {
                            alwaysTranslate: this.alwaysTranslate,
                            text: "_A_SELECT_SELECTED_{{count}}_",
                            extra: {
                              count: this.modelValueLength,
                            },
                          }) :
                          this.modelValueMultiselectFiltered.map((item, index) => {
                            return h("span", {
                              key: index,
                            }, [
                              h("span", null, index !== 0 ? ", " : ""),
                              h(ASelectLabelElement, {
                                alwaysTranslate: this.alwaysTranslate,
                                data: this.dataKeyByKeyIdLocal[item] || {},
                                slotName: this.slotName,
                              }, this.$slots),
                            ]);
                          }),
                      ]) :
                    h(ASelectLabelElement, {
                      alwaysTranslate: this.alwaysTranslate,
                      data: this.dataKeyByKeyIdLocal[this.modelValue] || {},
                      class: "a_select__value__label",
                      slotName: this.slotName,
                    }, this.$slots)
                  : h(ATranslation, {
                    tag: "span",
                    text: this.placeholder,
                  }),
              h(Teleport, {
                to: this.popperContainerIdSelector,
                disabled: !this.inBody,
              }, [
                h("div", {
                  ref: "menuParentRef",
                  id: this.idForList,
                  style: !this.isOpen ? "display: none;" : "",
                  "aria-hidden": !this.isOpen,
                  role: "application",
                }, [
                  h("div", {
                    ref: "menuRef",
                    class: [
                      "a_select_menu",
                      {
                        a_select_menu_by_content: this.menuWidthType === "by_content",
                      },
                      this.selectMenuClass,
                    ],
                    role: "listbox",
                    "aria-labelledby": this.htmlIdLocal,
                    onClick: event => event.stopPropagation(),
                  }, [
                    this.searchOutsideOrApi && h("div", {
                      class: "a_select__search",
                    }, [
                      h("form", {
                        onSubmit: this.onSearchOutside,
                      }, [
                        h("div", {
                          class: "a_select__search__group",
                        }, [
                          h(AInput, {
                            alwaysTranslate: this.alwaysTranslate,
                            label: "_A_SELECT_SEARCH_",
                            inputClass: "a_select__element_clickable",
                            modelValue: this.modelSearchOutside,
                            modelUndefined: "",
                            "onUpdate:modelValue": this.updateModelSearchOutside,
                          }),
                          h(AElement, {
                            alwaysTranslate: this.alwaysTranslate,
                            ariaDisabled: this.loadingSearchApi,
                            disabled: this.disabledLocal,
                            class: "a_btn a_btn_primary a_select__element_clickable",
                            type: "submit",
                            iconLeft: Search,
                            loadingAlign: "left",
                          }),
                        ]),
                      ]),
                    ]),
                    this.search && h("div", {
                      class: "a_select__search",
                    }, [
                      h(AInput, {
                        alwaysTranslate: this.alwaysTranslate,
                        label: "_A_SELECT_SEARCH_",
                        inputClass: "a_select__element_clickable",
                        modelValue: this.modelSearch,
                        modelUndefined: "",
                        "onUpdate:modelValue": this.updateModelSearch,
                      }),
                    ]),
                    (this.searchOutside || this.search) && h("div", {
                      class: "a_select__divider",
                      ariaHidden: true,
                    }),
                    h("div", {
                      class: "a_select_menu__child",
                    }, [
                      (this.isMultiselect && this.isSelectAll) && h("div", {
                        class: [
                          "a_select__menu__link a_select__menu__link_selected a_select__element_clickable",
                          {
                            a_select__menu__link_disabled: this.disabledLocal,
                          },
                        ],
                        disabled: this.disabledLocalAttribut,
                        role: "option",
                        tabindex: "-1",
                        onClick: this.onSelectAll,
                        onKeydown: this.onKeydownSelectAll,
                      }, [
                        h("span", {
                          class: "a_select__menu__link__icon_box",
                        }, [
                          h(AIcon, {
                            icon: CheckLg,
                          }),
                        ]),
                        h("span", null, this.textSelectAll),
                      ]),
                      (this.isMultiselect && this.isDeselectAll) && h("div", {
                        class: [
                          "a_select__menu__link a_select__menu__link_selected a_select__element_clickable",
                          {
                            a_select__menu__link_disabled: this.disabled,
                          },
                        ],
                        disabled: this.disabledAttribut,
                        role: "option",
                        tabindex: "-1",
                        onClick: this.onDeselectAll,
                        onKeydown: this.onKeydownDeselectAll,
                      }, [
                        h("span", {
                          class: "a_select__menu__link__icon_box",
                        }, [
                          h(AIcon, {
                            icon: XLg,
                          }),
                        ]),
                        h("span", null, this.textDeselectAll),
                      ]),
                      (this.isDividerSelectDeselectVisible) && h("div", {
                        class: "a_select__divider",
                        ariaHidden: true,
                      }),
                      (this.loadingLocal || this.loadingSearchApi) ?
                        h(ACloak) :
                        "",
                      (this.isMultiselect && this.isExclusiveOptionEnabled) && h("div", {}, [
                        h(ASelectElement, {
                          key: this.exclusiveOptionValue,
                          id: this.htmlIdLocal,
                          alwaysTranslate: true,
                          dataItem: this.exclusiveOption,
                          disabled: false,
                          itemIndex: 0,
                          modelSearch: this.modelSearchLowerCase,
                          modelValue: this.modelValue,
                          searching: this.searching,
                          searchingElements: this.searchingElementsExclusive,
                          searchingGroups: this.searchingGroups,
                          searchTextInHtml: this.searchTextInHtml,
                          type: this.type,
                          onChangeModelValue: this.onChangeModelValue,
                        }, this.$slots),
                      ]),
                      this.hasDataExtra && h("div", {}, [
                        ...this.dataExtraLocal.map((item, itemIndex) => {
                          return h(ASelectElement, {
                            key: item[AKeyId],
                            id: this.htmlIdLocal,
                            alwaysTranslate: this.alwaysTranslate,
                            dataItem: item,
                            disabled: this.disabledLocal,
                            searching: this.searching,
                            searchingElements: this.searchingElementsExtra,
                            searchTextInHtml: this.searchTextInHtml,
                            itemIndex: this.isExclusiveOptionEnabled ? itemIndex + 1 : itemIndex,
                            keyDisabled: this.keyDisabled,
                            keyDisabledCallback: this.keyDisabledCallback,
                            modelSearch: this.modelSearchLowerCase,
                            modelValue: this.modelValue,
                            slotName: this.slotName,
                            type: this.type,
                            onChangeModelValue: this.onChangeModelValue,
                          }, this.$slots);
                        }),
                        !this.hasNotElementsExtraWithSearch && !this.hasNotElementsExclusiveWithSearch && h("div", {
                          class: "a_select__divider",
                          ariaHidden: true,
                        }),
                      ]),
                      h("div", {}, this.hasKeyGroup ?
                        [
                          h(ACheckboxRadioGroups, {
                            id: `${ this.htmlIdLocal }_lev_0`,
                            alwaysTranslate: this.alwaysTranslate,
                            dataGrouped: this.dataGrouped,
                            disabled: this.disabledLocal,
                            groupsForLever: this.groupsForLever,
                            isErrors: this.isErrors,
                            keyDisabled: this.keyDisabled,
                            keyDisabledCallback: this.keyDisabledCallback,
                            levelIndex: 0,
                            modelSearch: this.modelSearchLowerCase,
                            modelValue: this.modelValue,
                            searching: this.searching,
                            searchingElements: this.searchingElements,
                            searchingGroups: this.searchingGroups,
                            searchingGroupsWithSearchInGroup: this.searchingGroupsWithSearchInGroup,
                            searchTextInHtml: this.searchTextInHtml,
                            slotName: this.slotName,
                            type: this.type,
                            onChangeModelValue: this.onChangeModelValue,
                          }, this.$slots),
                        ] :
                        [
                          h("div", {}, [
                            ...this.dataSort.map((item, itemIndex) => {
                              return h(ASelectElement, {
                                key: item[AKeyId],
                                id: this.htmlIdLocal,
                                alwaysTranslate: this.alwaysTranslate,
                                dataItem: item,
                                disabled: this.disabledLocal,
                                itemIndex,
                                keyDisabled: this.keyDisabled,
                                keyDisabledCallback: this.keyDisabledCallback,
                                modelSearch: this.modelSearchLowerCase,
                                modelValue: this.modelValue,
                                searching: this.searching,
                                searchingElements: this.searchingElements,
                                searchTextInHtml: this.searchTextInHtml,
                                slotName: this.slotName,
                                type: this.type,
                                onChangeModelValue: this.onChangeModelValue,
                              }, this.$slots);
                            }),
                          ]),
                        ]),
                      ((!this.dataSort.length && !this.hasDataExtra) || this.hasNotElementsWithSearch) ?
                        h(ATranslation, {
                          alwaysTranslate: this.alwaysTranslate,
                          class: "a_form__not_elements",
                          text: "_A_SELECT_HAS_NOT_ELEMENTS_WITH_SEARCH_",
                        }) :
                        "",
                    ]),
                  ]),
                ]),
              ]),
              this.hasCaret ?
                h("span", {
                  class: "a_caret",
                }, [
                  h(AIcon, {
                    icon: this.caretIcon,
                  }),
                ]) :
                "",
            ]),
          ]),
        ]),
        h(AFormHelpText, {
          id: this.helpTextId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          alwaysTranslate: this.alwaysTranslate,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
