import {
  h,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import ALabel from "../ALabel/ALabel";
import ATooltip from "../../ATooltip/ATooltip";
import ATranslation from "../../ATranslation/ATranslation";

import CheckedAPI from "./compositionAPI/CheckedAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import OnInputAPI from "./compositionAPI/OnInputAPI";
import TitleAPI from "./compositionAPI/TitleAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import placements from "../../const/placements";
import {
  uniqueId,
} from "lodash-es";


export default {
  name: "ASwitch",
  props: {
    disabled: {
      type: Boolean,
      required: false,
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
    htmlId: {
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
      required: false,
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelUndefined: {
      required: false,
      default: null,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: true,
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
    classColumn: {
      type: String,
      required: false,
      default: undefined,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    dependencies: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    helpText: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
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
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    modelValue: {
      type: [Boolean, String, Number],
      required: false,
      default: undefined,
    },
    trueValue: {
      type: [Boolean, String, Number],
      required: false,
      default: true,
    },
    falseValue: {
      type: [Boolean, String, Number],
      required: false,
      default: false,
    },
    defaultValue: {
      type: [Boolean, String, Number],
      required: false,
      default: undefined,
    },
    trueLabel: {
      type: String,
      required: false,
      default: "_YES_",
    },
    falseLabel: {
      type: String,
      required: false,
      default: "_NO_",
    },
    defaultLabel: {
      type: String,
      required: false,
      default: "Nicht ausgewählt",
    },
    isThreeState: {
      type: Boolean,
      required: false,
      default: false,
    },
    titlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: placement => placements.indexOf(placement) !== -1,
    },
    title: {
      type: String,
      required: false,
      default: undefined,
    },
    titleMinWidth: {
      type: Number,
      required: false,
      default: undefined,
    },
    titleWidth: {
      type: Number,
      required: false,
      default: undefined,
    },
    titleMaxWidth: {
      type: Number,
      required: false,
      default: undefined,
    },
    fullWidth: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "blur",
    "focus",
    "update:modelValue",
  ],
  setup(props, context) {
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
      hasTitle,
    } = TitleAPI(props);

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
      clearModel,
      componentStyleHide,
      errorsId,
      hasTitle,
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
    return this.isRender && h("div", {
      style: this.componentStyleHide,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_not_empty: this.isModel,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          label: this.label,
          labelClass: this.labelClass,
          required: this.required,
          type: this.type,
          isLabelFloat: this.isLabelFloat,
        }),
        h(ATooltip, {
          tag: "div",
          placement: this.titlePlacement,
          isHide: !this.hasTitle,
          class: ["switch_button", {
            switch_button_undefined: this.isModelDefault,
            switch_button_invalid: this.isErrors,
          }],
          minWidth: this.titleMinWidth,
          width: this.titleWidth,
          maxWidth: this.titleMaxWidth,
        }, {
          default: () => [
            h("input", {
              id: this.htmlIdLocal,
              ref: "input",
              checked: this.isChecked,
              type: "checkbox",
              class: [
                "switch_button__input",
                this.inputClass,
              ],
              disabled: this.disabled,
              ariaRequired: this.required,
              ariaInvalid: this.isErrors,
              "aria-describedby": this.ariaDescribedbyLocal,
              ...this.inputAttributes,
              onClick: this.onInput,
              onKeydown: this.onKeydown,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
            }),
            h(ATranslation, {
              tag: "label",
              class: [
                "switch_button__label",
                {
                  switch_button__label_full: this.fullWidth,
                },
              ],
              for: this.htmlIdLocal,
              html: this.labelValueLocal,
            }),
          ],
          title: () => h(ATranslation, {
            html: this.title,
          }),
        }),
        h(AFormHelpText, {
          id: this.helpTextId,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
