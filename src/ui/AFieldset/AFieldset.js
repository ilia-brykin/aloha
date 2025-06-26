import {
  h,
  resolveComponent,
} from "vue";
import {
  AElement,
  AErrorsText,
  AFormHelpText,
  AFormPluginOptions,
  AFormReadonly,
  AGroup,
  AUiTypes_typesContainer,
  UiAPI,
  UiCollapseAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
  UiTextAfterLabelAPI,
} from "../../index";

import AttributesAPI from "../ACheckbox/compositionAPI/AttributesAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import ReadonlyAPI from "./compositionAPI/ReadonlyAPI";

import AUiComponents from "../AUiComponents";
import {
  cloneDeep,
  get,
  isNil,
  isUndefined,
  uniqueId,
} from "lodash-es";

export default {
  name: "AFieldset",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    attributesFieldset: {
      type: Object,
      required: false,
      default: () => ({}),
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
    classColumnDefault: {
      type: [String, Object],
      required: false,
      default: "a_column a_column_12",
    },
    classColumns: {
      type: [String, Object],
      required: false,
      default: "a_columns a_columns_count_12",
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
      type: [String, Array, Object],
      required: false,
      default: undefined,
    },
    errorsAll: {
      type: Object,
      required: false,
      default: () => ({}),
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
      default: () => uniqueId("a_fieldset_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    isCollapsed: {
      type: Boolean,
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
    modelAll: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelValue: {
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
      default: "",
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    parentId: {
      type: Array,
      required: false,
      default: () => [],
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    slotNamePrepend: {
      type: String,
      required: false,
      default: undefined,
    },
    useFlatErrors: {
      type: Boolean,
      required: false,
      default: true,
    },
    useFlatModel: {
      type: Boolean,
      required: false,
      default: true,
    },
    texts: {
      type: Object,
      required: false,
      default: () => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
      }),
    },
  },
  emits: [
    "toggleCollapse",
    "updateData",
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const componentTypesMapping = () => ({
      ...AUiComponents,
      group: AGroup,
      fieldset: resolveComponent("AFieldset"),
      ...AFormPluginOptions.components,
      ...AFormPluginOptions.containerComponents,
    });

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      textAfterLabel,
    } = UiTextAfterLabelAPI(props);

    const {
      ariaDescribedbyLocal,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
    } = UiAPI(props, context);

    const {
      onUpdateModelLocal,
    } = ModelAPI(props, context);

    const onUpdateDataLocal = ({ item, dataKeyByKeyId }) => {
      context.emit("updateData", { item, dataKeyByKeyId });
    };

    const {
      groupId,
    } = AttributesAPI(props, {
      htmlIdLocal,
    });

    const {
      iconCollapse,
      initIsCollapsedLocal,
      isCollapsedLocal,
      titleCollapse,
      toggleCollapse,
    } = UiCollapseAPI(props, context);

    const {
      classColumnsReadonly,
    } = ReadonlyAPI(props);

    initIsCollapsedLocal();

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      classColumnsReadonly,
      componentStyleHide,
      componentTypesMapping,
      errorsId,
      groupId,
      helpTextId,
      htmlIdLocal,
      iconCollapse,
      isCollapsedLocal,
      isErrors,
      onUpdateDataLocal,
      onUpdateModelLocal,
      textAfterLabel,
      titleCollapse,
      toggleCollapse,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    const CONTENT = [
      (this.slotNamePrepend &&
        this.$slots[this.slotNamePrepend]) ?
        this.$slots[this.slotNamePrepend]({
          id: this.htmlIdLocal,
          props: this.$props,
        }) :
        "",
      this.children.map((item, itemIndex) => {
        if (item.isRender !== false) {
          const IS_CONTAINER = AUiTypes_typesContainer.value[item.type];
          let classColumn;
          if (isNil(item.classColumn)) {
            classColumn = this.classColumnDefault;
          } else if (item.classColumn) {
            classColumn = item.classColumn;
          }
          let style;
          if (item.isHide) {
            style = "display: none;";
          }
          const COMPONENT = this.componentTypesMapping()[item.type];
          const ERRORS = this.useFlatErrors ?
            get(this.errorsAll, item.id) :
            get(this.errors, item.id);

          let parentId = undefined;
          if (IS_CONTAINER) {
            parentId = cloneDeep(this.parentId);
            parentId.push(this.id);
          }

          const MODEL_VALUE = (IS_CONTAINER && !this.useFlatModel) ||
            !IS_CONTAINER ?
                get(this.modelValue, item.id) :
                this.modelValue;

          return h("div", {
            class: classColumn,
            style,
          }, [
            h(COMPONENT, {
              key: itemIndex,
              alwaysTranslate: this.alwaysTranslate,
              modelValue: MODEL_VALUE,
              modelAll: IS_CONTAINER ? this.modelAll : undefined,
              modelDependencies: IS_CONTAINER ? this.modelValue : undefined,
              errors: ERRORS,
              errorsAll: IS_CONTAINER ? this.errorsAll : undefined,
              parentId,
              idPrefix: this.idPrefix,
              onUpdateData: ({ dataKeyByKeyId }) => this.onUpdateDataLocal({ item, dataKeyByKeyId }),
              ...item,
              change: ({ currentModel, id, item: _item, model, props, fullModel }) => this.onUpdateModelLocal({
                currentModel, id, item: _item, model, props, component: item, fullModel,
              }),
              readonly: this.readonly || item.readonly,
              readonlyDefault: "readonlyDefault" in item && !isUndefined(item.readonlyDefault) ? item.readonlyDefault : this.readonlyDefault,
              disabled: this.disabled || item.disabled,
              classColumn: undefined,
              slotAppend: undefined,
              ...this.attributesToExcludeFromRender,
            }, this.$slots),
            (item.slotAppend && this.$slots[item.slotAppend]) ?
              this.$slots[item.slotAppend]({ item, itemIndex }) :
              "",
          ]);
        }
      }),
      (this.slotName &&
        this.$slots[this.slotName]) ?
        this.$slots[this.slotName]({
          id: this.htmlIdLocal,
          props: this.$props,
        }) :
        "",
    ];

    if (this.readonly) {
      return h(AFormReadonly, {
        ...this.$attrs,
        id: this.htmlIdLocal,
        alwaysTranslate: this.alwaysTranslate,
        collapsible: this.collapsible,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        isCollapsed: this.isCollapsed,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        required: this.required,
        style: this.componentStyleHide,
        type: "fieldset",
        valueParentClass: this.classColumnsReadonly,
      }, () => CONTENT);
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
            a_fieldset_collapsed: this.isCollapsedLocal,
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
            class: [
              this.classColumns,
              "a_fieldset__content",
            ],
          }, CONTENT),
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
