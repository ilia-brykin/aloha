import PuxDatepickerCalendarPanel from "./PuxDatepickerCalendarPanel/PuxDatepickerCalendarPanel.vue";
import PuxDatepickerIcon from "./PuxDatepickerIcon/PuxDatepickerIcon.vue";
import {
  AButton,
} from "aloha-vue";

import Languages from "./locale/languages";
import keysCode from "./utils/keysCode";
import moment from "moment";
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
  gettext,
} from "../../functions/utils";
import {
  transformDate,
} from "./utils/transform";


// @vue/component
export default {
  name: "DatePicker",
  components: {
    AButton,
    PuxDatepickerCalendarPanel,
    PuxDatepickerIcon,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
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
      default: "YYYY-MM-DD",
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
      default: undefined,
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
          date2value: this.stringify.bind(this),
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
        return gettext(this.placeholder);
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
        return this.isValidValue(this.value)
          ? this.stringify(value2date(this.value))
          : "";
      }
      return this.isValidRangeValue(this.value)
        ? `${ this.stringify(value2date(this.value[0])) } ${ this.rangeSeparator } ${ this.stringify(value2date(this.value[1])) }`
        : "";
    },

    computedWidth() {
      if (typeof this.width === "number" || (typeof this.width === "string" && /^\d+$/.test(this.width))) {
        return this.width + "px";
      }
      return this.width;
    },

    showClearIcon() {
      return !this.disabled && this.clearable && (this.range ? this.isValidRangeValue(this.value) : this.isValidValue(this.value));
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

    modalBody() {
      return document.querySelector("div.modal_body"); // Workaround till updated by ADatePicker
    },
  },
  watch: {
    value: {
      immediate: true,
      handler: "handleValueChange",
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

    // Workaround till updated by ADatePicker
    if (this.modalBody) {
      this.modalBody.addEventListener("scroll", this._displayPopup);
    }
  },
  beforeUnmount() {
    if (this.popupElm && this.popupElm.parentNode === document.body) {
      document.body.removeChild(this.popupElm);
    }
    document.removeEventListener(this._startEvt, this._bindDocmentMousedown);
    document.removeEventListener(this._endEvt, this._bindDocumentMouseup);
    window.removeEventListener("resize", this._displayPopup);
    window.removeEventListener("scroll", this._displayPopup);

    // Workaround till updated by ADatePicker
    if (this.modalBody) {
      this.modalBody.removeEventListener("scroll", this._displayPopup);
    }
  },
  methods: {
    initCalendar() {
      this.handleValueChange(this.value);
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

    clearDate() {
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
      const equal = this.range ? this.rangeEqual(this.value, this.currentValue) : this.dateEqual(this.value, this.currentValue);
      if (equal) {
        return false;
      }
      this.emitDate("input");
      this.emitDate("change");
      return true;
    },

    emitDate(eventName) {
      const { date2value } = this.transform;
      const value = this.range
        ? this.currentValue.map(date2value)
        : date2value(this.currentValue);
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
      if (!this.$el?.getBoundingClientRect) {
        return;
      }

      const dw = document.documentElement.clientWidth;
      const dh = document.documentElement.clientHeight;
      const InputRect = this.$el.getBoundingClientRect();
      const PopupRect = this._popupRect || (this._popupRect = this.getPopupSize(this.$refs.calendar));
      const position = {};
      let offsetRelativeToInputX = 0;
      let offsetRelativeToInputY = 0;
      if (this.appendToBody) {
        offsetRelativeToInputX = window.scrollX + InputRect.left;
        offsetRelativeToInputY = window.scrollY + InputRect.top;
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

    blur() {
      this.$refs.input.blur();
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
      if (KEY_CODE === keysCode.tab || KEY_CODE === keysCode.enter) {
        // ie emit the watch before the change event
        this.handleChange();
        this.userInput = null;
        this.closePopup();
      } else if (KEY_CODE === keysCode.arrowUp || KEY_CODE === keysCode.arrowDown) {
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
      this.$refs.focusByClose.focus();
    },
  },
};
