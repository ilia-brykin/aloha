import {
  h,
} from "vue";

import AElement from "../../AElement/AElement";
import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import ALabel from "../ALabel/ALabel";
import ATranslation from "../../ATranslation/ATranslation";

import CheckedAPI from "./compositionAPI/CheckedAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import OnInputAPI from "./compositionAPI/OnInputAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiDisabledAPI from "../compositionApi/UiDisabledAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import placements from "../../const/placements";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ASwitch",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    defaultLabel: {
      type: String,
      required: false,
      default: "_A_SWITCH_DEFAULT_LABEL_",
    },
    defaultValue: {
      type: [Boolean, String, Number],
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
    falseLabel: {
      type: String,
      required: false,
      default: "_A_SWITCH_FALSE_LABEL_",
    },
    falseValue: {
      type: [Boolean, String, Number],
      required: false,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      required: false,
    },
    helpText: {
      type: String,
      required: false,
      default: undefined
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_switch_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    inputAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputClass: {
      type: [String, Object],
      required: false,
      default: undefined,
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
    isThreeState: {
      type: Boolean,
      required: false,
      default: false,
    },
    isTitleHtml: {
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
    modelUndefined: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: undefined,
    },
    modelValue: {
      type: [Boolean, String, Number],
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    titlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: placement => placements.indexOf(placement) !== -1,
    },
    trueLabel: {
      type: String,
      required: false,
      default: "_A_SWITCH_TRUE_LABEL_",
    },
    trueValue: {
      type: [Boolean, String, Number],
      required: false,
      default: true,
    },
  },
  emits: [
    "blur",
    "focus",
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      disabledAttribut,
    } = UiDisabledAPI(props);

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
      isModel,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      isModelDefault,
      isModelFalse,
      isModelTrue,
    } = ModelAPI(props);

    const {
      labelValueLocal,
    } = LabelAPI(props, {
      isModelFalse,
      isModelTrue,
    });

    const {
      isChecked,
    } = CheckedAPI({
      isModelFalse,
      isModelTrue,
    });

    const {
      onInput,
      onKeydown,
    } = OnInputAPI(props, {
      changeModel,
      isModelFalse,
      isModelTrue,
    });

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      clearModel,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isChecked,
      isErrors,
      isModel,
      isModelDefault,
      labelValueLocal,
      onBlur,
      onFocus,
      onInput,
      onKeydown,
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
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_not_empty: this.isModel,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.required,
          isError: this.isErrors,
        }),
        h("div", {
          class: "switch_button__wrapper",
        }, [
          h(AElement, {
            class: [
              "switch_button",
              {
                switch_button_undefined: this.isModelDefault,
                switch_button_invalid: this.isErrors,
                switch_button_auto: !this.fullWidth,
              },
            ],
            classDefault: "",
            isTitleHtml: this.isTitleHtml,
            tag: "div",
            title: this.title,
            titlePlacement: this.titlePlacement,
            type: "text",
          }, {
            default: () => [
              h("input", {
                id: this.htmlIdLocal,
                "aria-describedby": this.ariaDescribedbyLocal,
                ariaInvalid: this.isErrors,
                ariaRequired: this.required,
                checked: this.isChecked,
                class: [
                  "switch_button__input",
                  this.inputClass,
                ],
                disabled: this.disabledAttribut,
                type: "checkbox",
                ...this.inputAttributes,
                onClick: this.onInput,
                onKeydown: this.onKeydown,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
              }),
              h(ATranslation, {
                alwaysTranslate: this.alwaysTranslate,
                tag: "label",
                class: [
                  "switch_button__label",
                  {
                    switch_button__label_full: this.fullWidth,
                  },
                ],
                for: this.htmlIdLocal,
                extra: this.extra,
                html: this.labelValueLocal,
              }),
            ],
          }),
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
