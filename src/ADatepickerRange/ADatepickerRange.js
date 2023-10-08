import {
  ref,
  computed,
  h,
  toRefs
} from "vue";

import ADatepicker from "../ui/ADatepicker/ADatepicker";
import ATranslation from "../ATranslation/ATranslation";

import moment from "moment";

import {
  cloneDeep
} from "lodash-es";

export default {
  name: "ADatepickerRange",
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
    selected: {
      type: Function,
      default: () => {},
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: () => ({}),
      required: true,
    },
    idPrefix: {
      type: String,
      default: "",
    },
    isError: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: "",
    },
    blur: {
      type: Function,
      default: () => {},
    },
    focus: {
      type: Function,
      default: () => {},
    },
    input: {
      type: Function,
      default: () => {},
    },
    change: {
      type: Function,
      default: () => {},
    },
    errors: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: undefined,
    },
    data: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: undefined,
    },
    extraStatic: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "input",
    "change",
    "focus",
    "blur"
  ],
  setup(props, { emit }) {
    const { model, options, idPrefix, isError, disabled } = toRefs(props);
    const popupStyles = ref({
      min: {},
      max: {},
    });

    const getId = computed(() => options.value.htmlId || `${ idPrefix.value }${ options.value.attrId || options.value.key || options.value.id }`);
    const inputClass = computed(() => [
      "form-control form_control",
      options.value.classInput,
      { "is-invalid": isError.value }
    ]);
    const modelMin = computed(() => model.value[`${ options.value.id }_after`]);
    const modelMax = computed(() => model.value[`${ options.value.id }_before`]);
    const idMin = computed(() => getId.value);
    const idMax = computed(() => `${ getId.value }_von`);
    const idForLabelMin = computed(() => `${ getId.value }_min_label`);
    const idForLabelMax = computed(() => `${ getId.value }_max_label`);
    const ariaRequired = computed(() => `${ options.value.required || false }`);
    const ariaInvalid = computed(() => isError.value ? "true" : "false");
    const inputAttributes = computed(() => {
      const ATTRIBUTES = {
        "aria-required": ariaRequired.value,
        "aria-invalid": ariaInvalid.value,
      };
      if (options.value.name) {
        ATTRIBUTES.name = options.value.name;
      }
      return ATTRIBUTES;
    });
    const inputAttributesMin = computed(() => {
      const ATTRIBUTES = cloneDeep(inputAttributes.value);
      ATTRIBUTES["aria-describedby"] = idForLabelMin.value;
      return ATTRIBUTES;
    });
    const inputAttributesMax = computed(() => {
      const ATTRIBUTES = cloneDeep(inputAttributes.value);
      ATTRIBUTES["aria-describedby"] = `${ getId.value }_label ${ idForLabelMax.value }`;
      return ATTRIBUTES;
    });
    const isDate = date => moment(date, "YYYY-MM-DD", true).isValid();
    const placeholderMin = computed(() => options.value.placeholderMin || "");
    const placeholderMax = computed(() => options.value.placeholderMax || "");
    const minuteStep = computed(() => options.value.minuteStep || 5);
    const type = computed(() => options.value.type || "date");
    const format = computed(() => options.value.format || "DD.MM.YYYY");
    const width = computed(() => options.value.width || null);

    const onFocus = $event => {
      emit("focus", {
        id: options.value.id,
        model: $event.target.value,
        $event: $event,
        param: options.value.param,
        options: options.value,
      });
    };

    const setPositionLeft = ({ ref }) => {
      const INPUT_RECT = document.querySelector(ref).getBoundingClientRect();
      popupStyles.value[ref].left = `${ INPUT_RECT.left }px`;
    };

    const onFocusMin = $event => {
      setPositionLeft({ ref: "min" });
      onFocus($event);
    };

    const onFocusMax = $event => {
      setPositionLeft({ ref: "max" });
      onFocus($event);
    };

    const formatDate = date => {
      return isDate(date) ? moment(date).format("YYYY-MM-DD") : date;
    };

    const onSelect = ({ arg, label }) => {
      const data = formatDate(arg);
      const MODEL = cloneDeep(model.value);
      MODEL[`${ options.value.id }_${ label }`] = data;

      emit("input", {
        model: MODEL,
        currentModel: data,
        id: options.value.id,
        param: options.value.param,
        options: options.value,
      });
      emit("change", {
        model: MODEL,
        currentModel: data,
        id: options.value.id,
        param: options.value.param,
        options: options.value,
      });
      props.selected({
        model: MODEL,
        currentModel: data,
        id: options.value.id,
        param: options.value.param,
      });
    };

    const onSelectMin = arg => {
      onSelect({ arg, label: "after" });
    };

    const onSelectMax = arg => {
      onSelect({ arg, label: "before" });
    };

    return () => {
      return h("div", { class: ["a_d_flex", "a_align_items_center"] }, [
        h(ATranslation, {
          id: idForLabelMin.value,
          text: "von",
          class: ["a_d_inline_block", "a_pr_4", "a_text_nowrap"]
        }),
        h(ADatepicker, {
          id: idMin.value,
          modelValue: modelMin.value,
          class: inputClass.value,
          "first-day-of-week": 1,
          lang: "de",
          "input-class": inputClass.value,
          placeholder: placeholderMin.value,
          disabled: disabled.value || options.value.disabledMin,
          width: width.value,
          format: format.value,
          type: type.value,
          "minute-step": minuteStep.value,
          "input-attr": inputAttributesMin.value,
          "append-to-body": true,
          "popup-style": popupStyles.value.min,
          onChange: onSelectMin,
          onFocus: onFocusMin
        }),
        h(ATranslation, {
          id: idForLabelMax.value,
          text: "bis",
          class: ["a_d_inline_block", "a_px_4", "a_text_nowrap"]
        }),
        h(ADatepicker, {
          id: idMax.value,
          modelValue: modelMax.value,
          class: inputClass.value,
          "first-day-of-week": 1,
          lang: "de",
          "input-class": inputClass.value,
          placeholder: placeholderMax.value,
          disabled: disabled.value || options.value.disabledMax,
          width: width.value,
          format: format.value,
          type: type.value,
          "minute-step": minuteStep.value,
          "input-attr": inputAttributesMax.value,
          "append-to-body": true,
          "popup-style": popupStyles.value.max,
          onChange: onSelectMax,
          onFocus: onFocusMax
        }),
      ]);
    };
  },
};
