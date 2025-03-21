import {
  h,
  onBeforeUnmount,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import AInputNumber from "../AInputNumber/AInputNumber";
import ALabel from "../ALabel/ALabel";

import FocusAPI from "./compositionAPI/FocusAPI";
import IdAPI from "./compositionAPI/IdAPI";
import InputAttributesAPI from "./compositionAPI/InputAttributesAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import TypeAPI from "./compositionAPI/TypeAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiLabelClickEventBusAPI from "../compositionApi/UiLabelClickEventBusAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import Types from "./utils/Types";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AInputNumberRange",
  inheritAttrs: false,
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
    controlsType: {
      type: String,
      required: false,
      default: "plus-minus",
      validator: value => ["plus-minus", "arrows"].indexOf(value) !== -1,
      // TODO: "arrows",
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
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    iconPrepend: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_input_number_range_"),
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
    inputAttributesMax: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputAttributesMin: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputWidth: {
      type: [Number, String],
      required: false,
      default: 200,
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
    keyMax: {
      tpe: String,
      required: false,
      default: "max",
    },
    keyMin: {
      tpe: String,
      required: false,
      default: "min",
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
    labelMax: {
      type: String,
      required: false,
      default: "_A_INPUT_NUMBER_RANGE_LABEL_MAX_",
    },
    labelMin: {
      type: String,
      required: false,
      default: "_A_INPUT_NUMBER_RANGE_LABEL_MIN_",
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    max: {
      type: Number,
      required: false,
      default: undefined,
    },
    min: {
      type: Number,
      required: false,
      default: undefined,
    },
    modelUndefined: {
      required: false,
      default: undefined,
    },
    modelValue: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    placeholderMax: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    placeholderMin: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    precision: {
      type: Number,
      validator: value => value >= 0 && value === Number.parseInt(`${ value }`, 10),
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    step: {
      type: Number,
      required: false,
      default: 1,
    },
    stepStrictly: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "numberRange",
      validator: value => Types.indexOf(value) !== -1,
      // TODO: "float", "floatPositiv", "floatNonNegative"
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
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
    } = UiAPI(props, context);

    const {
      changeModelMax,
      changeModelMin,
      modelValueMax,
      modelValueMin,
    } = ModelAPI(props, {
      changeModel,
    });

    const {
      idMax,
      idMin,
    } = IdAPI({
      htmlIdLocal,
    });

    const {
      typeLocal,
    } = TypeAPI(props);

    const {
      inputAttributesMaxLocal,
      inputAttributesMinLocal,
    } = InputAttributesAPI(props, {
      htmlIdLocal,
      idMax,
      idMin,
    });

    const {
      setFocusToMinInput,
    } = FocusAPI({
      idMin,
    });

    const {
      destroyEventBusClickLabel,
      initEventBusClickLabel,
    } = UiLabelClickEventBusAPI({
      htmlIdLocal,
      clickLabel: setFocusToMinInput,
    });

    initEventBusClickLabel();

    onBeforeUnmount(() => {
      destroyEventBusClickLabel();
    });

    return {
      attributesToExcludeFromRender,
      changeModelMax,
      changeModelMin,
      componentStyleHide,
      errorsId,
      helpTextId,
      htmlIdLocal,
      idMax,
      idMin,
      inputAttributesMaxLocal,
      inputAttributesMinLocal,
      isErrors,
      modelValueMax,
      modelValueMin,
      typeLocal,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    return h("div", {
      ...this.$attrs,
      class: "a_input_number_range",
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_invalid: this.isErrors,
        }],
      }, [
        this.label ?
          h(ALabel, {
            id: this.htmlIdLocal,
            alwaysTranslate: this.alwaysTranslate,
            label: this.label,
            labelClass: this.labelClass,
            labelScreenReader: this.labelScreenReader,
            required: this.required,
            type: this.type,
            isLabelFloat: false,
            isError: this.isErrors,
          }) :
          "",
        h("div", {
          class: "a_input_number_range__content",
        }, [
          h("div", {
            class: "a_input_number_range__group a_input_number_range__group_min",
          }, [
            h(ALabel, {
              id: this.idMin,
              alwaysTranslate: this.alwaysTranslate,
              labelClass: "a_input_number_range__label a_input_number_range__label_min",
              isLabelFloat: false,
              label: this.labelMin,
              isError: this.isErrors,
            }),
            h(AInputNumber, {
              id: this.idMin,
              alwaysTranslate: this.alwaysTranslate,
              controlsType: this.controlsType,
              iconPrepend: this.iconPrepend,
              inputWidth: this.inputWidth,
              isLabelFloat: true,
              max: this.max,
              min: this.min,
              modelUndefined: this.modelUndefined,
              precision: this.precision,
              readonly: this.readonly,
              step: this.step,
              stepStrictly: this.stepStrictly,
              type: this.typeLocal,
              disabled: this.disabled,
              inputAttributes: this.inputAttributesMinLocal,
              required: this.required,
              modelValue: this.modelValueMin,
              placeholder: this.placeholderMin,
              change: this.changeModelMin,
            }),
          ]),
          h("div", {
            class: "a_input_number_range__group a_input_number_range__group_max",
          }, [
            h(ALabel, {
              id: this.idMax,
              alwaysTranslate: this.alwaysTranslate,
              labelClass: "a_input_number_range__label a_input_number_range__label_max",
              isLabelFloat: false,
              label: this.labelMax,
              isError: this.isErrors,
            }),
            h(AInputNumber, {
              id: this.idMax,
              alwaysTranslate: this.alwaysTranslate,
              controlsType: this.controlsType,
              iconPrepend: this.iconPrepend,
              inputWidth: this.inputWidth,
              isLabelFloat: true,
              max: this.max,
              min: this.min,
              modelUndefined: this.modelUndefined,
              precision: this.precision,
              readonly: this.readonly,
              step: this.step,
              stepStrictly: this.stepStrictly,
              type: this.typeLocal,
              disabled: this.disabled,
              inputAttributes: this.inputAttributesMaxLocal,
              required: this.required,
              modelValue: this.modelValueMax,
              placeholder: this.placeholderMax,
              change: this.changeModelMax,
            }),
          ]),
        ]),
        h(AFormHelpText, {
          id: this.helpTextId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrors ?
          h(AErrorsText, {
            id: this.errorsId,
            alwaysTranslate: this.alwaysTranslate,
            errors: this.errors,
          }) :
          "",
      ]),
    ]);
  },
};
