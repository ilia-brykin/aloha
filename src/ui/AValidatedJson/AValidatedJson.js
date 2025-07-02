import {
  h,
} from "vue";
import {
  AElement,
  AErrorsText,
  AFieldset,
  AFormHelpText,
  AOneCheckbox,
  ATranslation,
  UiAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import AValidatedJsonModalCreateOrUpdate from "./AValidatedJsonModalCreateOrUpdate/AValidatedJsonModalCreateOrUpdate";
import AValidatedJsonModeListItem from "./AValidatedJsonModeListItem/AValidatedJsonModeListItem";

import ChildrenAPI from "./compositionAPI/ChildrenAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import ListModeAPI from "./compositionAPI/ListModeAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import SingleModeAPI from "./compositionAPI/SingleModeAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

import Plus from "aloha-svg/dist/js/bootstrap/Plus";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AValidatedJson",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    children: {
      type: Array,
      required: false,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    elementLabel: {
      type: String,
      required: false,
      default: "_A_VALIDATED_JSON_ELEMENTS_",
    },
    errors: {
      type: [String, Array, Object],
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
    keyId: {
      type: String,
      required: false,
      default: undefined,
    },
    sortId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_validated_json_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    isHide: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
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
    mode: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["list", "json", "single"].includes(value),
    },
    modeOptions: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelAll: {
      type: Object,
      required: false,
      default: undefined,
    },
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      required: false,
      default: undefined,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    readonly: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    showReadonlyChildren: {
      type: Boolean,
      required: false,
      default: false,
    },
    typedBaseId: {
      type: String,
      required: false,
      default: undefined,
    },
    typedChildren: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    uniqueChildrenIds: {
      type: Array,
      required: false,
      default: () => [],
    },
    useFlatErrors: {
      type: Boolean,
      required: false,
      default: false,
    },
    useFlatModel: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: [
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
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
    } = UiAPI(props, context);

    const {
      onChange,
      checkUndefinedValue,
    } = ModelAPI(props, context);

    const {
      elementLabelTranslated,
    } = TranslateAPI(props);

    const {
      blur,
      focus,
      open,
      updateModelValue,
    } = EventsAPI(context);

    const {
      childrenFiltered,
    } = ChildrenAPI(props);

    const {
      initSingleModeModelCheckbox,
      singleModeChildren,
      singleModeDataFormCheckbox,
    } = SingleModeAPI(props, {
      childrenFiltered,
      htmlIdLocal,
      updateModelValue,
    });

    const {
      closeModalCreateListMode,
      deleteListMode,
      isModalCreateListModeVisible,
      listModeBtnIdAdd,
      moveListMode,
      modelListMode,
      openModalCreateListMode,
      updateListMode,
    } = ListModeAPI(props, {
      htmlIdLocal,
      updateModelValue,
    });

    initSingleModeModelCheckbox();

    return {
      childrenFiltered,
      blur,
      focus,
      deleteListMode,
      updateListMode,
      open,
      closeModalCreateListMode,
      isModalCreateListModeVisible,
      modelListMode,
      listModeBtnIdAdd,
      elementLabelTranslated,
      updateModelValue,
      singleModeChildren,
      singleModeDataFormCheckbox,
      moveListMode,
      openModalCreateListMode,
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      checkUndefinedValue,
      componentStyleHide,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      onChange,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    if (this.mode === "single") {
      return h(AFieldset, {
        ...this.$attrs,
        alwaysTranslate: this.alwaysTranslate,
        children: this.singleModeChildren,
        disabled: this.disabled,
        errors: this.errors,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        htmlId: this.htmlId,
        id: this.id,
        idPrefix: this.idPrefix,
        isHide: this.isHide,
        isRender: this.isRender,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        modelAll: this.modelAll,
        modelValue: this.modelValue,
        readonly: this.readonly,
        required: this.required,
        skipOwnIdInModelPath: true,
        slotNamePrepend: "singlePrepend",
        useFlatErrors: this.useFlatErrors,
        useFlatModel: this.useFlatModel,
        "onUpdate:modelValue": this.updateModelValue,
      }, {
        singlePrepend: !this.required ?
          () => {
            return h(AOneCheckbox, this.singleModeDataFormCheckbox);
          } :
          undefined,
        ...this.$slots,
      });
    }

    if (this.mode === "list") {
      return h(AFieldset, {
        ...this.$attrs,
        id: this.htmlIdLocal,
        class: [
          "a_validated_json a_validated_json_list",
          this.$attrs.class,
        ],
        extra: this.extra,
        helpText: this.helpText,
        isHide: this.isHide,
        isRender: this.isRender,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        required: this.required,
        slotName: "slotAppend",
      }, {
        slotAppend: () => {
          return h("div", {
            class: "a_column a_column_12",
          }, [
            h("ul", {
              class: "a_list_group",
            }, [
              this.modelListMode.length > 0 ?
                this.modelListMode.map((item, index) => {
                  return h(AValidatedJsonModeListItem, {
                    key: index,
                    children: this.childrenFiltered,
                    elementLabel: this.elementLabelTranslated,
                    isLast: index === this.modelListMode.length - 1,
                    modelAll: this.modelListMode,
                    modelIndex: index,
                    modelItem: item,
                    modeOptions: this.modeOptions,
                    parentId: this.htmlIdLocal,
                    readonly: this.readonly,
                    typedBaseId: this.typedBaseId,
                    typedChildren: this.typedChildren,
                    uniqueChildrenIds: this.uniqueChildrenIds,
                    useFlatModel: this.useFlatModel,
                    onDelete: this.deleteListMode,
                    onMove: this.moveListMode,
                    onUpdate: this.updateListMode,
                  });
                }) :
                h(ATranslation, {
                  class: "a_list_group__item",
                  tag: "li",
                  text: "_A_VALIDATED_JSON_NO_ELEMENTS_",
                }),
              !this.readonly ?
                h("li", {
                  class: "a_list_group__item",
                }, [
                  h(AElement, {
                    id: this.listModeBtnIdAdd,
                    class: "a_btn a_btn_secondary test_add a_width_100",
                    disabled: this.disabled,
                    extra: {
                      elementLabel: this.elementLabelTranslated,
                    },
                    iconLeft: Plus,
                    text: "_A_VALIDATED_JSON_NO_ELEMENTS_ADD_ELEMENT_{{elementLabel}}_",
                    type: "button",
                    onClick: this.openModalCreateListMode,
                  }),
                ]) :
                "",
            ]),

            this.helpText && h(AFormHelpText, {
              id: this.helpTextId,
              text: this.helpText,
            }),
            this.isErrors && h(AErrorsText, {
              id: this.errorsId,
              errors: this.errors,
            }),


            this.isModalCreateListModeVisible ?
              h(AValidatedJsonModalCreateOrUpdate, {
                children: this.childrenFiltered,
                close: this.closeModalCreateListMode,
                elementLabelTranslated: this.elementLabelTranslated,
                isCreate: true,
                modelAll: this.modelListMode,
                typedBaseId: this.typedBaseId,
                typedChildren: this.typedChildren,
                uniqueChildrenIds: this.uniqueChildrenIds,
              }) :
              "",
          ]);
        },
      });
    }

    if (this.mode === "json") {
      return h("div", {
        ...this.$attrs,
        id: this.htmlIdLocal,
        class: [
          "a_validated_json a_validated_json_json",
          this.$attrs.class,
        ],
      }, [
        h("div", "TODO"),

        /*
         * h("ul", {
         *   class: "a_list_group",
         * }, [
         *   this.modelListMode.length > 0 ?
         *     this.modelListMode.map((item, index) => {
         *       return h(AValidatedJsonModeListItem, {
         *         key: index,
         *         children: this.childrenFiltered,
         *         elementLabel: this.elementLabelTranslated,
         *         isLast: index === this.modelListMode.length - 1,
         *         modelIndex: index,
         *         modelItem: item,
         *         modeOptions: this.modeOptions,
         *         parentId: this.htmlIdLocal,
         *         useFlatModel: this.useFlatModel,
         *         onDelete: this.deleteListMode,
         *         onMove: this.moveListMode,
         *         onUpdate: this.updateListMode,
         *       });
         *     }) :
         *     h(ATranslation, {
         *       class: "a_list_group__item",
         *       tag: "li",
         *       text: "_A_VALIDATED_JSON_NO_ELEMENTS_",
         *     }),
         *   h("li", {
         *     class: "a_list_group__item",
         *   }, [
         *     h(AElement, {
         *       id: this.listModeBtnIdAdd,
         *       class: "a_btn a_btn_secondary test_add a_width_100",
         *       disabled: this.disabled,
         *       extra: {
         *         elementLabel: this.elementLabelTranslated,
         *       },
         *       iconLeft: Plus,
         *       text: "_A_VALIDATED_JSON_NO_ELEMENTS_ADD_ELEMENT_{{elementLabel}}_",
         *       type: "button",
         *       onClick: this.openModalCreateListMode,
         *     }),
         *   ]),
         * ]),
         */

        this.helpText && h(AFormHelpText, {
          id: this.helpTextId,
          text: this.helpText,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),


        this.isModalCreateListModeVisible ?
          h(AValidatedJsonModalCreateOrUpdate, {
            children: this.childrenFiltered,
            close: this.closeModalCreateListMode,
            elementLabelTranslated: this.elementLabelTranslated,
            isCreate: true,
            modelAll: this.modelListMode,
            uniqueChildrenIds: this.uniqueChildrenIds,
          }) :
          "",
      ]);
    }
  },
};
