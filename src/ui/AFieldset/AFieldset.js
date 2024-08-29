import {
  h,
  resolveComponent,
} from "vue";

import AElement from "../../AElement/AElement";
import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import AGroup from "../AGroup/AGroup";
import AUiComponents from "../AUiComponents";

import ModelAPI from "./compositionAPI/ModelAPI";
import TextAfterLabelAPI from "../ACheckbox/compositionAPI/TextAfterLabelAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiCollapseAPI from "../compositionApi/UiCollapseAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import {
  typesContainer,
} from "../const/AUiTypes";
import {
  get,
  isNil,
  uniqueId,
} from "lodash-es";

export default {
  name: "AFieldset",
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
    classColumns: {
      type: [String, Object],
      required: false,
      default: "a_columns a_columns_count_12 a_columns_gab_2",
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
      type: [String, Array],
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
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
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

    const componentTypesMapping = {
      ...AUiComponents,
      group: AGroup,
      fieldset: resolveComponent("AFieldset"),
    };

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
    } = UiAPI(props, context);

    const {
      textAfterLabel,
    } = TextAfterLabelAPI(props);

    const {
      onUpdateModelLocal,
    } = ModelAPI(props, context, {
      changeModel,
    });

    const onUpdateDataLocal = ({ item, dataKeyByKeyId }) => {
      context.emit("updateData", { item, dataKeyByKeyId });
    };

    const {
      iconCollapse,
      initIsCollapsedLocal,
      isCollapsedLocal,
      titleCollapse,
      toggleCollapse,
    } = UiCollapseAPI(props, context);

    initIsCollapsedLocal();

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      componentStyleHide,
      componentTypesMapping,
      errorsId,
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

    return h("div", {
      style: this.componentStyleHide,
      type: undefined,
      ...this.attributesToExcludeFromRender,
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
          class: [
            this.classColumns,
            "a_fieldset__content",
          ],
        }, [
          this.children.map((item, itemIndex) => {
            if (item.isRender !== false) {
              const IS_CONTAINER = typesContainer.value[item.type];
              let classColumn;
              if (isNil(item.classColumn)) {
                classColumn = "a_column a_column_12";
              } else if (item.classColumn) {
                classColumn = item.classColumn;
              }
              let style;
              if (item.isHide) {
                style = "display: none;";
              }

              return h("div", {
                class: classColumn,
                style,
              }, [
                h(this.componentTypesMapping[item.type], {
                  key: itemIndex,
                  alwaysTranslate: this.alwaysTranslate,
                  modelValue: IS_CONTAINER ? this.modelValue : get(this.modelValue, item.id),
                  modelDependencies: IS_CONTAINER ? this.modelValue : undefined,
                  errors: get(this.errorsAll, item.id),
                  errorsAll: IS_CONTAINER ? this.errorsAll : undefined,
                  idPrefix: this.idPrefix,
                  "onUpdate:modelValue": model => this.onUpdateModelLocal({ item, model }),
                  onUpdateData: ({ dataKeyByKeyId }) => this.onUpdateDataLocal({ item, dataKeyByKeyId }),
                  ...item,
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
            }) :
            "",
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
    ]);
  },
};
