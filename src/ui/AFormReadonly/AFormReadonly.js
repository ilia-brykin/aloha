import {
  h,
} from "vue";
import {
  ALabel,
  ATranslation,
  UIExcludeRenderAttributesAPI,
} from "../../index";

import LabelAPI from "./compositionAPI/LabelAPI";
import ModelAPI from "./compositionAPI/ModelAPI";

export default {
  name: "AFormReadonly",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
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
    id: {
      type: String,
      required: true,
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
  },
  setup(props) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      labelId,
    } = LabelAPI(props);

    const {
      modelValueReadonly,
    } = ModelAPI(props);

    return {
      attributesToExcludeFromRender,
      labelId,
      modelValueReadonly,
    };
  },
  render() {
    return h("div", {
      "aria-labelledby": this.labelId,
      role: "group",
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
          required: this.required,
          tag: "div",
          type: this.type,
        }) :
        "",
      h("div", {
        class: "a_form_readonly_value",
      }, [
        this.$slots.default ?
          this.$slots.default() :
          h(ATranslation, {
            extra: this.extra,
            html: this.modelValueReadonly,
            tag: "span",
          }),
      ]),
    ]);
  },
};
