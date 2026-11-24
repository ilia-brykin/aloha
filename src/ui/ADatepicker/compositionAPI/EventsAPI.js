import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

import moment from "moment";
import {
  formatDate,
  isDateObject,
  isPlainObject,
  isValidDate,
  isValidRangeDate,
  parseDate,
} from "../utils";


export default function EventsAPI(props, { emit }, {
  calendarPanelRef = ref(undefined),
  changeModel = () => {},
  closePopover = () => {},
  formatLocal = computed(() => ""),
  formatSaveLocal = computed(() => ""),
  initCalendar = () => {},
  setCloseFocus = () => {},
}) {
  const range = toRef(props, "range");
  const confirm = toRef(props, "confirm");
  const disabled = toRef(props, "disabled");
  const modelValue = toRef(props, "modelValue");
  const editable = toRef(props, "editable");
  const maxDate = toRef(props, "maxDate");
  const minDate = toRef(props, "minDate");
  const type = toRef(props, "type");

  const currentValue = ref(null);
  const userInput = ref(null);

  const initCurrentValue = () => {
    currentValue.value = range.value ? [null, null] : null;
  };

  const isValidValueText = value => {
    return !!parseDate(value, formatLocal.value, formatSaveLocal.value);
  };

  const valueToText = value => {
    try {
      if (moment(value, formatSaveLocal.value).isValid()) {
        return moment(value, formatSaveLocal.value).format(formatLocal.value) || "";
      }
      return "";
    } catch(e) {
      return "";
    }
  };

  const isValidModelValue = value => {
    try {
      if (moment(value, formatSaveLocal.value).isValid()) {
        return true;
      }
      return false;
    } catch(e) {
      return false;
    }
  };

  const stringify = date => {
    return (isPlainObject(formatLocal.value) && typeof formatLocal.value.stringify === "function")
      ? formatLocal.value.stringify(date)
      : formatDate(date, formatLocal.value);
  };

  const text = computed(() => {
    if (userInput.value !== null) {
      return userInput.value;
    }

    if (!range.value) {
      if (isValidValueText(modelValue.value)) {
        return valueToText(modelValue.value);
      }
      return "";
    }

    /*
     * return this.isValidRangeValue(this.modelValue)
     *   ? `${ this.stringify(value2date(this.modelValue[0])) } ${ this.rangeSeparator } ${ this.stringify(value2date(this.modelValue[1])) }`
     *   : "";
     */
    return ""; // TODO: range
  });

  const isDatesEqual = (a, b) => {
    return isDateObject(a) && isDateObject(b) && a.getTime() === b.getTime();
  };

  const isRangeEqual = (a, b) => {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((item, index) => isDatesEqual(item, b[index]));
  };

  const emitDate = eventName => {
    const value = range.value ?
      "" : // TODO: range this.currentValue.map(date2value)
      formatDate(currentValue.value, formatSaveLocal.value);
    changeModel({
      model: value,
    });
    emit(eventName, value);
  };

  const updateDate = (confirmLocal = false) => {
    if ((confirm.value && !confirmLocal) || disabled.value) {
      return false;
    }
    const equal = range.value ? isRangeEqual(modelValue.value, currentValue.value) : isDatesEqual(modelValue.value, currentValue.value);
    if (equal) {
      return false;
    }
    emitDate("change");
    return true;
  };

  const clearDate = $event => {
    if ($event) {
      $event.stopPropagation();
    }
    const date = range.value ? [null, null] : null;
    currentValue.value = date;
    updateDate(true);
    emit("clear");
  };

  const selectDate = date => {
    currentValue.value = date;
    updateDate() && closePopover();
    setCloseFocus();
  };

  const selectTime = (time, close) => {
    currentValue.value = time;
    updateDate() && close && closePopover();
    if (close) {
      setCloseFocus();
    }
  };

  const selectStartDate = date => {
    currentValue.value[0] = date;
    if (currentValue.value[1]) {
      updateDate();
    }
  };

  const selectEndDate = date => {
    currentValue.value[1] = date;
    if (currentValue.value[0]) {
      updateDate();
    }
  };

  const selectStartTime = time => {
    selectStartDate(time);
  };

  const selectEndTime = time => {
    selectEndDate(time);
  };

  const parse = value => {
    return (isPlainObject(formatLocal.value) && typeof formatLocal.value.parse === "function")
      ? formatLocal.value.parse(value)
      : parseDate(value, formatLocal.value, formatSaveLocal.value);
  };

  const fromValueToDate = value => {
    try {
      if (moment(value, formatLocal.value).isValid()) {
        return moment(value, formatLocal.value).format() || null;
      }
      return null;
    } catch(e) {
      return null;
    }
  };

  const fromModalValueToDate = value => {
    try {
      if (moment(value, formatSaveLocal.value).isValid()) {
        return moment(value, formatSaveLocal.value).format() || null;
      }
      return null;
    } catch(e) {
      return null;
    }
  };

  // like getCriticalTime of the panel: year and month compare the start of the period
  const getCriticalTime = value => {
    if (!value) {
      return null;
    }
    const DATE = new Date(value);
    if (type.value === "year") {
      return new Date(DATE.getFullYear(), 0).getTime();
    }
    if (type.value === "month") {
      return new Date(DATE.getFullYear(), DATE.getMonth()).getTime();
    }
    return DATE.getTime();
  };

  // min-date / max-date without the panel (it exists only while the calendar is open, e.g. not after Enter)
  const isOutOfRange = date => {
    const TIME = new Date(date).getTime();
    const MIN = getCriticalTime(minDate.value);
    const MAX = getCriticalTime(maxDate.value);
    return !!((MIN && TIME < MIN) || (MAX && TIME > MAX));
  };

  const handleChange = () => {
    if (editable.value && userInput.value !== null) {
      let value = text.value;
      const checkDate = calendarPanelRef.value?.isDisabledTime || isOutOfRange;
      if (!value) {
        clearDate();
        return;
      }
      if (range.value) {
        /*
         * const range = value.split(` ${ this.rangeSeparator } `); // TODO: range
         * if (range.length === 2) {
         *   const start = this.parse(range[0]);
         *   const end = this.parse(range[1]);
         *   if (start && end && !checkDate(start, null, end) && !checkDate(end, start, null)) {
         *     this.currentValue = [start, end];
         *     this.updateDate(true);
         *     this.closePopover();
         *     return;
         *   }
         * }
         */
        return;
      }
      if (type.value === "time") {
        value = `${ moment().format("DD.MM.YYYY") } ${ value }`;
      }
      const date = fromValueToDate(value);
      if (date && !checkDate(date, null, null)) {
        currentValue.value = date;
        updateDate(true);
        closePopover();
        return;
      }

      emit("inputError", value);
    }
  };

  // the calendar is closed (e.g. after Enter): open it first, then the focus goes into it
  const setFocusToPanel = () => {
    if (calendarPanelRef.value) {
      calendarPanelRef.value.setFocusToActivePanelFromParent();
      return;
    }
    initCalendar();
    nextTick().then(() => {
      calendarPanelRef.value?.setFocusToActivePanelFromParent();
    });
  };

  const handleKeydown = $event => {
    if ($event.key === "Tab" || $event.key === "Enter") {
      // ie emit the watch before the change event
      handleChange();
      userInput.value = null;
      closePopover();
    } else if ($event.key === "ArrowUp" || $event.key === "ArrowDown") {
      setFocusToPanel();
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  const confirmDate = () => {
    const valid = range.value ? isValidRangeDate(currentValue.value) : isValidDate(currentValue.value);
    if (valid) {
      updateDate(true);
    }
    emitDate("confirm");
    closePopover();
  };

  const handleInput = event => {
    userInput.value = event.target.value;
  };

  const onModelValueChange = value => {
    if (range.value) {
      currentValue.value = [null, null]; // TODO: range this.isValidRangeValue(value) ? value.map(value2date) : [null, null];
    } else {
      currentValue.value = isValidModelValue(value) ? fromModalValueToDate(value) : null;
    }
  };

  return {
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
  };
}
