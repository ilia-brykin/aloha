import {
  h,
  watch,
} from "vue";
import {
  ACheckboxRadioGroups,
  ACloak,
  AElement,
  AErrorsText,
  AFormHelpText,
  AFormReadonly,
  AInput,
  AKeyId,
  ATranslation,
  UiAPI,
  UiCollapseAPI,
  UiDataFromServerAPI,
  UIDataGroupAPI,
  UiDataSortAPI,
  UiDataWatchEmitAPI,
  UiDataWithKeyIdAndLabelAPI,
  UIExcludeRenderAttributesAPI,
  UiLoadingAPI,
  UiSearchAPI,
  UiStyleHideAPI,
} from "../../index";

import ARadioItem from "./ARadioItem/ARadioItem";

import AttributesAPI from "../ACheckbox/compositionAPI/AttributesAPI";
import ChangeAPI from "./compositionAPI/ChangeAPI";
import ReadonlyAPI from "./compositionAPI/ReadonlyAPI";
import TextAfterLabelAPI from "../ACheckbox/compositionAPI/TextAfterLabelAPI";

import Search from "aloha-svg/dist/js/bootstrap/Search";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ARadio",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    apiSaveId: {
      type: String,
      required: false,
      default: undefined,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    classButtonGroupDefault: {
      type: [String, Object, Array],
      required: false,
      default: "a_btn a_btn_outline_primary",
    },
    classDataParent: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    classFieldset: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    data: {
      type: Array,
      required: false,
      default: undefined,
    },
    dataExtra: {
      type: Array,
      required: false,
      default: () => [],
    },
    dependencies: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    errors: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    hasBorder: {
      type: Boolean,
      required: false,
      default: true,
    },
    helpText: {
      type: String,
      required: false,
      default: undefined,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_radio_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    inline: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isButtonGroup: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isCollapsed: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isDataSimpleArray: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isHide: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isModelArray: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    isWidthAuto: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    keyDisabled: {
      type: String,
      required: false,
      default: undefined,
    },
    keyDisabledCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyGroup: {
      type: [String, Number, Array],
      required: false,
      default: undefined,
    },
    keyGroupLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyId: {
      type: String,
      required: false,
      default: "value",
    },
    keyLabel: {
      type: String,
      required: false,
      default: "label",
    },
    keyLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyTitle: {
      type: String,
      required: false,
      default: undefined,
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
      type: [String, Number],
      required: false,
      default: undefined,
    },
    loading: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelUndefined: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: null,
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      required: false,
      default: undefined,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: "",
    },
    required: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    search: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    searchApi: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    searchApiKey: {
      type: String,
      required: false,
      default: undefined,
    },
    searchInGroup: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    searchOutside: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    searchTimeout: {
      type: Number,
      required: false,
      default: 0,
      validator: value => value >= 0,
    },
    slotAppendName: {
      type: String,
      required: false,
      default: undefined,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    sortOrder: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    sortOrderGroup: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    texts: {
      type: Object,
      required: false,
      default: () => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
        notElementsWithSearch: "_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_",
        search: "_A_RADIO_SEARCH_",
      }),
    },
    translateData: {
      type: Boolean,
      required: false,
      default: undefined,
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
    "onSearchOutside",
    "toggleCollapse",
    "updateData",
    "update:modelValue",
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
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      textAfterLabel,
    } = TextAfterLabelAPI(props);

    const {
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

    UiDataWatchEmitAPI(context, {
      dataKeyByKeyIdLocal,
      dataLocal,
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
      hasNotElementsExtraWithSearch,
      hasNotElementsWithSearch,
      idForButtonSearchOutside,
      modelSearch,
      modelSearchLowerCase,
      modelSearchOutside,
      onSearchOutside,
      searching,
      searchingElements,
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
      groupsForLever,
      htmlIdLocal,
      hasKeyGroup,
      keyGroupArray,
      searchApiLocal,
      onSearchInApi,
    });

    const {
      onChangeModelValue,
    } = ChangeAPI(props, {
      changeModel,
      dataKeyByKeyIdLocal,
    });

    const {
      iconCollapse,
      initIsCollapsedLocal,
      isCollapsedLocal,
      titleCollapse,
      toggleCollapse,
    } = UiCollapseAPI(props, context);

    const {
      groupId,
    } = AttributesAPI(props, {
      htmlIdLocal,
    });

    const {
      modelValueItemReadonly,
    } = ReadonlyAPI(props, {
      dataKeyByKeyIdLocal,
    });

    watch(urlPropsComputed, updateUrlPropsComputed);

    initIsCollapsedLocal();
    loadDataFromServer();
    loadDataFromServerForSearchAPI();

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      componentStyleHide,
      dataExtraLocal,
      dataGrouped,
      dataSort,
      errorsId,
      groupId,
      groupsForLever,
      hasDataExtra,
      hasKeyGroup,
      hasNotElementsExtraWithSearch,
      hasNotElementsWithSearch,
      helpTextId,
      htmlIdLocal,
      iconCollapse,
      idForButtonSearchOutside,
      isCollapsedLocal,
      isErrors,
      loadingLocal,
      loadingSearchApi,
      modelSearch,
      modelSearchLowerCase,
      modelSearchOutside,
      modelValueItemReadonly,
      onBlur,
      onChangeModelValue,
      onFocus,
      onSearchOutside,
      searching,
      searchingElements,
      searchingElementsExtra,
      searchingGroups,
      searchingGroupsWithSearchInGroup,
      searchOutsideOrApi,
      searchOutsideRef,
      textAfterLabel,
      titleCollapse,
      toggleCollapse,
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
        type: "radio",
      }, this.modelValueItemReadonly ?
        () => [
          h(ARadioItem, {
            id: this.htmlIdLocal,
            alwaysTranslate: this.alwaysTranslate,
            dataItem: this.modelValueItemReadonly,
            itemIndex: -1,
            modelValue: this.modelValue,
            readonly: true,
            slotAppendName: this.slotAppendName,
            slotName: this.slotName,
          }, this.$slots),
        ] :
        undefined);
    }

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      type: undefined,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: [
          "a_form_element__parent",
          {
            a_radio_inline: this.inline,
          },
        ],
      }, [
        h("div", {
          class: "a_form_element",
        }, [
          h("fieldset", {
            id: this.htmlIdLocal,
            tabindex: -1,
            class: [
              "a_fieldset",
              this.classFieldset,
              {
                a_fieldset_no_border: !this.hasBorder,
                a_fieldset_invalid: this.isErrors,
                a_fieldset_collapsed: this.isCollapsedLocal,
              },
            ],
            "aria-describedby": this.ariaDescribedbyLocal,
          }, [
            (this.label || this.labelScreenReader) ?
              h(AElement, {
                type: "text",
                alwaysTranslate: this.alwaysTranslate,
                tag: "legend",
                class: [
                  "a_legend",
                  {
                    a_legend_invalid: this.isErrors,
                  },
                  this.labelClass,
                ],
                extra: this.extra,
                html: this.label,
                textScreenReader: this.labelScreenReader,
                textAfter: this.textAfterLabel,
              }) :
              "",
            this.collapsible ?
              h(AElement, {
                "aria-controls": this.groupId,
                "aria-expanded": !this.isCollapsedLocal,
                alwaysTranslate: this.alwaysTranslate,
                class: "a_fieldset__btn_collapse a_btn a_btn_transparent_secondary",
                iconLeft: this.iconCollapse,
                title: this.titleCollapse,
                textScreenReader: this.titleCollapse,
                type: "button",
                onClick: this.toggleCollapse,
              }) :
              "",
            h("div", {
              id: this.groupId,
              class: "a_fieldset__content",
            }, [
              this.searchOutsideOrApi ?
                h("div", {
                  class: "a_fieldset__search",
                }, [
                  h("form", {
                    onSubmit: this.onSearchOutside,
                  }, [
                    h("div", {
                      class: "input-group",
                    }, [
                      h(AInput, {
                        alwaysTranslate: this.alwaysTranslate,
                        label: this.texts?.search || "_A_RADIO_SEARCH_",
                        inputClass: "a_select__element_clickable",
                        modelValue: this.modelSearchOutside,
                        modelUndefined: "",
                        "onUpdate:modelValue": this.updateModelSearchOutside,
                      }),
                      h(AElement, {
                        alwaysTranslate: this.alwaysTranslate,
                        ariaDisabled: this.loadingSearchApi,
                        class: "a_btn a_btn_primary",
                        disabled: this.disabled,
                        iconLeft: Search,
                        type: "submit",
                      }),
                    ]),
                  ]),
                ]) :
                "",
              this.search ?
                h(AInput, {
                  alwaysTranslate: this.alwaysTranslate,
                  class: "a_fieldset__search",
                  label: this.texts?.search || "_A_RADIO_SEARCH_",
                  modelValue: this.modelSearch,
                  modelUndefined: "",
                  "onUpdate:modelValue": this.updateModelSearch,
                }) :
                "",
              this.loadingLocal ?
                h(ACloak) :
                "",
              this.hasDataExtra ?
                h("div", {
                  class: "a_radio__data_extra",
                }, [
                  ...this.dataExtraLocal.map((item, itemIndex) => {
                    return h(ARadioItem, {
                      key: item[AKeyId],
                      id: this.htmlIdLocal,
                      alwaysTranslate: this.alwaysTranslate,
                      idSuffix: "extra",
                      classButtonGroupDefault: this.classButtonGroupDefault,
                      dataItem: item,
                      disabled: this.disabled,
                      isButtonGroup: this.isButtonGroup,
                      isErrors: this.isErrors,
                      isWidthAuto: this.isWidthAuto,
                      itemIndex,
                      keyDisabled: this.keyDisabled,
                      keyTitle: this.keyTitle,
                      keyTitleCallback: this.keyTitleCallback,
                      modelSearch: this.modelSearchLowerCase,
                      modelValue: this.modelValue,
                      searching: this.searching,
                      searchingElements: this.searchingElementsExtra,
                      slotName: this.slotName,
                      slotAppendName: this.slotAppendName,
                      onChangeModelValue: this.onChangeModelValue,
                    }, this.$slots);
                  }),
                  !this.hasNotElementsExtraWithSearch ?
                    h("div", {
                      class: "a_divider",
                      ariaHidden: true,
                    }) :
                    "",
                ]) :
                "",
              h("div", {}, this.hasKeyGroup ?
                [
                  h(ACheckboxRadioGroups, {
                    id: `${ this.htmlIdLocal }_lev_0`,
                    alwaysTranslate: this.alwaysTranslate,
                    classButtonGroupDefault: this.classButtonGroupDefault,
                    dataGrouped: this.dataGrouped,
                    disabled: this.disabled,
                    groupsForLever: this.groupsForLever,
                    isButtonGroup: this.isButtonGroup,
                    isErrors: this.isErrors,
                    isWidthAuto: this.isWidthAuto,
                    keyDisabled: this.keyDisabled,
                    keyTitle: this.keyTitle,
                    keyTitleCallback: this.keyTitleCallback,
                    levelIndex: 0,
                    modelSearch: this.modelSearchLowerCase,
                    modelValue: this.modelValue,
                    searching: this.searching,
                    searchingElements: this.searchingElements,
                    searchingGroups: this.searchingGroups,
                    searchingGroupsWithSearchInGroup: this.searchingGroupsWithSearchInGroup,
                    slotAppendName: this.slotAppendName,
                    slotName: this.slotName,
                    type: "radio",
                    onChangeModelValue: this.onChangeModelValue,
                  }, this.$slots),
                ] :
                [
                  h("div", {
                    class: [
                      "a_radio_data",
                      {
                        a_btn_group: this.isButtonGroup,
                      },
                      this.classDataParent,
                    ],
                  }, [
                    ...this.dataSort.map((item, itemIndex) => {
                      return h(ARadioItem, {
                        key: item[AKeyId],
                        id: this.htmlIdLocal,
                        alwaysTranslate: this.alwaysTranslate,
                        classButtonGroupDefault: this.classButtonGroupDefault,
                        dataItem: item,
                        disabled: this.disabled,
                        isButtonGroup: this.isButtonGroup,
                        isErrors: this.isErrors,
                        isWidthAuto: this.isWidthAuto,
                        itemIndex,
                        keyDisabled: this.keyDisabled,
                        keyTitle: this.keyTitle,
                        keyTitleCallback: this.keyTitleCallback,
                        modelSearch: this.modelSearchLowerCase,
                        modelValue: this.modelValue,
                        searching: this.searching,
                        searchingElements: this.searchingElements,
                        slotName: this.slotName,
                        slotAppendName: this.slotAppendName,
                        onChangeModelValue: this.onChangeModelValue,
                      }, this.$slots);
                    }),
                  ]),
                ]),
              (!this.dataSort.length || this.hasNotElementsWithSearch) ?
                h(ATranslation, {
                  alwaysTranslate: this.alwaysTranslate,
                  class: "a_form__not_elements",
                  text: this.texts?.notElementsWithSearch || "_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_",
                }) :
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
