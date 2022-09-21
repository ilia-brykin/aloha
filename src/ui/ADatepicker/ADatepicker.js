import {
  h, ref,
} from "vue";

import ADatepickerCalendarPanel from "./ADatepickerCalendarPanel/ADatepickerCalendarPanel";
import ADatepickerIcon from "./ADatepickerIcon/ADatepickerIcon";
import AErrorsText from "../AErrorsText/AErrorsText";
import ALabel from "../ALabel/ALabel";

import UiMixinProps from "../mixins/UiMixinProps";

import AKeysCode from "../../const/AKeysCode";
import Languages from "./locale/languages";
import {
  formatDate,
  isDateObject,
  isPlainObject,
  isValidDate,
  isValidRangeDate,
  parseDate,
  throttle,
} from "./utils";
import {
  transformDate,
} from "./utils/transform";
import moment from "moment";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiInputAutofillAPI from "../compositionApi/UiInputAutofillAPI";

// @vue/component
export default {
  name: "ADatepicker",
  mixins: [
    UiMixinProps,
  ],
  props: {
    modelValue: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: undefined,
    },
    valueType: {
      default: "date",
      validator: function(value) {
        return ["timestamp", "format", "date"].indexOf(value) !== -1 || isPlainObject(value);
      },
    },
    placeholder: {
      type: String,
      default: null,
    },
    lang: {
      type: String,
      default: "de",
      required: false,
    },
    languages: {
      type: Object,
      default: undefined,
      required: false,
    },
    format: {
      type: [String, Object],
      default: "DD.MM.YYYY"
    },
    dateFormat: {
      type: String, // format the time header and date tooltip
      default: undefined,
    },
    type: {
      type: String,
      default: "date", // ["date", "datetime"] zendy added "month", "year", mxie added "time"
    },
    range: {
      type: Boolean,
      default: false,
    },
    rangeSeparator: {
      type: String,
      default: "~",
    },
    width: {
      type: [String, Number],
      default: null,
    },
    confirmText: {
      type: String,
      default: "OK",
    },
    confirm: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    shortcuts: {
      type: [Boolean, Array],
      default: true,
    },
    inputName: {
      type: String,
      default: "date",
    },
    inputClass: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: "pux_datepicker__input",
    },
    inputAttr: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
    popupStyle: {
      type: Object,
      default: undefined,
    },
    iconDay: {
      type: [Number, String],
      default: undefined,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: false,
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

    const inputRef = ref(undefined);
    const {
      isAutofill,
    } = UiInputAutofillAPI({ inputRef });

    const blur = () => {
      inputRef.value && inputRef.value.blur();
    };

    return {
      componentStyleHide,

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

      blur,
      inputRef,
      isAutofill
    };
  },
  data() {
    return {
      currentValue: this.range ? [null, null] : null,
      userInput: null,
      popupVisible: false,
      position: {},
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
          date2value: this.stringify.bind(this)
        };
      }
      return transformDate[type] || transformDate.date;
    },

    languagesLocal() {
      if (isPlainObject(this.languages)) {
        return {
          ...Languages,
          ...this.languages,
        };
      }
      return Languages;
    },

    currentLanguage() {
      return this.languagesLocal[this.lang];
    },

    innerPlaceholder() {
      if (typeof this.placeholder === "string") {
        return this.placeholder;
      }
      if (this.range) {
        return this.currentLanguage.placeholder.dateRange;
      }
      if (this.type === "time") {
        return this.currentLanguage.placeholder.time;
      }
      return this.currentLanguage.placeholder.date;
    },

    text() {
      if (this.userInput !== null) {
        return this.userInput;
      }
      const {
        value2date,
      } = this.transform;
      if (!this.range) {
        return this.isValidValue(this.modelValue)
          ? this.stringify(value2date(this.modelValue))
          : "";
      }
      return this.isValidRangeValue(this.modelValue)
        ? `${ this.stringify(value2date(this.modelValue[0])) } ${ this.rangeSeparator } ${ this.stringify(value2date(this.modelValue[1])) }`
        : "";
    },

    computedWidth() {
      if (typeof this.width === "number" || (typeof this.width === "string" && /^\d+$/.test(this.width))) {
        return this.width + "px";
      }
      return this.width;
    },

    showClearIcon() {
      return !this.disabled && this.clearable && (this.range ? this.isValidRangeValue(this.modelValue) : this.isValidValue(this.modelValue));
    },

    innerType() {
      return String(this.type).toLowerCase();
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
          }
        },
        {
          text: pickers[1],
          onClick(self) {
            self.currentValue = [new Date(), new Date(Date.now() + 3600 * 1000 * 24 * 30)];
            self.updateDate(true);
          }
        },
        {
          text: pickers[2],
          onClick(self) {
            self.currentValue = [new Date(Date.now() - 3600 * 1000 * 24 * 7), new Date()];
            self.updateDate(true);
          }
        },
        {
          text: pickers[3],
          onClick(self) {
            self.currentValue = [new Date(Date.now() - 3600 * 1000 * 24 * 30), new Date()];
            self.updateDate(true);
          }
        }
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

    innerPopupStyle() {
      return { ...this.position, ...this.popupStyle };
    },

    idForPanel() {
      return `${ this.id }_panel`;
    },

    idsForPanelRange() {
      return [
        `${ this.idForPanel }_0`,
        `${ this.idForPanel }_1`,
      ];
    },

    ariaHiddenForCalendar() {
      return `${ !this.popupVisible }`;
    },

    ariaExpandedForCalendar() {
      return `${ this.popupVisible }`;
    },

    idForCalendar() {
      return `${ this.id }_calendar`;
    },
  },
  watch: {
    value: {
      immediate: true,
      handler: "handleValueChange"
    },

    popupVisible(val) {
      if (val) {
        this.initCalendar();
      } else {
        this.userInput = null;
        this.blur();
      }
    },
  },
  mounted() {
    if (this.appendToBody) {
      this.popupElm = this.$refs.calendar;
      document.body.appendChild(this.popupElm);
    }
    // clickoutside close popup
    let mousedownTarget;
    this._bindDocmentMousedown = evt => {
      mousedownTarget = evt.target;
    };
    this._bindDocumentMouseup = evt => {
      const mouseupTarget = evt.target;
      const el = this.$el;
      const { popupElm } = this;
      if (
        !mousedownTarget ||
        !mouseupTarget ||
        el.contains(mousedownTarget) ||
        el.contains(mouseupTarget) ||
        (popupElm && (popupElm.contains(mousedownTarget) || popupElm.contains(mouseupTarget)))
      ) {
        return;
      }
      mousedownTarget = null;
      this.closePopup();
    };
    this._startEvt = "mousedown";
    this._endEvt = "mouseup";
    if ("ontouchend" in document) {
      this._startEvt = "touchstart";
      this._endEvt = "touchend";
    }
    document.addEventListener(this._startEvt, this._bindDocmentMousedown);
    document.addEventListener(this._endEvt, this._bindDocumentMouseup);

    this._displayPopup = throttle(() => {
      if (this.popupVisible) {
        this.displayPopup();
      }
    }, 200);
    window.addEventListener("resize", this._displayPopup);
    window.addEventListener("scroll", this._displayPopup);
  },
  beforeUnmount() {
    if (this.popupElm && this.popupElm.parentNode === document.body) {
      document.body.removeChild(this.popupElm);
    }
    document.removeEventListener(this._startEvt, this._bindDocmentMousedown);
    document.removeEventListener(this._endEvt, this._bindDocumentMouseup);
    window.removeEventListener("resize", this._displayPopup);
    window.removeEventListener("scroll", this._displayPopup);
  },
  methods: {
    initCalendar() {
      this.handleValueChange(this.modelValue);
      this.displayPopup();
    },

    stringify(date) {
      return (isPlainObject(this.format) && typeof this.format.stringify === "function")
        ? this.format.stringify(date)
        : formatDate(date, this.format);
    },

    parse(value) {
      return (isPlainObject(this.format) && typeof this.format.parse === "function")
        ? this.format.parse(value)
        : parseDate(value, this.format);
    },

    isValidValue(value) {
      const { value2date } = this.transform;
      return isValidDate(value2date(value));
    },

    isValidRangeValue(value) {
      const { value2date } = this.transform;
      return Array.isArray(value) && value.length === 2 && this.isValidValue(value[0]) &&
        this.isValidValue(value[1]) && (value2date(value[1]).getTime() >= value2date(value[0]).getTime());
    },

    dateEqual(a, b) {
      return isDateObject(a) && isDateObject(b) && a.getTime() === b.getTime();
    },

    rangeEqual(a, b) {
      return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((item, index) => this.dateEqual(item, b[index]));
    },

    selectRange(range) {
      if (typeof range.onClick === "function") {
        const close = range.onClick(this);
        if (close !== false) {
          this.closePopup();
        }
      } else {
        this.currentValue = [new Date(range.start), new Date(range.end)];
        this.updateDate(true);
        this.closePopup();
      }
    },

    clearDate($event) {
      if ($event) {
        $event.stopPropagation();
      }
      const date = this.range ? [null, null] : null;
      this.currentValue = date;
      this.updateDate(true);
      this.$emit("clear");
    },

    confirmDate() {
      const valid = this.range ? isValidRangeDate(this.currentValue) : isValidDate(this.currentValue);
      if (valid) {
        this.updateDate(true);
      }
      this.emitDate("confirm");
      this.closePopup();
    },

    updateDate(confirm = false) {
      if ((this.confirm && !confirm) || this.disabled) {
        return false;
      }
      const equal = this.range ? this.rangeEqual(this.modelValue, this.currentValue) : this.dateEqual(this.modelValue, this.currentValue);
      if (equal) {
        return false;
      }
      this.emitDate("change");
      return true;
    },

    emitDate(eventName) {
      const { date2value } = this.transform;
      const value = this.range
        ? this.currentValue.map(date2value)
        : date2value(this.currentValue);
      this.changeModel({
        model: value,
      });
      this.$emit(eventName, value);
    },

    handleValueChange(value) {
      const { value2date } = this.transform;
      if (this.range) {
        this.currentValue = this.isValidRangeValue(value) ? value.map(value2date) : [null, null];
      } else {
        this.currentValue = this.isValidValue(value) ? value2date(value) : null;
      }
    },

    selectDate(date) {
      this.currentValue = date;
      this.updateDate() && this.closePopup();
      this.setCloseFocus();
    },

    selectStartDate(date) {
      this.currentValue[0] = date;
      if (this.currentValue[1]) {
        this.updateDate();
      }
    },

    selectEndDate(date) {
      this.currentValue[1] = date;
      if (this.currentValue[0]) {
        this.updateDate();
      }
    },

    selectTime(time, close) {
      this.currentValue = time;
      this.updateDate() && close && this.closePopup();
      if (close) {
        this.setCloseFocus();
      }
    },

    selectStartTime(time) {
      this.selectStartDate(time);
    },

    selectEndTime(time) {
      this.selectEndDate(time);
    },

    showPopup() {
      if (this.disabled) {
        return;
      }
      this.popupVisible = true;
    },

    closePopup(isSetFocusByClose) {
      this.popupVisible = false;
      if (isSetFocusByClose) {
        this.setCloseFocus();
      }
    },

    getPopupSize(element) {
      const originalDisplay = element.style.display;
      const originalVisibility = element.style.visibility;
      element.style.display = "block";
      element.style.visibility = "hidden";
      const styles = window.getComputedStyle(element);
      const width = element.offsetWidth + parseInt(styles.marginLeft) + parseInt(styles.marginRight);
      const height = element.offsetHeight + parseInt(styles.marginTop) + parseInt(styles.marginBottom);
      const result = { width, height };
      element.style.display = originalDisplay;
      element.style.visibility = originalVisibility;
      return result;
    },

    displayPopup() {
      const dw = document.documentElement.clientWidth;
      const dh = document.documentElement.clientHeight;
      const InputRect = this.$refs.inputRef.getBoundingClientRect();
      const PopupRect = this._popupRect || (this._popupRect = this.getPopupSize(this.$refs.calendar));
      const position = {};
      let offsetRelativeToInputX = 0;
      let offsetRelativeToInputY = 0;
      if (this.appendToBody) {
        offsetRelativeToInputX = window.pageXOffset + InputRect.left;
        offsetRelativeToInputY = window.pageYOffset + InputRect.top;
      }
      if (
        dw - InputRect.left < PopupRect.width &&
        InputRect.right < PopupRect.width
      ) {
        position.left = offsetRelativeToInputX - InputRect.left + 1 + "px";
      } else if (InputRect.left + InputRect.width / 2 <= dw / 2) {
        position.left = offsetRelativeToInputX + "px";
      } else {
        position.left = offsetRelativeToInputX + InputRect.width - PopupRect.width + "px";
      }
      if (
        InputRect.top <= PopupRect.height &&
        dh - InputRect.bottom <= PopupRect.height
      ) {
        position.top = offsetRelativeToInputY + dh - InputRect.top - PopupRect.height + "px";
      } else if (InputRect.top + InputRect.height / 2 <= dh / 2) {
        position.top = offsetRelativeToInputY + InputRect.height + "px";
      } else {
        position.top = offsetRelativeToInputY - PopupRect.height + "px";
      }
      if (position.top !== this.position.top || position.left !== this.position.left) {
        this.position = position;
      }
    },

    handleBlur(event) {
      this.$emit("blur", event);
    },

    handleFocus(event) {
      if (!this.popupVisible) {
        this.showPopup();
      }
      this.$emit("focus", event);
    },

    handleKeydown($event) {
      const KEY_CODE = $event.keyCode;
      if (KEY_CODE === AKeysCode.tab || KEY_CODE === AKeysCode.enter) {
        // ie emit the watch before the change event
        this.handleChange();
        this.userInput = null;
        this.closePopup();
      } else if (KEY_CODE === AKeysCode.arrowUp || KEY_CODE === AKeysCode.arrowDown) {
        this.setFocusToPanel();
        $event.stopPropagation();
        $event.preventDefault();
      }
    },

    handleInput(event) {
      this.userInput = event.target.value;
    },

    handleChange() {
      if (this.editable && this.userInput !== null) {
        let value = this.text;
        const checkDate = this.$refs.calendarPanel.isDisabledTime;
        if (!value) {
          this.clearDate();
          return;
        }
        if (this.range) {
          const range = value.split(` ${ this.rangeSeparator } `);
          if (range.length === 2) {
            const start = this.parse(range[0]);
            const end = this.parse(range[1]);
            if (start && end && !checkDate(start, null, end) && !checkDate(end, start, null)) {
              this.currentValue = [start, end];
              this.updateDate(true);
              this.closePopup();
              return;
            }
          }
        } else {
          if (this.type === "time") {
            value = `${ moment().format("DD.MM.YYYY") } ${ value }`;
          }
          const date = this.parse(value);
          if (date && !checkDate(date, null, null)) {
            this.currentValue = date;
            this.updateDate(true);
            this.closePopup();
            return;
          }
        }
        this.$emit("inputError", value);
      }
    },

    setFocusToPanel() {
      this.$refs.calendarPanel.setFocusToActivePanelFromParent();
    },

    setCloseFocus() {
      this.$refs.focusByClose && this.$refs.focusByClose.focus();
    },
  },
  render() {
    return this.isRender && h("div", {
      style: this.componentStyleHide,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_float: this.isLabelFloat,
          a_form_element__parent_not_empty: this.isModel || this.isAutofill,
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
        h("div", {
          class: "a_form_element",
        }, [
          h("div", {
            class: ["pux_datepicker", {
              pux_datepicker_range: this.range,
              disabled: this.disabled,
            }],
            style: { width: this.computedWidth },
            onMousedown: this.showPopup,
            onTouchstart: this.showPopup,
          }, [
            h("div", {
              class: "pux_datepicker__input_wrapper",
              role: "application",
            }, [
              h("input", {
                ref: "inputRef",
                id: this.id,
                class: ["a_form_control pux_datepicker__input", this.inputClass],
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
            h("div", {
              ref: "calendar",
              id: this.idForCalendar,
              class: "pux_datepicker__popup",
              ariaHidden: this.ariaHiddenForCalendar,
              ariaExpanded: this.ariaExpandedForCalendar,
              style: [this.innerPopupStyle, !this.popupVisible ? "display: none;" : ""],
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
                  ref: "calendarPanel",
                  id: this.idForPanel,
                  index: -1,
                  type: this.innerType,
                  dateFormat: this.innerDateFormat,
                  value: this.currentValue,
                  visible: this.popupVisible,
                  currentLanguage: this.currentLanguage,
                  onSelectDate: this.selectDate,
                  onSelectTime: this.selectTime,
                  onClosePopup: this.closePopup,
                }) :
                h("div", {
                  class: "pux_datepicker__range_wrapper",
                }, [
                  h(ADatepickerCalendarPanel, {
                    ref: "calendarPanel",
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
                    onSelectDate: this.selectStartDate,
                    onSelectTime: this.selectStartTime,
                    onClosePopup: this.closePopup,
                  }),
                  h(ADatepickerCalendarPanel, {
                    ref: "calendarPanel2",
                    id: this.idsForPanelRange[1],
                    index: 1,
                    type: this.innerType,
                    dateFormat: this.innerDateFormat,
                    value: this.currentValue[1],
                    endAt: null,
                    startAt: this.currentValue[0],
                    visible: this.popupVisible,
                    currentLanguage: this.currentLanguage,
                    onSelectDate: this.selectEndDate,
                    onSelectTime: this.selectEndTime,
                    onClosePopup: this.closePopup,
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
            ]),
            h("div", {
              ref: "focusByClose",
              tabindex: -1,
            }),
          ]),
          // this.isClearButtonLocal && h(AFormElementBtnClear, {
          //   disabled: this.disabled,
          //   clearButtonClass: this.clearButtonClass,
          //   onClear: this.clearModel,
          // }),
        ]),
        this.helpText && h("div", {
          id: this.helpTextId,
          class: "a_form_element__help_text",
          innerHTML: this.helpText,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
