import {
  h,
} from "vue";

import ADatepicker from "../ADatepicker/ADatepicker";
import ATranslation from "../../ATranslation/ATranslation";

import UiMixinProps from "../mixins/UiMixinProps";

import IdAPI from "./compositionAPI/IdAPI";
import InputAPI from "./compositionAPI/InputAPI";
import DateAPI from "./compositionAPI/DateAPI";
import ActionsAPI from "./compositionAPI/ActionsAPI";

export default {
  name: "ADatepickerRange",
  mixins: [
    UiMixinProps,
  ],
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
    isError: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: null,
    },
  },
  emits: [
    "input",
    "change",
    "focus"
  ],
  setup(props, context) {
    const {
      getId,
      idMin,
      idMax,
      idForLabelMin,
      idForLabelMax,
    } = IdAPI(props);

    const {
      inputClass,
      inputAttributesMin,
      inputAttributesMax,
    } = InputAPI(props, {
      idForLabelMin,
      idForLabelMax,
      getId,
    });

    const {
      placeholderMin,
      placeholderMax,
      minuteStep,
      type,
      format,
      modelMin,
      modelMax,
    } = DateAPI(props, {
      idMin,
      idMax,
    });

    const {
      onSelectMin,
      onSelectMax,
      onFocusMin,
      onFocusMax,
    } = ActionsAPI(props, context);

    return {
      idForLabelMin,
      idMin,
      placeholderMin,
      format,
      type,
      minuteStep,
      inputAttributesMin,
      idMax,
      idForLabelMax,
      placeholderMax,
      inputAttributesMax,
      modelMin,
      modelMax,
      inputClass,
      onSelectMin,
      onFocusMin,
      onSelectMax,
      onFocusMax,
    };
  },
  render() {
    return h("div", {
      class: [
        "a_d_flex",
        "a_align_items_center"
      ]
    }, [
      h(ATranslation, {
        id: this.idForLabelMin,
        text: "_A_DATEPICKER_RANGE_FROM_",
        class: ["a_d_inline_block", "a_pr_4", "a_text_nowrap"]
      }),
      h(ADatepicker, {
        id: this.idMin,
        ref: "min",
        modelValue: this.modelMin,
        class: { "is-invalid": this.isError },
        firstDayOfWeek: 1,
        lang: "de",
        inputClass: this.inputClass,
        placeholder: this.placeholderMin,
        disabled: this.disabled || this.options.disabledMin,
        width: this.width,
        format: this.format,
        type: this.type,
        minuteStep: this.minuteStep,
        inputAttr: this.inputAttributesMin,
        appendToBody: true,
        onChange: event => {
          this.onSelectMin(event);
        },
        onFocus: this.onFocusMin
      }),
      h(ATranslation, {
        id: this.idForLabelMax,
        text: "_A_DATEPICKER_RANGE_UNTIL_",
        class: ["a_d_inline_block", "a_px_4", "a_text_nowrap"]
      }),
      h(ADatepicker, {
        id: this.idMax,
        ref: "max",
        modelValue: this.modelMax,
        class: { "is-invalid": this.isError },
        firstDayOfWeek: 1,
        lang: "de",
        inputClass: this.inputClass,
        placeholder: this.placeholderMax,
        disabled: this.disabled || this.options.disabledMax,
        width: this.width,
        format: this.format,
        type: this.type,
        minuteStep: this.minuteStep,
        inputAttr: this.inputAttributesMax,
        appendToBody: true,
        onChange: event => {
          this.onSelectMax(event);
        },
        onFocus: this.onFocusMax
      }),
    ]);
  },
};
