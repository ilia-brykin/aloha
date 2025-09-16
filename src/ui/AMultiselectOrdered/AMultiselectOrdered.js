import {
  h,
  provide,
  watch,
} from "vue";
import {
  AElement,
  AErrorsText,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  AMultiselectOrderedPluginOptions,
  APlacements,
  ASelect,
  ATranslation,
  UiAPI,
  UiDataFromServerAPI,
  UiDataSortAPI,
  UiDataWatchEmitAPI,
  UiDataWithKeyIdAndLabelAPI,
  UIExcludeRenderAttributesAPI,
  UiLoadingAPI,
  UiStyleHideAPI,
  UiTextAfterLabelAPI,
} from "../../index";

import AMultiselectOrderedItem from "./AMultiselectOrderedItem/AMultiselectOrderedItem";
import ASelectLabelElement from "../ASelect/ASelectLabelElement/ASelectLabelElement";

import AllAPI from "./compositionAPI/AllAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import DataAPI from "./compositionAPI/DataAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import TextsAPI from "./compositionAPI/TextsAPI";

import {
  AIsDataPreparedInjection,
} from "../const/UiInjectionKeys";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AMultiselectOrdered",
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
    attributesBtnDeselectAll: {
      type: Object,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.attributesBtnDeselectAll,
    },
    attributesBtnSelectAll: {
      type: Object,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.attributesBtnSelectAll,
    },
    attributesFieldset: {
      type: Object,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.attributesFieldset,
    },
    btnDeleteClass: {
      type: [String, Object],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.btnDeleteClass,
    },
    btnDeleteIcon: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.btnDeleteIcon,
    },
    btnDownClass: {
      type: [String, Object],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.btnDownClass,
    },
    btnDownIcon: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.btnDownIcon,
    },
    btnGroupClass: {
      type: [String, Object, Array],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.btnGroupClass,
    },
    btnUpClass: {
      type: [String, Object],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.btnUpClass,
    },
    btnUpIcon: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.btnUpIcon,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    classFieldset: {
      type: [String, Object],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.classFieldset,
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
      default: () => AMultiselectOrderedPluginOptions.propsDefault.hasBorder,
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
      default: () => uniqueId("a_m_select_ordered_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    isDataSimpleArray: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isDeselectAll: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.isDeselectAll,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    isSelectAll: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.isSelectAll,
    },
    keyDisabled: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.keyDisabled,
    },
    keyDisabledCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyGroup: {
      type: [String, Number, Array],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.keyGroup,
    },
    keyGroupLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyId: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.keyId,
    },
    keyLabel: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.keyLabel,
    },
    keyLabelCallback: {
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
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.labelClass,
    },
    labelDescription: {
      type: String,
      required: false,
      default: undefined,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    labelTitle: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    listItemClass: {
      type: [String, Object, Array],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.listItemClass,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelValue: {
      type: Array,
      required: false,
      default: () => [],
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.readonlyDefault,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    search: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.search,
    },
    searchApi: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.searchApi,
    },
    searchApiKey: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.searchApiKey,
    },
    searchInGroup: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.searchInGroup,
    },
    searchOutside: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.searchOutside,
    },
    searchTextInHtml: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.searchTextInHtml,
    },
    searchTimeout: {
      type: Number,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.searchTimeout,
    },
    selectButtonClass: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectButtonClass,
    },
    selectButtonClassDefault: {
      type: [String, Object],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectButtonClassDefault,
    },
    selectCaretIcon: {
      type: [String, Object],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectCaretIcon,
    },
    selectHasCaret: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectHasCaret,
    },
    selectInBody: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectInBody,
    },
    selectIsCloseByClick: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectIsCloseByClick,
    },
    selectIsLabelFloat: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectIsLabelFloat,
    },
    selectIsSelectionCloseable: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectIsSelectionCloseable,
    },
    selectLabel: {
      type: [String, Number],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectLabel,
    },
    selectLabelClass: {
      type: [String, Object],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectLabelClass,
    },
    selectLabelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    selectMenuClass: {
      type: [String, Object],
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectMenuClass,
    },
    selectMenuWidthType: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectMenuWidthType,
      validator: value => ["as_button", "by_content"].indexOf(value) !== -1,
    },
    selectPlaceholder: {
      type: String,
      required: false,
      default: undefined,
    },
    selectPlacement: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectPlacement,
      validator: placement => APlacements.indexOf(placement) !== -1,
    },
    selectPopperContainerId: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.selectPopperContainerId,
    },
    slotName: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.slotName,
    },
    sortOrder: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.sortOrder,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    sortOrderGroup: {
      type: String,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.sortOrderGroup,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    texts: {
      type: Object,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.texts,
    },
    translateData: {
      type: Boolean,
      required: false,
      default: () => AMultiselectOrderedPluginOptions.propsDefault.translateData,
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
      textAfterLabel,
    } = UiTextAfterLabelAPI(props);

    const {
      textBtnDeleteTitle,
      textBtnDownTitle,
      textBtnGroupAriaLabel,
      textBtnUpTitle,
      textDeselectAll,
      textGroupAllAriaLabel,
      textModelEmpty,
      textSelectAll,
    } = TextsAPI(props);

    const {
      ariaDescribedbyLocal,
      changeModel,
      clearModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      labelDescriptionId,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      idForSelect,
    } = AttributesAPI(props, {
      htmlIdLocal,
    });

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
      changeModelFromSelect,
      deleteItem,
      modelValueFiltered,
      onDownItem,
      onUpItem,
    } = ModelAPI(props, {
      changeModel,
      dataKeyByKeyIdLocal,
    });

    const {
      dataSort,
    } = UiDataSortAPI(props, {
      data: dataLocal,
    });

    const {
      dataExtraLocalFiltered,
      dataSortFiltered,
    } = DataAPI(props, {
      dataExtraLocal,
      dataSort,
      modelValueFiltered,
    });

    const {
      deselectAll,
      disabledDeselectAll,
      disabledSelectAll,
      selectAll,
    } = AllAPI(props, {
      changeModel,
      dataExtraLocalFiltered,
      dataSortFiltered,
      modelValueFiltered,
    });


    watch(urlPropsComputed, updateUrlPropsComputed);
    provide(AIsDataPreparedInjection, true);

    loadDataFromServer();
    loadDataFromServerForSearchAPI();


    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      changeModelFromSelect,
      clearModel,
      componentStyleHide,
      dataExtraLocalFiltered,
      dataKeyByKeyIdLocal,
      dataLocal,
      dataSortFiltered,
      deleteItem,
      deselectAll,
      disabledDeselectAll,
      disabledSelectAll,
      errorsId,
      hasDataExtra,
      helpTextId,
      htmlIdLocal,
      idForSelect,
      isErrors,
      labelDescriptionId,
      loadingLocal,
      loadingSearchApi,
      modelValueFiltered,
      onBlur,
      onDownItem,
      onFocus,
      onUpItem,
      selectAll,
      textAfterLabel,
      textBtnDeleteTitle,
      textBtnDownTitle,
      textBtnGroupAriaLabel,
      textBtnUpTitle,
      textDeselectAll,
      textGroupAllAriaLabel,
      textModelEmpty,
      textSelectAll,
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
        type: "multiselectOrdered",
      }, this.modelValueFiltered.length ?
        () => [
          h("ul", {}, [
            this.modelValueFiltered.map(item => {
              return h(ASelectLabelElement, {
                key: item,
                alwaysTranslate: this.alwaysTranslate,
                data: this.dataKeyByKeyIdLocal[item] || {},
                slotName: this.slotName,
                tag: "li",
              }, this.$slots);
            }),
          ]),
        ] :
        "");
    }

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      type: undefined,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: "a_form_element__parent",
      }, [
        h("fieldset", {
          id: this.htmlIdLocal,
          tabindex: -1,
          class: ["a_fieldset", this.classFieldset, {
            a_fieldset_invalid: this.isErrors,
            a_fieldset_no_border: !this.hasBorder,
            a_fieldset_with_legend: this.label,
          }],
          "aria-describedby": this.ariaDescribedbyLocal,
          ...this.attributesFieldset,
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
              title: this.labelTitle || this.label,
              textScreenReader: this.labelScreenReader,
              textAfter: this.textAfterLabel,
            }) :
            "",
          h(AFormLabelDescription, {
            id: this.labelDescriptionId,
            alwaysTranslate: this.alwaysTranslate,
            html: this.labelDescription,
            extra: this.extra,
            isLabelFloat: this.isLabelFloat,
          }),
          h("div", {
            class: [
              "a_fieldset__content",
            ],
          }, [
            this.modelValueFiltered.length ?
              h("ul", {
                class: "a_list_group a_m_select_ordered__ul",
              }, this.modelValueFiltered.map((item, index) => {
                return h(AMultiselectOrderedItem, {
                  id: this.htmlIdLocal,
                  key: item,
                  alwaysTranslate: this.alwaysTranslate,
                  btnDeleteClass: this.btnDeleteClass,
                  btnDeleteIcon: this.btnDeleteIcon,
                  btnDeleteTitle: this.textBtnDeleteTitle,
                  btnDownClass: this.btnDownClass,
                  btnDownIcon: this.btnDownIcon,
                  btnDownTitle: this.textBtnDownTitle,
                  btnGroupAriaLabel: this.textBtnGroupAriaLabel,
                  btnGroupClass: this.btnGroupClass,
                  btnUpClass: this.btnUpClass,
                  btnUpIcon: this.btnUpIcon,
                  btnUpTitle: this.textBtnUpTitle,
                  listItemClass: this.listItemClass,
                  data: this.dataKeyByKeyIdLocal[item] || {},
                  disabled: this.disabled,
                  index,
                  isLastItem: index === this.modelValueFiltered.length - 1,
                  modelValue: item,
                  slotName: this.slotName,
                  onDeleteItem: this.deleteItem,
                  onUpItem: this.onUpItem,
                  onDownItem: this.onDownItem,
                }, this.$slots);
              })) :
              "",
            this.isDeselectAll || this.isSelectAll || !this.modelValueFiltered.length ?
              h("div", {
                class: "a_m_select_ordered__panel",
              }, [
                !this.modelValueFiltered.length ?
                  h(ATranslation, {
                    class: "a_m_select_ordered__empty",
                    tag: "div",
                    html: this.textModelEmpty,
                  }) :
                  "",

                h(ATranslation, {
                  ariaLabel: this.textGroupAllAriaLabel,
                  role: "group",
                  class: "a_btn_group",
                  tag: "div",
                }, () => [
                  this.isSelectAll ?
                    h(AElement, {
                      ariaDisabled: this.disabledSelectAll,
                      type: "button",
                      text: this.textSelectAll,
                      onClick: this.selectAll,
                      ...this.attributesBtnSelectAll,
                      class: [
                        this.attributesBtnDeselectAll.class || "a_btn a_btn_outline_secondary",
                        {
                          disabled: this.disabledSelectAll,
                        },
                      ],
                    }) :
                    "",
                  this.isDeselectAll ?
                    h(AElement, {
                      ariaDisabled: this.disabledDeselectAll,
                      type: "button",
                      text: this.textDeselectAll,
                      onClick: this.deselectAll,
                      ...this.attributesBtnDeselectAll,
                      class: [
                        this.attributesBtnDeselectAll.class || "a_btn a_btn_outline_secondary",
                        {
                          disabled: this.disabledDeselectAll,
                        },
                      ],
                    }) :
                    "",
                ]),
              ]) :
              "",
            h(ASelect, {
              alwaysTranslate: this.alwaysTranslate,
              buttonClass: this.selectButtonClass,
              buttonClassDefault: this.selectButtonClassDefault,
              caretIcon: this.selectCaretIcon,
              change: this.changeModelFromSelect,
              data: this.dataSortFiltered,
              dataExtra: this.dataExtraLocalFiltered,
              disabled: this.disabled,
              extra: this.extra,
              hasCaret: this.selectHasCaret,
              id: this.idForSelect,
              inBody: this.selectInBody,
              isCloseByClick: this.selectIsCloseByClick,
              isDataSimpleArray: this.isDataSimpleArray,
              isLabelFloat: this.selectIsLabelFloat,
              isSelectionCloseable: this.selectIsSelectionCloseable,
              keyDisabled: this.keyDisabled,
              keyDisabledCallback: this.keyDisabledCallback,
              keyGroup: this.keyGroup,
              keyGroupLabelCallback: this.keyGroupLabelCallback,
              keyId: this.keyId,
              keyLabel: this.keyLabel,
              keyLabelCallback: this.keyLabelCallback,
              label: this.selectLabel,
              labelClass: this.selectLabelClass,
              labelScreenReader: this.selectLabelScreenReader,
              loading: this.loading,
              menuWidthType: this.selectMenuWidthType,
              options: this.options,
              placeholder: this.selectPlaceholder,
              placement: this.selectPlacement,
              popperContainerId: this.selectPopperContainerId,
              search: this.search,
              searchInGroup: this.searchInGroup,
              searchTimeout: this.searchTimeout,
              searchTextInHtml: this.searchTextInHtml,
              selectMenuClass: this.selectMenuClass,
              slotName: this.slotName,
              type: "multiselect",
            }, this.$slots),
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
