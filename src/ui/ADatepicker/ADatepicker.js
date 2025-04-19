/* eslint vue/component-api-style: off */
import {
  h,
  Teleport,
  toRef,
  watch,
  withDirectives,
} from "vue";
import {
  AErrorsText,
  AFormHelpText,
  AFormReadonly,
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
import PopoverAPI from "./compositionAPI/PopoverAPI";
import RefsAPI from "./compositionAPI/RefsAPI";

import AOnHooks from "../../directives/AOnHooks";
import UiMixinProps from "../mixins/UiMixinProps";
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
      default: false,
    },
    class: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    confirm: {
      type: Boolean,
      default: false,
    },
    confirmText: {
      type: String,
      default: "OK",
    },
    dateFormat: {
      type: String, // format the time header and date tooltip
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
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
    iconDay: {
      type: [Number, String],
      default: undefined,
    },
    inputAttr: {
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
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: false,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    lang: {
      type: String,
      default: "de",
      required: false,
    },
    languages: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelValue: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: undefined,
    },
    placeholder: {
      type: String,
      default: null,
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
    range: {
      type: Boolean,
      default: false,
    },
    rangeSeparator: {
      type: String,
      default: "~",
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
    shortcuts: {
      type: [Boolean, Array],
      default: true,
    },
    type: {
      type: String,
      default: "date", // ["date", "datetime"] zendy added "month", "year", mxie added "time"
    },
    valueType: {
      default: "format",
      validator: function(value) {
        return ["timestamp", "format", "date"].indexOf(value) !== -1 || isPlainObject(value);
      },
    },
    width: {
      type: [String, Number],
      default: null,
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
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      isAutofill,
    } = UiInputAutofillAPI({ inputRef });

    const {
      currentLanguage,
    } = LanguagesAPI(props);

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
      innerPlaceholder,
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
      setCloseFocus,
    });

    const blur = () => {
      inputRef.value && inputRef.value.blur();
    };

    initCurrentValue();

    watch(modelValue, onModelValueChange, {
      immediate: true,
    });

    return {
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
      text,
      focusByCloseRef,
      handleChange,
      handleInput,
      handleKeydown,
      helpTextId,
      htmlIdLocal,
      idForCalendar,
      idForPanel,
      idsForPanelRange,
      initCalendar,
      innerPlaceholder,
      innerType,
      inputRef,
      isAutofill,
      isErrors,
      isModel,
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
      if (typeof this.format !== "string") {
        return "YYYY-MM-DD";
      }
      if (this.innerType === "date") {
        return this.format;
      }
      return this.format.replace(/[Hh]+.*[msSaAZ]|\[.*?\]/g, "").trim() || "YYYY-MM-DD";
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
      this.$emit("blur", event);
    },

    handleFocus(event) {
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
        id: this.htmlIdLocal,
        alwaysTranslate: this.alwaysTranslate,
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
        class: ["a_form_element__parent", {
          a_form_element__parent_float: this.isLabelFloat,
          a_form_element__parent_not_empty: this.isModel || this.isAutofill,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.required,
          type: this.type,
          isLabelFloat: this.isLabelFloat,
          isError: this.isErrors,
        }),
        h("div", {
          class: "a_form_element",
        }, [
          h("div", {
            class: ["pux_datepicker", {
              pux_datepicker_range: this.range,
              disabled: this.disabled,
            }],
            style: { width: this.widthLocal },
            onMousedown: this.initCalendar,
            onTouchstart: this.initCalendar,
          }, [
            h("div", {
              class: "pux_datepicker__input_wrapper",
              role: "application",
            }, [
              h("input", {
                ref: "inputRef",
                id: this.htmlIdLocal,
                class: [
                  "a_form_control pux_datepicker__input",
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
                ariaHaspopup: true,
                "aria-owns": this.idForCalendar,
                ...this.inputAttr,
                onKeydown: this.handleKeydown,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onInput: this.handleInput,
                onChange: this.handleChange,
              }),
              this.showClearIcon && h("span", {
                class: "pux_datepicker__input_wrapper__append pux_datepicker__input_wrapper__clear_wrapper",
                ariaHidden: true,
                onMousedown: this.clearDate,
              }, [
                h("i", {
                  class: "pux_datepicker__input__icon pux_datepicker__input__clear_icon",
                }),
              ]),
              h("span", {
                class: "pux_datepicker__input_wrapper__append",
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
                class: "pux_datepicker__popup",
                ariaHidden: this.ariaHiddenForCalendar,
                ariaExpanded: this.ariaExpandedForCalendar,
                style: this.popupStyle,
              }, [
                !!(this.range && this.innerShortcuts.length) && h("div", {
                  class: "pux_datepicker__shortcuts_wrapper",
                }, [
                  this.innerShortcuts.map((range, index) => {
                    return h("button", {
                      key: index,
                      class: "pux_datepicker__shortcuts_wrapper__shortcuts",
                      type: "button",
                      onClick: () => this.selectRange(range),
                    }, range.text);
                  }),
                ]),
                !this.range ?
                  h(ADatepickerCalendarPanel, {
                    ref: "calendarPanelRef",
                    id: this.idForPanel,
                    index: -1,
                    type: this.innerType,
                    dateFormat: this.innerDateFormat,
                    value: this.currentValue,
                    visible: this.popupVisible,
                    currentLanguage: this.currentLanguage,
                    firstDayOfWeek: this.firstDayOfWeek,
                    onSelectDate: this.selectDate,
                    onSelectTime: this.selectTime,
                    onClosePopup: this.closePopover,
                  }) :
                  h("div", {
                    class: "pux_datepicker__range_wrapper",
                  }, [
                    h(ADatepickerCalendarPanel, {
                      ref: "calendarPanelRef",
                      id: this.idsForPanelRange[0],
                      style: "box-shadow: 1px 0 rgba(0, 0, 0, .1);",
                      index: 0,
                      type: this.innerType,
                      dateFormat: this.innerDateFormat,
                      value: this.currentValue[0],
                      endAt: this.currentValue[1],
                      startAt: null,
                      visible: this.popupVisible,
                      currentLanguage: this.currentLanguage,
                      firstDayOfWeek: this.firstDayOfWeek,
                      onSelectDate: this.selectStartDate,
                      onSelectTime: this.selectStartTime,
                      onClosePopup: this.closePopover,
                    }),
                    h(ADatepickerCalendarPanel, {
                      ref: "calendarPanel2Ref",
                      id: this.idsForPanelRange[1],
                      index: 1,
                      type: this.innerType,
                      dateFormat: this.innerDateFormat,
                      value: this.currentValue[1],
                      endAt: null,
                      startAt: this.currentValue[0],
                      visible: this.popupVisible,
                      currentLanguage: this.currentLanguage,
                      firstDayOfWeek: this.firstDayOfWeek,
                      onSelectDate: this.selectEndDate,
                      onSelectTime: this.selectEndTime,
                      onClosePopup: this.closePopover,
                    }),
                  ]),
                this.confirm && h("div", {
                  class: "pux_datepicker__footer",
                }, [
                  h("button", {
                    class: "pux_datepicker__footer__btn pux_datepicker__footer__btn_confirm",
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
              ariaHidden: true,
              tabindex: -1,
            }),
          ]),

          /*
           * this.isClearButtonLocal && h(AFormElementBtnClear, {
           *   disabled: this.disabled,
           *   clearButtonClass: this.clearButtonClass,
           *   onClear: this.clearModel,
           * }),
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
        }),
      ]),
    ]);
  },
};
