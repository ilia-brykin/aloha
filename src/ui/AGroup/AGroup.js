import {
  computed,
  h,
  toRef,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import ALabel from "../ALabel/ALabel";

import SpecificTypeAPI from "./compositionAPI/SpecificTypeAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiAPI, {
  getHtmlId,
} from "../compositionApi/UiAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import AUiComponents from "../AUiComponents";
import {
  AFormPluginOptions,
} from "../../plugins/AFormPlugin";
import {
  typesContainer,
} from "../const/AUiTypes";
import {
  cloneDeep,
  get,
  isFunction,
  isNil,
  set,
  uniqueId,
} from "lodash-es";

export default {
  name: "AGroup",
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
    classColumnDefault: {
      type: [String, Object],
      required: false,
      default: "a_column a_column_6 a_column_12_touch",
    },
    classColumns: {
      type: [String, Object],
      required: false,
      default: "a_columns a_columns_count_12 a_columns_gap_2",
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
      default: () => uniqueId("a_group_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    inputClass: {
      type: [String, Object],
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
      type: [String, Number, Array, Object, Boolean],
      required: false,
      default: undefined,
    },
    useFlatErrors: {
      type: Boolean,
      required: false,
      default: true,
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
  },
  emits: [
    "blur",
    "focus",
    "update:modelValue",
    "updateData",
  ],
  setup(props, context) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const componentTypesMapping = () => ({
      ...AUiComponents,
      ...AFormPluginOptions.components,
      ...AFormPluginOptions.containerComponents,
    });

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
    } = UiAPI(props, context);

    const change = toRef(props, "change");
    const modelValue = toRef(props, "modelValue");

    const onUpdateModelLocal = ({ currentModel, id, item, model, props, component }) => {
      const MODEL_VALUE = cloneDeep(modelValue.value || {});

      set(MODEL_VALUE, id, cloneDeep(model));
      context.emit("update:modelValue", MODEL_VALUE);
      change.value({ currentModel, id, item, fullModel: MODEL_VALUE, model, props });
      if (isFunction(component.change)) {
        component.change({ currentModel, id, item, fullModel: MODEL_VALUE, model, props });
      }
    };

    const onUpdateDataLocal = ({ item, dataKeyByKeyId }) => {
      context.emit("updateData", { item, dataKeyByKeyId });
    };

    const children = toRef(props, "children");
    const idPrefix = toRef(props, "idPrefix");

    const firstChild = computed(() => {
      return children.value[0] || {};
    });

    const htmlIdFirstChild = computed(() => {
      return getHtmlId({
        id: firstChild.value.id,
        idPrefix: firstChild.value.idPrefix || idPrefix.value,
        htmlId: firstChild.value.htmlId,
      });
    });

    const {
      specificAttributes,
    } = SpecificTypeAPI(props);

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      changeModel,
      clearModel,
      componentStyleHide,
      componentTypesMapping,
      errorsId,
      firstChild,
      helpTextId,
      htmlIdFirstChild,
      htmlIdLocal,
      isErrors,
      onUpdateDataLocal,
      onUpdateModelLocal,
      specificAttributes,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      type: undefined,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        id: this.htmlIdLocal,
        role: "group",
        tabindex: -1,
        class: [this.inputClass, {
          a_group_invalid: this.isErrors,
        }],
        "aria-describedby": this.ariaDescribedbyLocal,
      }, [
        h("div", {
          class: this.classColumns,
        }, [
          this.firstChild.label && h(ALabel, {
            id: this.htmlIdFirstChild,
            alwaysTranslate: this.alwaysTranslate,
            extra: this.extra,
            isError: !!this.errorsAll[this.firstChild.id],
            isLabelFloat: false,
            label: this.label || this.firstChild.label,
            labelClass: this.labelClass || this.firstChild.labelClass || this.classColumnDefault,
            labelScreenReader: this.labelScreenReader || this.firstChild.labelScreenReader,
            required: this.required || this.firstChild.required,
            type: this.firstChild.type,
          }),
          this.children.map((item, itemIndex) => {
            const IS_CONTAINER = typesContainer.value[item.type];
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

            return h("div", {
              class: classColumn,
              style,
            }, [
              h(COMPONENT, {
                key: itemIndex,
                alwaysTranslate: this.alwaysTranslate,
                modelValue: IS_CONTAINER ? this.modelValue : get(this.modelValue, item.id),
                modelDependencies: IS_CONTAINER ? this.modelValue : undefined,
                errors: ERRORS,
                errorsAll: IS_CONTAINER ? this.errorsAll : undefined,
                idPrefix: this.idPrefix,
                onUpdateData: ({ dataKeyByKeyId }) => this.onUpdateDataLocal({ item, dataKeyByKeyId }),
                ...item,
                change: ({ currentModel, id, item: _item, model, props }) => this.onUpdateModelLocal({
                  currentModel, id, item: _item, model, props, component: item,
                }),
                disabled: this.disabled || item.disabled,
                ...this.specificAttributes[item.id],
                label: itemIndex === 0 ? undefined : item.label,
                slotAppend: undefined,
                classColumn: undefined,
                ...this.attributesToExcludeFromRender,
              }, this.$slots),
              (item.slotAppend && this.$slots[item.slotAppend]) ?
                this.$slots[item.slotAppend]({ item, itemIndex }) :
                "",
            ]);
          }),
        ]),
      ]),
      h(AFormHelpText, {
        id: this.helpTextId,
        alwaysTranslate: this.alwaysTranslate,
        html: this.helpText,
        extra: this.extra,
      }),
      this.isErrors && h(AErrorsText, {
        class: "a_px_3",
        id: this.errorsId,
        alwaysTranslate: this.alwaysTranslate,
        errors: this.errors,
      }),
    ]);
  },
};
