export const ADatepickerPluginOptions = {
  propsDefault: {
    appendToBody: false,
    class: undefined,
    clearable: true,
    confirm: false,
    confirmText: "OK",
    dateFormat: undefined,
    editable: true,
    firstDayOfWeek: 1,
    focusStartDate: false,
    format: undefined,
    formatSave: undefined,
    iconDay: undefined,
    inputAttr: {},
    inputClass: "pux_datepicker__input",
    inputName: "date",
    isLabelFloat: false,
    maxDate: undefined,
    minDate: undefined,
    minuteStep: 0,
    timePrecision: "minute",
    placeholder: undefined,
    placeholdersDefault: {
      date: "_A_DATEPICKER_PLACEHOLDER_DATE_",
      dateRange: "_A_DATEPICKER_PLACEHOLDER_DATE_RANGE_",
      timeHour: "_A_DATEPICKER_PLACEHOLDER_TIME_HOUR_",
      timeMinute: "_A_DATEPICKER_PLACEHOLDER_TIME_MINUTE_",
      timeSecond: "_A_DATEPICKER_PLACEHOLDER_TIME_SECOND_",
      datetimeHour: "_A_DATEPICKER_PLACEHOLDER_DATETIME_HOUR_",
      datetimeMinute: "_A_DATEPICKER_PLACEHOLDER_DATETIME_MINUTE_",
      datetimeSecond: "_A_DATEPICKER_PLACEHOLDER_DATETIME_SECOND_",
    },
    placement: "bottom-start",
    popupStyle: {},
    range: false,
    rangeSeparator: "~",
    readonlyDefault: "",
    shortcuts: true,
    startDate: undefined,
    type: "date",
    valueType: "format",
    width: null,
  },
};


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    ADatepickerPluginOptions.propsDefault = {
      ...ADatepickerPluginOptions.propsDefault,
      ...propsDefault,
    };
  },
};
