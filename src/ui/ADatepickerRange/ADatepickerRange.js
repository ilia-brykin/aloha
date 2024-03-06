import {
  h,
} from "vue";

import ADatepicker from "../ADatepicker/ADatepicker";
import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import ALabel from "../ALabel/ALabel";

import IdAPI from "./compositionAPI/IdAPI";
import InputAttributesAPI from "../AInputNumberRange/compositionAPI/InputAttributesAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import UiAPI from "../compositionApi/UiAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import placements from "../../const/placements";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ADatepickerRange",
  props: {
    appendToBody: {
      type: Boolean,
      default: false,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    disabledFrom: {
      type: Boolean,
      required: false,
    },
    disabledUntil: {
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
    firstDayOfWeek: {
      type: Number,
      required: false,
      default: 1,
      validator: val => val >= 1 && val <= 7,
    },
    format: {
      type: [String, Object],
      default: "DD.MM.YYYY"
    },
    formatSave: {
      type: String,
      required: false,
      default: "YYYY-MM-DD",
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
    iconDay: {
      type: [Number, String],
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_datepicker_range_"),
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
    inputAttributesFrom: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputAttributesUntil: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputClass: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: "pux_datepicker__input",
    },
    inputName: {
      type: String,
      default: "date",
    },
    inputWidth: {
      type: [Number, String],
      required: false,
      default: 270,
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
    keyFrom: {
      tpe: String,
      required: false,
      default: "from",
    },
    keyUntil: {
      tpe: String,
      required: false,
      default: "until",
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
    labelFrom: {
      type: String,
      required: false,
      default: "_A_DATEPICKER_RANGE_FROM_",
    },
    labelUntil: {
      type: String,
      required: false,
      default: "_A_DATEPICKER_RANGE_UNTIL_",
    },
    lang: {
      type: String,
      default: "de",
      required: false,
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
    placeholderFrom: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    placeholderUntil: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    placement: {
      type: String,
      required: false,
      default: "bottom-start",
      validator: placement => placements.indexOf(placement) !== -1,
    },
    popupStyle: {
      type: Object,
      required: false,
      default: () => ({}),
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
    shortcuts: {
      type: [Boolean, Array],
      default: true,
    },
    type: {
      type: String,
      required: false,
      default: "dateRange",
    },
  },
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
      changeModelFrom,
      changeModelUntil,
      modelValueFrom,
      modelValueUntil,
    } = ModelAPI(props, {
      changeModel,
    });

    const {
      idFrom,
      idUntil,
    } = IdAPI({
      htmlIdLocal,
    });

    const {
      inputAttributesFromLocal,
      inputAttributesUntilLocal,
    } = InputAttributesAPI(props);

    return {
      attributesToExcludeFromRender,
      changeModelFrom,
      changeModelUntil,
      componentStyleHide,
      errorsId,
      helpTextId,
      idFrom,
      idUntil,
      inputAttributesFromLocal,
      inputAttributesUntilLocal,
      isErrors,
      modelValueFrom,
      modelValueUntil,
    };
  },
  render() {
    if (!this.isRender) {
      return "";
    }

    return h("div", {
      class: "a_datepicker_range",
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_invalid: this.isErrors,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.idFrom,
          label: this.label,
          labelClass: this.labelClass,
          required: this.required,
          type: this.type,
          isLabelFloat: false,
        }),
        h("div", {
          class: "a_datepicker_range__content",
        }, [
          h("div", {
            class: "a_datepicker_range__group a_datepicker_range__group_min"
          }, [
            h(ALabel, {
              id: this.idFrom,
              labelClass: "a_datepicker_range__label a_datepicker_range__label_min",
              isLabelFloat: false,
              label: this.labelFrom,
            }),
            h(ADatepicker, {
              id: this.idFrom,
              ref: "from",
              inputAttr: this.inputAttributesFromLocal,
              modelValue: this.modelValueFrom,
              formatSave: this.formatSave,
              firstDayOfWeek: this.firstDayOfWeek,
              appendToBody: this.appendToBody,
              popupStyle: this.popupStyle,
              iconDay: this.iconDay,
              inputName: this.inputName,
              placement: this.placement,
              clearable: this.clearable,
              shortcuts: this.shortcuts,
              lang: this.lang,
              inputClass: this.inputClass,
              placeholder: this.placeholderFrom,
              disabled: this.disabled || this.disabledFrom,
              width: this.inputWidth,
              format: this.format,
              type: "date",
              onChange: this.changeModelFrom,
            }),
          ]),
          h("div", {
            class: "a_datepicker_range__group"
          }, [
            h(ALabel, {
              id: this.idUntil,
              labelClass: "a_datepicker_range__label a_datepicker_range__label_max",
              isLabelFloat: false,
              label: this.labelUntil,
            }),
            h(ADatepicker, {
              id: this.idUntil,
              ref: "until",
              modelValue: this.modelValueUntil,
              formatSave: this.formatSave,
              firstDayOfWeek: this.firstDayOfWeek,
              appendToBody: this.appendToBody,
              popupStyle: this.popupStyle,
              iconDay: this.iconDay,
              inputName: this.inputName,
              placement: this.placement,
              clearable: this.clearable,
              shortcuts: this.shortcuts,
              lang: this.lang,
              inputClass: this.inputClass,
              placeholder: this.placeholderUntil,
              disabled: this.disabled || this.disabledUntil,
              width: this.inputWidth,
              format: this.format,
              type: "date",
              inputAttr: this.inputAttributesUntilLocal,
              onChange: this.changeModelUntil,
            }),
          ]),
          h(AFormHelpText, {
            class: "a_datepicker_range__help_text",
            id: this.helpTextId,
            html: this.helpText,
            extra: this.extra,
          }),
          this.isErrors && h(AErrorsText, {
            id: this.errorsId,
            errors: this.errors,
          }),
        ]),
      ]),
    ]);
  },
};
