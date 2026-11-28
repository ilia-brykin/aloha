import {
  computed,
  h,
  onMounted,
  ref,
  Teleport,
} from "vue";
import {
  AErrorsText,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  AIcon,
  ALabel,
  UiAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import ADateInputDialog from "./ADateInputDialog/ADateInputDialog";
import ADateInputTimeList from "./ADateInputTimeList/ADateInputTimeList";

import DialogAPI from "./compositionAPI/DialogAPI";
import FieldsAPI from "./compositionAPI/FieldsAPI";
import LocaleAPI from "./compositionAPI/LocaleAPI";
import PlaceholderAPI from "../../ATranslation/compositionAPI/PlaceholderAPI";
import PopperContainerAPI from "../../ATooltip/compositionAPI/PopperContainerAPI";
import TimeListAPI from "./compositionAPI/TimeListAPI";
import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import Calendar from "../../AIcon/Icons/Calendar";
import ChevronDown from "../../AIcon/Icons/ChevronDown";
import Close from "../../AIcon/Icons/Close";
import {
  compareByUnit,
} from "./utils/dateUtils";
import {
  getPropDefault,
} from "../../plugins/AComponentsPlugin";
import {
  isFunction,
  isNil,
  uniqueId,
} from "lodash-es";

export default {
  name: "ADateInput",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    // adds the separators while typing at the end: "05" → "05.", "14" → "14:"
    autoFormat: {
      type: Boolean,
      required: false,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    // a button that empties a field
    clearable: {
      type: Boolean,
      required: false,
    },
    // "HH:mm" or ["HH:mm", "HH:mm"] (range): the time when only the date is given, e.g. ["00:00", "23:59"]
    defaultTime: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    dependencies: {
      type: [Array, Object],
      required: false,
      default: undefined,
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
    errorsClass: {
      type: [String, Object],
      required: false,
      default: undefined,
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
    // 0 = Sunday, 1 = Monday; by default from the language (en-US Sunday, de Monday)
    firstDayOfWeek: {
      type: Number,
      required: false,
      default: undefined,
    },
    helpText: {
      type: String,
      required: false,
      default: undefined,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_date_input_"),
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
    inputClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },

    /*
     * (isoDate: "YYYY-MM-DD") => true for days that cannot be chosen
     * the calendar and the list of times in a container in body, placed with floating-ui (not cut by overflow: hidden)
     */
    inBody: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ADateInput", "inBody", true),
    },
    // in-body: the calendar and the time list close when the field is scrolled out of the view
    isCloseByButtonInvisibleInViewport: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ADateInput", "isCloseByButtonInvisibleInViewport", true),
    },
    // the calendar is always visible under the fields
    inline: {
      type: Boolean,
      required: false,
    },
    isDateDisabled: {
      type: Function,
      required: false,
      default: undefined,
    },
    // (time: "HH:mm", date: "YYYY-MM-DD" or null) => true for times that cannot be chosen
    isTimeDisabled: {
      type: Function,
      required: false,
      default: undefined,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    labelDescription: {
      type: String,
      required: false,
      default: undefined,
    },
    // "float", "inset" or "top", like the other form elements; several fields (range, date and time) are always "top"
    labelPosition: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["float", "inset", "top"].indexOf(value) !== -1,
    },
    labelScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    // the language of the format and the calendar; the language of the translations by default
    locale: {
      type: String,
      required: false,
      default: undefined,
    },
    // "YYYY-MM-DD"
    max: {
      type: String,
      required: false,
      default: undefined,
    },

    /*
     * "YYYY-MM-DD"
     * range of days: the end - the start in days at most (01.03. - 03.03. = 2)
     */
    maxDays: {
      type: Number,
      required: false,
      default: undefined,
    },
    // "HH:mm"
    maxTime: {
      type: String,
      required: false,
      default: undefined,
    },
    min: {
      type: String,
      required: false,
      default: undefined,
    },
    // range of days: the end - the start in days at least
    minDays: {
      type: Number,
      required: false,
      default: undefined,
    },
    // "HH:mm"
    minTime: {
      type: String,
      required: false,
      default: undefined,
    },
    // only every n minutes, e.g. 15
    minuteStep: {
      type: Number,
      required: false,
      default: 1,
    },
    mode: {
      type: String,
      required: false,
      default: "date",
      validator: value => ["date", "datetime", "month", "quarter", "time", "week", "year"].includes(value),
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    // "iso", "timestamp", "date" (Date) or tokens YYYY MM DD HH mm ss, e.g. "DD.MM.YYYY"
    modelFormat: {
      type: String,
      required: false,
      default: "iso",
    },
    modelUndefined: {
      type: [Array, Object, String],
      required: false,
      default: null,
    },
    // "YYYY-MM-DD", "YYYY-MM-DDTHH:mm", "HH:mm", "YYYY-MM", "YYYY-Www", "YYYY"; with range [start, end]; see modelFormat
    modelValue: {
      type: [String, Array, Number, Date],
      required: false,
      default: undefined,
    },
    // 1 or 2 months side by side in the calendar
    months: {
      type: Number,
      required: false,
      default: 1,
    },
    placeholder: {
      type: String,
      required: false,
      default: undefined,
    },
    popperContainerId: {
      type: String,
      required: false,
      default: () => getPropDefault("ADateInput", "popperContainerId", "a_date_input_container"),
    },
    range: {
      type: Boolean,
      required: false,
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
    readonlyValueParentClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    // buttons in the calendar: [{ label, value }], value is a model or a function that returns it
    shortcuts: {
      type: Array,
      required: false,
      default: () => [],
    },
    // a button next to a time field with a list of times (every minute-step minutes, else 30)
    showTimeList: {
      type: Boolean,
      required: false,
    },
    showToday: {
      type: Boolean,
      required: false,
    },
    showWeekNumbers: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "dateInput",
    },
    // mode="datetime": the model is a moment in UTC ("2025-03-05T13:30:00Z"), the fields show the local time
    utc: {
      type: Boolean,
      required: false,
    },
    withSeconds: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "close",
    "open",
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      disabledAttribut,
    } = UiDisabledAPI(props);

    const {
      placeholderAttributes,
    } = PlaceholderAPI(props);

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
      isLabelFloatLocal,
      isLabelInset,
      labelDescriptionId,
    } = UiAPI(props, context);

    const {
      dateFormatHint,
      dateOrder,
      firstDayOfWeekLocale,
      formatDate,
      formatDateLong,
      formatMonthTitle,
      unit,
    } = LocaleAPI(props);

    const {
      addPopperContainerInBody,
      popperContainerIdSelector,
    } = PopperContainerAPI(props);

    onMounted(() => {
      // a_popup_container: not inert behind an open AModal
      addPopperContainerInBody({ className: "a_popup_container" });
    });

    // ISO weeks start on Monday
    const firstDayOfWeekLocal = computed(() => {
      if (props.mode === "week") {
        return 1;
      }
      return isNil(props.firstDayOfWeek) ? firstDayOfWeekLocale.value : props.firstDayOfWeek;
    });

    const {
      applyModel,
      clearField,
      commit,
      errorsAll,
      fields,
      getAriaInvalid,
      getDateOfIndex,
      getTimeOptions,
      hasDate,
      hasTime,
      isErrorsAll,
      maxDate,
      minDate,
      onInput,
      onKeydown,
      texts,
    } = FieldsAPI(props, {
      changeModel,
      dateOrder,
      formatDate,
      htmlIdLocal,
      isErrors,
      unit,
    });

    const {
      buttonRefs,
      closeDialog,
      fieldRefs,
      openDialog,
      openIndex,
      selectDate,
      toggleDialog,
    } = DialogAPI(context, {
      commit,
      formatDate,
      htmlIdLocal,
      texts,
    });

    const {
      closeTimeList,
      openTimeKey,
      selectTime,
      timeButtonRefs,
      toggleTimeList,
    } = TimeListAPI({
      commit,
      htmlIdLocal,
      texts,
    });

    // the boxes of the fields: the reference of the popups with in-body
    const controlRefs = {};

    // inline range: 0 the next click is the start, 1 the end; the live region says what was chosen
    const inlineIndex = ref(0);
    const announcement = ref("");

    // the selected value for the calendar button: "Wednesday, 5 March 2025", "March 2025" or "2025"
    const formatSelected = date => {
      if (unit.value === "year") {
        return `${ date.year }`;
      }
      if (unit.value === "week") {
        return formatDate(date);
      }
      return unit.value === "month" ? formatMonthTitle(date) : formatDateLong(date);
    };

    const selectInline = date => {
      if (!props.range) {
        selectDate(0, date);
        return;
      }
      const START = getDateOfIndex(0);
      const END = getDateOfIndex(1);
      if (inlineIndex.value === 1 && START && compareByUnit(date, START, unit.value) >= 0) {
        texts.value.date1 = formatDate(date);
        inlineIndex.value = 0;
        announcement.value = getTranslatedText({
          placeholder: "_A_DATE_INPUT_RANGE_ANNOUNCE_",
          extra: { start: formatSelected(START), end: formatSelected(date) },
        });
      } else {
        // a new start; an end before it is removed
        texts.value.date0 = formatDate(date);
        if (END && compareByUnit(END, date, unit.value) < 0) {
          texts.value.date1 = "";
        }
        inlineIndex.value = 1;
        announcement.value = getTranslatedText({
          placeholder: "_A_DATE_INPUT_RANGE_START_ANNOUNCE_",
          extra: { date: formatSelected(date) },
        });
      }
      commit();
    };

    const selectShortcut = shortcut => {
      applyModel(isFunction(shortcut.value) ? shortcut.value() : shortcut.value);
      closeDialog();
    };

    const clearFieldAndFocus = field => {
      clearField(field);
      document.getElementById(field.id)?.focus();
    };

    const formatHintId = computed(() => `${ htmlIdLocal.value }_format`);

    const formatHint = computed(() => {
      const FORMATS = [];
      if (hasDate.value) {
        FORMATS.push(dateFormatHint.value);
      }
      if (hasTime.value) {
        FORMATS.push(getTranslatedText({ placeholder: props.withSeconds ? "_A_DATE_INPUT_TIME_SECONDS_LETTERS_" : "_A_DATE_INPUT_TIME_LETTERS_" }));
      }
      return getTranslatedText({
        placeholder: "_A_DATE_INPUT_FORMAT_",
        extra: { format: FORMATS.join(", ") },
      });
    });

    // several fields: the label is always above them
    const isGroup = computed(() => fields.value.length > 1);
    const isLabelFloatEffective = computed(() => isLabelFloatLocal.value && !isGroup.value);
    const isLabelInsetEffective = computed(() => isLabelInset.value && !isGroup.value);

    // own list: UiAPI knows neither the local errors nor the group (label description with a float label)
    const ariaDescribedbyInput = computed(() => {
      return [
        formatHintId.value,
        props.labelDescription && !isLabelFloatEffective.value ? labelDescriptionId.value : undefined,
        props.helpText ? helpTextId.value : undefined,
        isErrorsAll.value ? errorsId.value : undefined,
      ].filter(Boolean).join(" ");
    });

    const hasCalendar = computed(() => hasDate.value && !props.disabled && !props.readonly && !props.inline);

    const open = (index = 0) => {
      if (hasCalendar.value) {
        openDialog(index);
      }
    };

    const close = () => closeDialog({ focusButton: false });

    const readonlyText = computed(() => {
      const VALUES = (props.range ? [0, 1] : [0]).map(index => {
        return fields.value.filter(field => field.index === index).map(field => texts.value[field.key]).filter(Boolean).join(", ");
      });
      return VALUES.filter(Boolean).join(" – ");
    });

    const focus = () => {
      document.getElementById(htmlIdLocal.value)?.focus();
    };

    context.expose({
      close,
      focus,
      open,
    });

    // the buttons of the first field: the float label ends before them
    const labelSpaceStyle = computed(() => {
      const FIELD = fields.value[0];
      if (!FIELD) {
        return undefined;
      }
      const BUTTONS = (props.clearable && !props.disabled && texts.value[FIELD.key] ? 1 : 0) +
        (FIELD.kind === "date" && !props.inline ? 1 : 0) +
        (props.showTimeList && FIELD.kind === "time" ? 1 : 0);
      return {
        "--a_date_input_label_buttons": BUTTONS,
        "--a_date_input_label_width": `var(--a_date_input_${ FIELD.kind }_width)`,
      };
    });

    return {
      announcement,
      labelSpaceStyle,
      placeholderAttributes,
      closeTimeList,
      controlRefs,
      firstDayOfWeekLocal,
      getTimeOptions,
      inlineIndex,
      openTimeKey,
      popperContainerIdSelector,
      selectInline,
      selectTime,
      timeButtonRefs,
      toggleTimeList,
      ariaDescribedbyInput,
      isGroup,
      isLabelFloatEffective,
      isLabelInsetEffective,
      clearFieldAndFocus,
      formatSelected,
      selectShortcut,
      unit,
      attributesToExcludeFromRender,
      buttonRefs,
      closeDialog,
      commit,
      componentStyleHide,
      disabledAttribut,
      errorsAll,
      errorsId,
      fieldRefs,
      fields,
      formatHint,
      formatHintId,
      getAriaInvalid,
      getDateOfIndex,
      helpTextId,
      htmlIdLocal,
      isErrorsAll,
      labelDescriptionId,
      maxDate,
      minDate,
      onInput,
      onKeydown,
      openIndex,
      readonlyText,
      selectDate,
      texts,
      toggleDialog,
    };
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
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        modelValue: this.readonlyText,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
      });
    }

    const IS_GROUP = this.isGroup;
    const IS_FLOAT = this.isLabelFloatEffective;
    // the format is above the field, with a label in the field below it
    const FORMAT_HINT = h("div", {
      id: this.formatHintId,
      class: "a_date_input__format",
    }, this.formatHint);

    const getCalendar = field => {
      const SELECTED = this.getDateOfIndex(field.index);
      const SUB_LABEL = field.subLabel ? `${ getTranslatedText({ placeholder: field.subLabel }) }: ` : "";
      return {
        SELECTED,
        BUTTON_LABEL: SUB_LABEL + (SELECTED ?
          getTranslatedText({ placeholder: "_A_DATE_INPUT_CHANGE_DATE_", extra: { date: this.formatSelected(SELECTED) } }) :
          getTranslatedText({ placeholder: "_A_DATE_INPUT_CHOOSE_DATE_" })),
        DIALOG_ID: `${ field.id }_dialog`,
        IS_OPEN: this.openIndex === field.index,
      };
    };

    const renderToggle = field => {
      const { BUTTON_LABEL, DIALOG_ID, IS_OPEN } = getCalendar(field);
      return h("button", {
        ref: element => {
          this.buttonRefs[field.index] = element;
        },
        type: "button",
        class: "a_date_input__toggle",
        disabled: this.disabledAttribut,
        "aria-label": BUTTON_LABEL,
        title: BUTTON_LABEL,
        "aria-haspopup": "dialog",
        "aria-expanded": IS_OPEN ? "true" : "false",
        "aria-controls": IS_OPEN ? DIALOG_ID : undefined,
        onClick: () => this.toggleDialog(field.index),
      }, [
        h(AIcon, {
          icon: Calendar,
          class: "a_date_input__toggle__icon",
        }),
      ]);
    };

    const CALENDAR_SLOTS = {};
    if (this.$slots.day) {
      CALENDAR_SLOTS.day = this.$slots.day;
    }
    if (this.$slots.footer) {
      CALENDAR_SLOTS.footer = this.$slots.footer;
    }

    const getCalendarProps = index => ({
      firstDayOfWeek: this.firstDayOfWeekLocal,
      isDateDisabled: this.isDateDisabled,
      locale: this.locale,
      max: this.maxDate,
      min: this.minDate,
      months: this.months,
      ownerId: this.htmlIdLocal,
      rangeEnd: this.range ? this.getDateOfIndex(1) : undefined,
      rangeIndex: this.range ? index : undefined,
      rangeStart: this.range ? this.getDateOfIndex(0) : undefined,
      shortcuts: this.shortcuts,
      showToday: this.showToday,
      showWeekNumbers: this.showWeekNumbers || this.mode === "week",
      unit: this.unit,
      onShortcut: this.selectShortcut,
    });

    // in-body: the popup is in the container in body, else in the field
    const teleport = content => h(Teleport, {
      to: this.popperContainerIdSelector,
      disabled: !this.inBody,
    }, [content]);

    const renderDialog = field => {
      const { SELECTED, BUTTON_LABEL, DIALOG_ID, IS_OPEN } = getCalendar(field);
      return IS_OPEN && teleport(h(ADateInputDialog, {
        ...getCalendarProps(field.index),
        id: DIALOG_ID,
        label: BUTTON_LABEL,
        inBody: this.inBody,
        isCloseByButtonInvisibleInViewport: this.isCloseByButtonInvisibleInViewport,
        getReference: () => this.controlRefs[field.key],
        selected: SELECTED,
        onSelect: date => this.selectDate(field.index, date),
        onClose: options => this.closeDialog(options),
      }, CALENDAR_SLOTS));
    };

    const renderInlineCalendar = () => {
      if (!this.inline || !this.fields.some(field => field.kind === "date") || this.disabled) {
        return null;
      }
      const INDEX = this.range ? this.inlineIndex : 0;
      return h("div", {
        class: "a_date_input__inline",
      }, [
        h(ADateInputDialog, {
          ...getCalendarProps(INDEX),
          id: `${ this.htmlIdLocal }_calendar`,
          label: getTranslatedText({ placeholder: "_A_DATE_INPUT_CHOOSE_DATE_" }),
          inline: true,
          selected: this.getDateOfIndex(INDEX),
          onSelect: this.selectInline,
        }, CALENDAR_SLOTS),
        h("span", {
          class: "a_sr_only",
          role: "status",
        }, this.announcement),
      ]);
    };

    const renderTimeButton = field => {
      if (!this.showTimeList || field.kind !== "time") {
        return null;
      }
      const LIST_ID = `${ field.id }_times`;
      const IS_OPEN = this.openTimeKey === field.key;
      const LABEL = (field.subLabel ? `${ getTranslatedText({ placeholder: field.subLabel }) }: ` : "") +
        getTranslatedText({ placeholder: "_A_DATE_INPUT_TIME_LIST_" });
      return h("button", {
        ref: element => {
          this.timeButtonRefs[field.key] = element;
        },
        type: "button",
        class: "a_date_input__toggle",
        disabled: this.disabledAttribut,
        "aria-label": LABEL,
        title: LABEL,
        "aria-haspopup": "listbox",
        "aria-expanded": IS_OPEN ? "true" : "false",
        "aria-controls": IS_OPEN ? LIST_ID : undefined,
        onClick: () => this.toggleTimeList(field),
      }, [
        h(AIcon, {
          icon: ChevronDown,
          class: "a_date_input__toggle__icon",
        }),
      ]);
    };

    const renderTimeList = field => {
      if (this.openTimeKey !== field.key) {
        return null;
      }
      return teleport(h(ADateInputTimeList, {
        id: `${ field.id }_times`,
        label: (field.subLabel ? `${ getTranslatedText({ placeholder: field.subLabel }) }: ` : "") +
          getTranslatedText({ placeholder: "_A_DATE_INPUT_TIME_LIST_" }),
        options: this.getTimeOptions(field.index),
        selected: this.texts[field.key],
        inBody: this.inBody,
        isCloseByButtonInvisibleInViewport: this.isCloseByButtonInvisibleInViewport,
        getReference: () => this.controlRefs[field.key],
        ownerId: this.htmlIdLocal,
        onSelect: option => this.selectTime(field, option),
        onClose: options => this.closeTimeList(options),
      }));
    };

    const renderClear = field => {
      if (!this.clearable || this.disabled || !this.texts[field.key]) {
        return null;
      }
      const LABEL = getTranslatedText({
        placeholder: "_A_DATE_INPUT_CLEAR_",
        extra: { label: getTranslatedText({ placeholder: field.subLabel || `${ this.label ?? this.labelScreenReader ?? "" }`, extra: this.extra }) },
      });
      return h("button", {
        type: "button",
        class: "a_date_input__clear",
        "aria-label": LABEL,
        title: LABEL,
        onClick: () => this.clearFieldAndFocus(field),
      }, [
        h(AIcon, {
          icon: Close,
          class: "a_date_input__toggle__icon",
        }),
      ]);
    };

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent a_date_input__parent", {
          a_form_element__parent_float: IS_FLOAT,
          a_form_element__parent_inset: this.isLabelInsetEffective,
          a_form_element__parent_not_empty: !IS_FLOAT || this.fields.some(field => this.texts[field.key]),
        }],
        // the float label is over the first field: as wide as it, without its buttons (clear, calendar, time list)
        style: IS_FLOAT ? this.labelSpaceStyle : undefined,
      }, [
        (this.label || this.labelScreenReader) && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          extra: this.extra,
          hideFor: IS_GROUP,
          isError: this.isErrorsAll,
          isLabelFloat: IS_FLOAT,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.required,
        }),
        h(AFormLabelDescription, {
          id: this.labelDescriptionId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.labelDescription,
          extra: this.extra,
          isLabelFloat: IS_FLOAT,
        }),
        !IS_FLOAT && FORMAT_HINT,
        h("div", {
          class: ["a_date_input", {
            a_date_input_range: this.range,
          }],
          role: IS_GROUP ? "group" : undefined,
          "aria-labelledby": IS_GROUP && (this.label || this.labelScreenReader) ? `${ this.htmlIdLocal }_label` : undefined,
        }, this.fields.map(field => h("div", {
          key: field.key,
          ref: field.kind === "date" ?
            element => {
              this.fieldRefs[field.index] = element;
            } :
            undefined,
          class: ["a_date_input__field", `a_date_input__field_${ field.kind }`],
        }, [
          IS_GROUP && h("label", {
            for: field.id,
            class: "a_date_input__sub_label",
          }, getTranslatedText({ placeholder: field.subLabel })),
          h("div", {
            ref: element => {
              this.controlRefs[field.key] = element;
            },
            class: ["a_form_control a_date_input__control", {
              a_form_control_invalid: !!this.getAriaInvalid(field),
              disabled: this.disabled,
            }],
          }, [
            h("input", {
              id: field.id,
              type: "text",
              class: ["a_date_input__input", this.inputClass],
              value: this.texts[field.key],
              ...this.placeholderAttributes,
              disabled: this.disabledAttribut,
              autocomplete: "off",
              spellcheck: "false",
              "aria-required": this.required ? "true" : undefined,
              "aria-invalid": this.getAriaInvalid(field),
              "aria-describedby": this.ariaDescribedbyInput,
              ...this.inputAttributes,
              onInput: $event => this.onInput(field, $event),
              onChange: this.commit,
              onKeydown: this.onKeydown,
            }),
            renderClear(field),
            field.kind === "date" && !this.inline && renderToggle(field),
            renderTimeButton(field),
          ]),
          field.kind === "date" && renderDialog(field),
          renderTimeList(field),
        ]))),
        renderInlineCalendar(),
        IS_FLOAT && FORMAT_HINT,
        h(AFormHelpText, {
          id: this.helpTextId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrorsAll && h(AErrorsText, {
          id: this.errorsId,
          alwaysTranslate: this.alwaysTranslate,
          errors: this.errorsAll,
          errorsClass: this.errorsClass,
        }),
      ]),
    ]);
  },
};
