import {
  h,
  provide,
  toRef,
} from "vue";
import {
  AFormHelpText,
  ALabel,
  ATranslation,
  UIExcludeRenderAttributesAPI,
} from "../../index";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import ModelAPI from "./compositionAPI/ModelAPI";

export default {
  name: "AFormReadonly",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    collapsible: {
      type: Boolean,
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
    id: {
      type: String,
      required: true,
    },
    isCollapsed: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isRange: {
      type: Boolean,
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
    labelDescription: {
      type: String,
      required: false,
      default: undefined,
    },
    labelScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    modelValue: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: undefined,
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
    type: {
      type: String,
      required: false,
      default: undefined,
    },
    valueClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    valueParentClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    valueTag: {
      type: String,
      required: false,
      default: "span",
    },
  },
  setup(props) {
    const isRange = toRef(props, "isRange");

    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      ariaDescribedby,
      ariaLabelledby,
      helpTextId,
      labelId,
      role,
      valueId,
    } = AttributesAPI(props);

    const {
      modelValueReadonly,
    } = ModelAPI(props);

    provide("isRangeProvide", isRange);

    return {
      ariaDescribedby,
      ariaLabelledby,
      attributesToExcludeFromRender,
      helpTextId,
      labelId,
      modelValueReadonly,
      role,
      valueId,
    };
  },
  render() {
    return h("div", {
      "aria-labelledby": this.ariaLabelledby,
      "aria-describedby": this.ariaDescribedby,
      class: "a_form_element_readonly",
      role: this.role,
      ...this.attributesToExcludeFromRender,
    }, [
      (this.label || this.labelScreenReader) ?
        h(ALabel, {
          id: this.id,
          alwaysTranslate: this.alwaysTranslate,
          extra: this.extra,
          isLabelFloat: false,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          readonly: true,
          required: false,
          tag: "div",
          type: this.type,
        }) :
        "",
      h("div", {
        id: this.valueId,
        class: [
          "a_form_element_readonly_value",
          this.valueParentClass,
        ],
      }, [
        this.$slots.default ?
          this.$slots.default() :
          h(ATranslation, {
            class: this.valueClass,
            extra: this.extra,
            html: this.modelValueReadonly,
            tag: this.valueTag,
          }),
      ]),
      h(AFormHelpText, {
        id: this.helpTextId,
        alwaysTranslate: this.alwaysTranslate,
        html: this.helpText,
        extra: this.extra,
      }),
    ]);
  },
};
