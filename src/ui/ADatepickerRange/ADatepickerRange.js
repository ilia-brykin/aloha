import {
  h,
  onBeforeUnmount,
} from "vue";
import {
  ADatepicker,
  AErrorsText,
  AFormHelpText,
  AFormReadonly,
  ALabel,
  APlacements,
  UiAPI,
  UIExcludeRenderAttributesAPI,
  UiLabelClickEventBusAPI,
  UiStyleHideAPI,
} from "../../index";

import FocusAPI from "./compositionAPI/FocusAPI";
import IdAPI from "./compositionAPI/IdAPI";
import InputAttributesAPI from "./compositionAPI/InputAttributesAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import ReadonlyAPI from "./compositionAPI/ReadonlyAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ADatepickerRange",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
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
      default: "DD.MM.YYYY",
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
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
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
      validator: placement => APlacements.indexOf(placement) !== -1,
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
    readonlyDefault: {
      type: String,
      required: false,
      default: "",
    },
    readonlyDefaultFrom: {
      type: String,
      required: false,
      default: undefined,
    },
    readonlyDefaultUntil: {
      type: String,
      required: false,
      default: undefined,
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
    } = InputAttributesAPI(props, {
      htmlIdLocal,
      idFrom,
      idUntil,
    });

    const {
      setFocusToFromInput,
    } = FocusAPI({
      idFrom,
    });

    const {
      destroyEventBusClickLabel,
      initEventBusClickLabel,
    } = UiLabelClickEventBusAPI({
      htmlIdLocal,
      clickLabel: setFocusToFromInput,
    });

    const {
      readonlyDefaultFromLocal,
      readonlyDefaultUntilLocal,
    } = ReadonlyAPI(props);

    initEventBusClickLabel();

    onBeforeUnmount(() => {
      destroyEventBusClickLabel();
    });

    return {
      attributesToExcludeFromRender,
      changeModelFrom,
      changeModelUntil,
      componentStyleHide,
      errorsId,
      helpTextId,
      htmlIdLocal,
      idFrom,
      idUntil,
      inputAttributesFromLocal,
      inputAttributesUntilLocal,
      isErrors,
      modelValueFrom,
      modelValueUntil,
      readonlyDefaultFromLocal,
      readonlyDefaultUntilLocal,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    if (this.readonly) {
      return h(AFormReadonly, {
        ...this.$attrs,
        id: this.htmlIdLocal,
        alwaysTranslate: this.alwaysTranslate,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        isRange: true,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
        type: "dateRange",
        valueParentClass: "a_form_element_readonly_value_range",
      }, () => [
        h(ADatepicker, {
          id: this.idFrom,
          alwaysTranslate: this.alwaysTranslate,
          format: this.format,
          formatSave: this.formatSave,
          iconDay: this.iconDay,
          label: this.labelFrom,
          lang: this.lang,
          modelValue: this.modelValueFrom,
          readonly: true,
          readonlyDefault: this.readonlyDefaultFromLocal,
          shortcuts: this.shortcuts,
          type: "date",
        }),
        h(ADatepicker, {
          id: this.idUntil,
          alwaysTranslate: this.alwaysTranslate,
          format: this.format,
          formatSave: this.formatSave,
          iconDay: this.iconDay,
          lang: this.lang,
          label: this.labelUntil,
          modelValue: this.modelValueUntil,
          readonly: true,
          readonlyDefault: this.readonlyDefaultUntilLocal,
          shortcuts: this.shortcuts,
          type: "date",
        }),
      ]);
    }

    return h("div", {
      ...this.$attrs,
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
          alwaysTranslate: this.alwaysTranslate,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.required,
          type: this.type,
          isLabelFloat: false,
          isError: this.isErrors,
        }),
        h("div", {
          class: "a_datepicker_range__content",
        }, [
          h("div", {
            class: "a_datepicker_range__group a_datepicker_range__group_min",
          }, [
            h(ALabel, {
              id: this.idFrom,
              alwaysTranslate: this.alwaysTranslate,
              labelClass: "a_datepicker_range__label a_datepicker_range__label_min",
              isLabelFloat: false,
              label: this.labelFrom,
              isError: this.isErrors,
            }),
            h(ADatepicker, {
              id: this.idFrom,
              ref: "from",
              alwaysTranslate: this.alwaysTranslate,
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
            class: "a_datepicker_range__group",
          }, [
            h(ALabel, {
              id: this.idUntil,
              alwaysTranslate: this.alwaysTranslate,
              labelClass: "a_datepicker_range__label a_datepicker_range__label_max",
              isLabelFloat: false,
              label: this.labelUntil,
              isError: this.isErrors,
            }),
            h(ADatepicker, {
              id: this.idUntil,
              ref: "until",
              alwaysTranslate: this.alwaysTranslate,
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
            alwaysTranslate: this.alwaysTranslate,
            class: "a_datepicker_range__help_text",
            id: this.helpTextId,
            html: this.helpText,
            extra: this.extra,
          }),
          this.isErrors && h(AErrorsText, {
            id: this.errorsId,
            alwaysTranslate: this.alwaysTranslate,
            errors: this.errors,
          }),
        ]),
      ]),
    ]);
  },
};
