/* eslint vue/component-api-style: off */
import {
  computed,
  h,
  ref,
  Teleport,
  toRef,
  watch,
  withDirectives,
} from "vue";
import {
  AErrorsText,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  AIcon,
  ALabel,
  APlacements,
  UiAPI,
  UIExcludeRenderAttributesAPI,
  UiInputAutofillAPI,
  UiStyleHideAPI,
} from "../../index";

import ADatepickerCalendarPanel from "./ADatepickerCalendarPanel/ADatepickerCalendarPanel";
import ADatepickerIcon from "./ADatepickerIcon/ADatepickerIcon";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import LanguagesAPI from "./compositionAPI/LanguagesAPI";
import PlaceholderAPI from "./compositionAPI/PlaceholderAPI";
import PopoverAPI from "./compositionAPI/PopoverAPI";
import RefsAPI from "./compositionAPI/RefsAPI";
import TypeAPI from "./compositionAPI/TypeAPI";
import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import AOnHooks from "../../directives/AOnHooks";
import UiMixinProps from "../mixins/UiMixinProps";
import {
  getPropDefault,
} from "../../plugins/AComponentsPlugin";
import {
  isPlainObject,
  isValidDate,
} from "./utils";
import {
  transformDate,
} from "./utils/transform";
// @vue/component
export default {
  name: "ADatepicker",
  mixins: [
    UiMixinProps,
  ],
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    appendToBody: {
      type: Boolean,
      default: () => getPropDefault("ADatepicker", "appendToBody", false),
    },
    class: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("ADatepicker", "class"),
    },
    clearable: {
      type: Boolean,
      default: () => getPropDefault("ADatepicker", "clearable", true),
    },
    confirm: {
      type: Boolean,
      default: () => getPropDefault("ADatepicker", "confirm", false),
    },
    confirmText: {
      type: String,
      default: () => getPropDefault("ADatepicker", "confirmText", "OK"),
    },
    dateFormat: {
      type: String, // format the time header and date tooltip
      default: () => getPropDefault("ADatepicker", "dateFormat"),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: () => getPropDefault("ADatepicker", "editable", true),
    },
    errorIcon: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    firstDayOfWeek: {
      type: Number,
      required: false,
      default: () => getPropDefault("ADatepicker", "firstDayOfWeek", 1),
      validator: val => val >= 1 && val <= 7,
    },
    focusStartDate: {
      type: Boolean,
      default: () => getPropDefault("ADatepicker", "focusStartDate", false),
    },
    format: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("ADatepicker", "format"),
    },
    formatSave: {
      type: String,
      required: false,
      default: () => getPropDefault("ADatepicker", "formatSave"),
    },
    iconDay: {
      type: [Number, String],
      default: () => getPropDefault("ADatepicker", "iconDay"),
    },
    inputAttr: {
      type: Object,
      required: false,
      default: () => getPropDefault("ADatepicker", "inputAttr", {}),
    },
    inputClass: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: () => getPropDefault("ADatepicker", "inputClass", "a_datepicker__input"),
    },
    inputName: {
      type: String,
      default: () => getPropDefault("ADatepicker", "inputName", "date"),
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    labelPosition: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["float", "inset", "top"].indexOf(value) !== -1,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    maxDate: {
      type: [String, Date],
      required: false,
      default: () => getPropDefault("ADatepicker", "maxDate"),
    },
    minDate: {
      type: [String, Date],
      required: false,
      default: () => getPropDefault("ADatepicker", "minDate"),
    },
    minuteStep: {
      type: Number,
      required: false,
      default: () => getPropDefault("ADatepicker", "minuteStep", 0),
      validator: val => val >= 0 && val <= 60,
    },
    timePrecision: {
      type: String,
      required: false,
      default: () => getPropDefault("ADatepicker", "timePrecision", "minute"),
      validator: value => ["hour", "minute", "second"].indexOf(value) !== -1,
    },
    modelValue: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: undefined,
    },
    placeholder: {
      type: String,
      default: () => getPropDefault("ADatepicker", "placeholder"),
    },
    placeholdersDefault: {
      type: Object,
      required: false,
      default: () => getPropDefault("ADatepicker", "placeholdersDefault", {
        date: "_A_DATEPICKER_PLACEHOLDER_DATE_",
        dateRange: "_A_DATEPICKER_PLACEHOLDER_DATE_RANGE_",
        timeHour: "_A_DATEPICKER_PLACEHOLDER_TIME_HOUR_",
        timeMinute: "_A_DATEPICKER_PLACEHOLDER_TIME_MINUTE_",
        timeSecond: "_A_DATEPICKER_PLACEHOLDER_TIME_SECOND_",
        datetimeHour: "_A_DATEPICKER_PLACEHOLDER_DATETIME_HOUR_",
        datetimeMinute: "_A_DATEPICKER_PLACEHOLDER_DATETIME_MINUTE_",
        datetimeSecond: "_A_DATEPICKER_PLACEHOLDER_DATETIME_SECOND_",
      }),
    },
    // the popup closes when the button / the field is scrolled out of the view
    isCloseByButtonInvisibleInViewport: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ADatepicker", "isCloseByButtonInvisibleInViewport", true),
    },
    placement: {
      type: String,
      required: false,
      default: () => getPropDefault("ADatepicker", "placement", "bottom-start"),
      validator: placement => APlacements.indexOf(placement) !== -1,
    },
    popupStyle: {
      type: Object,
      required: false,
      default: () => getPropDefault("ADatepicker", "popupStyle", {}),
    },
    range: {
      type: Boolean,
      default: () => getPropDefault("ADatepicker", "range", false),
    },
    rangeSeparator: {
      type: String,
      default: () => getPropDefault("ADatepicker", "rangeSeparator", "~"),
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyValueParentClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: () => getPropDefault("ADatepicker", "readonlyDefault", ""),
    },
    shortcuts: {
      type: [Boolean, Array],
      default: () => getPropDefault("ADatepicker", "shortcuts", true),
    },
    startDate: {
      type: [String, Date],
      required: false,
      default: () => getPropDefault("ADatepicker", "startDate"),
    },
    type: {
      type: String,
      default: () => getPropDefault("ADatepicker", "type", "date"), // ["date", "datetime"] zendy added "month", "year", mxie added "time"
      validator: value => ["date", "datetime", "month", "year", "time"].indexOf(value) !== -1,
    },
    valueType: {
      default: () => getPropDefault("ADatepicker", "valueType", "format"),
      validator: function(value) {
        return ["timestamp", "format", "date"].indexOf(value) !== -1 || isPlainObject(value);
      },
    },
    width: {
      type: [String, Number],
      default: () => getPropDefault("ADatepicker", "width", null),
    },
  },
  emits: [
    "blur",
    "change",
    "clear",
    "confirm",
    "focus",
    "input",
    "inputError",
    "changeCalendarMonth",
    "changeCalendarYear",
  ],
  setup(props, context) {
    const modelValue = toRef(props, "modelValue");
    const isInputFocused = ref(false);
    const {
      formatLocal,
      formatSaveLocal,
    } = TypeAPI(props);
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);
    const {
      calendarRef,
      calendarPanelRef,
      calendarPanel2Ref,
      focusByCloseRef,
      inputRef,
    } = RefsAPI();
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
      labelDescriptionId,
      onBlur,
      onFocus,
      isLabelFloatLocal,
      isLabelInset,
    } = UiAPI(props, context);
    const {
      isAutofill,
    } = UiInputAutofillAPI({ inputRef });
    const hasErrorIcon = computed(() => !!(isErrors.value && props.errorIcon));
    const {
      currentLanguage,
    } = LanguagesAPI();
    const {
      closePopover,
      destroyPopover,
      initCalendar,
      openPopoverWithFloatingUi,
      popupVisible,
      setCloseFocus,
    } = PopoverAPI(props, {
      calendarRef,
      focusByCloseRef,
      inputRef,
    });
    const {
      ariaExpandedForCalendar,
      ariaHiddenForCalendar,
      idForCalendar,
      idForPanel,
      idsForPanelRange,
      innerType,
      widthLocal,
    } = AttributesAPI(props, {
      currentLanguage,
      popupVisible,
    });
    const {
      clearDate,
      confirmDate,
      currentValue,
      emitDate,
      handleChange,
      handleInput,
      handleKeydown,
      initCurrentValue,
      onModelValueChange,
      parse,
      selectDate,
      selectEndDate,
      selectEndTime,
      selectStartDate,
      selectStartTime,
      selectTime,
      stringify,
      text,
      updateDate,
      userInput,
    } = EventsAPI(props, context, {
      calendarPanelRef,
      changeModel,
      closePopover,
      formatLocal,
      formatSaveLocal,
      initCalendar,
      setCloseFocus,
    });
    // name of the calendar dialog for screen readers
    const dialogLabel = computed(() => getTranslatedText({ placeholder: "_A_DATEPICKER_DIALOG_LABEL_" }));
    const {
      innerPlaceholder,
    } = PlaceholderAPI(props, {
      isInputFocused,
      isLabelFloatLocal,
      text,
    });
    const blur = () => {
      inputRef.value && inputRef.value.blur();
    };
    initCurrentValue();
    watch(modelValue, onModelValueChange, {
      immediate: true,
    });
    return {
      isLabelFloatLocal,
      isLabelInset,
      ariaDescribedbyLocal,
      ariaExpandedForCalendar,
      ariaHiddenForCalendar,
      attributesToExcludeFromRender,
      blur,
      calendarPanel2Ref,
      calendarPanelRef,
      calendarRef,
      changeModel,
      clearDate,
      clearModel,
      parse,
      closePopover,
      componentStyleHide,
      confirmDate,
      stringify,
      currentLanguage,
      currentValue,
      destroyPopover,
      emitDate,
      errorsId,
      hasErrorIcon,
      text,
      focusByCloseRef,
      formatLocal,
      handleChange,
      handleInput,
      handleKeydown,
      helpTextId,
      htmlIdLocal,
      idForCalendar,
      idForPanel,
      idsForPanelRange,
      initCalendar,
      isInputFocused,
      innerPlaceholder,
      innerType,
      inputRef,
      isAutofill,
      isErrors,
      isModel,
      labelDescriptionId,
      onBlur,
      onFocus,
      openPopoverWithFloatingUi,
      popupVisible,
      selectDate,
      selectEndDate,
      selectEndTime,
      selectStartDate,
      selectStartTime,
      selectTime,
      dialogLabel,
      setCloseFocus,
      updateDate,
      userInput,
      widthLocal,
    };
  },
  computed: {
    transform() {
      const type = this.valueType;
      if (isPlainObject(type)) {
        return { ...transformDate.date, ...type };
      }
      if (type === "format") {
        return {
          value2date: this.parse.bind(this),
          date2value: this.stringify.bind(this),
        };
      }
      return transformDate[type] || transformDate.date;
    },
    showClearIcon() {
      return !this.disabled && this.clearable && this.text;
    },
    innerShortcuts() {
      if (Array.isArray(this.shortcuts)) {
        return this.shortcuts;
      }
      if (this.shortcuts === false) {
        return [];
      }
      const pickers = this.currentLanguage.pickers;
      const arr = [
        {
          text: pickers[0],
          onClick(self) {
            self.currentValue = [new Date(), new Date(Date.now() + 3600 * 1000 * 24 * 7)];
            self.updateDate(true);
          },
        },
        {
          text: pickers[1],
          onClick(self) {
            self.currentValue = [new Date(), new Date(Date.now() + 3600 * 1000 * 24 * 30)];
            self.updateDate(true);
          },
        },
        {
          text: pickers[2],
          onClick(self) {
            self.currentValue = [new Date(Date.now() - 3600 * 1000 * 24 * 7), new Date()];
            self.updateDate(true);
          },
        },
        {
          text: pickers[3],
          onClick(self) {
            self.currentValue = [new Date(Date.now() - 3600 * 1000 * 24 * 30), new Date()];
            self.updateDate(true);
          },
        },
      ];
      return arr;
    },
    innerDateFormat() {
      if (this.dateFormat) {
        return this.dateFormat;
      }
      if (typeof this.formatLocal !== "string") {
        return "YYYY-MM-DD";
      }
      if (this.innerType === "date") {
        return this.formatLocal;
      }
      return this.formatLocal.replace(/[Hh]+.*[msSaAZ]|\[.*?\]/g, "").trim() || "YYYY-MM-DD";
    },
  },
  watch: {
    popupVisible(val) {
      if (val) {
        this.initCalendar();
      } else {
        this.userInput = null;
        this.blur();
      }
    },
  },
  methods: {
    isValidValue(value) {
      const { value2date } = this.transform;
      return isValidDate(value2date(value));
    },
    isValidRangeValue(value) {
      const { value2date } = this.transform;
      return Array.isArray(value) && value.length === 2 && this.isValidValue(value[0]) &&
        this.isValidValue(value[1]) && (value2date(value[1]).getTime() >= value2date(value[0]).getTime());
    },
    selectRange(range) {
      if (typeof range.onClick === "function") {
        const close = range.onClick(this);
        if (close !== false) {
          this.closePopover();
        }
      } else {
        this.currentValue = [new Date(range.start), new Date(range.end)];
        this.updateDate(true);
        this.closePopover();
      }
    },
    handleBlur(event) {
      this.isInputFocused = false;
      this.$emit("blur", event);
    },
    handleFocus(event) {
      this.isInputFocused = true;
      this.initCalendar();
      this.$emit("focus", event);
    },
  },
  render() {
    if (!this.isRender) {
      return null;
    }
    if (this.readonly) {
      return h(AFormReadonly, {
        ...this.$attrs,
        valueParentClass: this.readonlyValueParentClass,
        id: this.htmlIdLocal,
        alwaysTranslate: this.alwaysTranslate,
        class: this.class,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        modelValue: this.text,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
        type: this.type,
      });
    }
    return h("div", {
      ...this.$attrs,
      class: [
        this.class,
        "a_form_element__container",
      ],
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent a_datepicker__parent", {
          a_form_element__parent_float: this.isLabelFloatLocal,
          a_form_element__parent_inset: this.isLabelInset,
          a_form_element__parent_float_has_error_icon: this.hasErrorIcon,
          a_form_element__parent_not_empty: this.isModel || this.isAutofill,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          extra: this.extra,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.required,
          type: this.type,
          isLabelFloat: this.isLabelFloatLocal,
          isError: this.isErrors,
        }),
        h(AFormLabelDescription, {
          id: this.labelDescriptionId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.labelDescription,
          extra: this.extra,
          isLabelFloat: this.isLabelFloatLocal,
        }),
        h("div", {
          class: "a_form_element",
        }, [
          this.hasErrorIcon ?
            h(AIcon, {
              icon: this.errorIcon,
              class: "a_input__icon_error a_datepicker__error_icon",
            }) :
            "",
          h("div", {
            class: ["a_datepicker", {
              a_datepicker_range_mode: this.range,
              a_datepicker_has_error_icon: this.hasErrorIcon,
              disabled: this.disabled,
            }],
            style: { width: this.widthLocal },
            onMousedown: this.initCalendar,
            onTouchstart: this.initCalendar,
          }, [
            h("div", {
              class: "a_datepicker__input_wrapper",
            }, [
              h("input", {
                ref: "inputRef",
                id: this.htmlIdLocal,
                class: [
                  "a_form_control a_datepicker__input",
                  this.inputClass,
                  {
                    a_form_control_invalid: this.isErrors,
                  },
                ],
                name: this.inputName,
                type: "text",
                autocomplete: "off",
                disabled: this.disabled,
                readonly: !this.editable,
                value: this.text,
                placeholder: this.innerPlaceholder,
                "aria-haspopup": "dialog",
                "aria-expanded": this.popupVisible ? "true" : "false",
                "aria-controls": this.popupVisible ? this.idForCalendar : undefined,
                "aria-describedby": this.ariaDescribedbyLocal,
                "aria-invalid": this.isErrors ? "true" : "false",
                "aria-required": this.required ? "true" : undefined,
                ...this.inputAttr,
                onKeydown: this.handleKeydown,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onInput: this.handleInput,
                onChange: this.handleChange,
              }),
              this.showClearIcon && h("span", {
                class: "a_datepicker__input_wrapper__append a_datepicker__input_wrapper__clear_wrapper",
                "aria-hidden": true,
                onMousedown: this.clearDate,
              }, [
                h("i", {
                  class: "a_datepicker__input__icon a_datepicker__input__clear_icon",
                }),
              ]),
              h("span", {
                class: "a_datepicker__input_wrapper__append",
              }, [
                h(ADatepickerIcon),
              ]),
            ]),
            h(Teleport, {
              to: "body",
            }, [
              this.popupVisible && withDirectives(h("div", {
                ref: "calendarRef",
                id: this.idForCalendar,
                class: "a_datepicker__popup",
                role: "dialog",
                "aria-label": this.dialogLabel,
                style: this.popupStyle,
              }, [
                !!(this.range && this.innerShortcuts.length) && h("div", {
                  class: "a_datepicker__shortcuts_wrapper",
                }, [
                  this.innerShortcuts.map((range, index) => {
                    return h("button", {
                      key: index,
                      class: "a_datepicker__shortcuts_wrapper__shortcuts",
                      type: "button",
                      onClick: () => this.selectRange(range),
                    }, range.text);
                  }),
                ]),
                !this.range ?
                  h(ADatepickerCalendarPanel, {
                    ref: "calendarPanelRef",
                    id: this.idForPanel,
                    currentLanguage: this.currentLanguage,
                    dateFormat: this.innerDateFormat,
                    firstDayOfWeek: this.firstDayOfWeek,
                    focusStartDate: this.focusStartDate,
                    index: -1,
                    maxDate: this.maxDate,
                    minDate: this.minDate,
                    minuteStep: this.minuteStep,
                    startDate: this.startDate,
                    timePrecision: this.timePrecision,
                    type: this.innerType,
                    value: this.currentValue,
                    visible: this.popupVisible,
                    onSelectDate: this.selectDate,
                    onSelectTime: this.selectTime,
                    onClosePopup: this.closePopover,
                  }) :
                  h("div", {
                    class: "a_datepicker__range_wrapper",
                  }, [
                    h(ADatepickerCalendarPanel, {
                      ref: "calendarPanelRef",
                      id: this.idsForPanelRange[0],
                      currentLanguage: this.currentLanguage,
                      dateFormat: this.innerDateFormat,
                      endAt: this.currentValue[1],
                      firstDayOfWeek: this.firstDayOfWeek,
                      focusStartDate: this.focusStartDate,
                      index: 0,
                      maxDate: this.maxDate,
                      minDate: this.minDate,
                      minuteStep: this.minuteStep,
                      startAt: null,
                      startDate: this.startDate,
                      timePrecision: this.timePrecision,
                      style: "box-shadow: 1px 0 rgba(0, 0, 0, .1);",
                      type: this.innerType,
                      value: this.currentValue[0],
                      visible: this.popupVisible,
                      onSelectDate: this.selectStartDate,
                      onSelectTime: this.selectStartTime,
                      onClosePopup: this.closePopover,
                    }),
                    h(ADatepickerCalendarPanel, {
                      ref: "calendarPanel2Ref",
                      id: this.idsForPanelRange[1],
                      currentLanguage: this.currentLanguage,
                      dateFormat: this.innerDateFormat,
                      endAt: null,
                      firstDayOfWeek: this.firstDayOfWeek,
                      index: 1,
                      minuteStep: this.minuteStep,
                      startAt: this.currentValue[0],
                      startDate: this.currentValue[0],
                      timePrecision: this.timePrecision,
                      type: this.innerType,
                      value: this.currentValue[1],
                      visible: this.popupVisible,
                      onSelectDate: this.selectEndDate,
                      onSelectTime: this.selectEndTime,
                      onClosePopup: this.closePopover,
                    }),
                  ]),
                this.confirm && h("div", {
                  class: "a_datepicker__footer",
                }, [
                  h("button", {
                    class: "a_datepicker__footer__btn a_datepicker__footer__btn_confirm",
                    type: "button",
                    onClick: this.confirmDate,
                  }, this.confirmText),
                ]),
              ]), [
                [AOnHooks, {
                  mounted: this.openPopoverWithFloatingUi,
                }],
              ]),
            ]),
            h("div", {
              ref: "focusByCloseRef",
              "aria-hidden": true,
              tabindex: -1,
            }),
          ]),

          /*           *
           * this.isClearButtonLocal && h(AFormElementBtnClear, {           *
           *   disabled: this.disabled,           *
           *   clearButtonClass: this.clearButtonClass,           *
           *   onClear: this.clearModel,           *
           * }),           *
           */
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
          errorsClass: this.errorsClass,
        }),
      ]),
    ]);
  },
};
