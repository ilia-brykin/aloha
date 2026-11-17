import {
  h,
} from "vue";

import SliderAPI from "./compositionAPI/SliderAPI";
import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default {
  name: "AColorPickerSlider",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    background: {
      type: String,
      required: true,
    },
    class: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    largeStep: {
      type: Number,
      required: false,
      default: 10,
    },
    max: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: false,
      default: 0,
    },
    modelValue: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      required: false,
      default: 1,
    },
    thumbColor: {
      type: String,
      required: false,
      default: undefined,
    },
    valueText: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      onKeydown,
      onPointerDown,
      thumbRef,
      thumbStyle,
      trackRef,
    } = SliderAPI(props, context);

    return {
      onKeydown,
      onPointerDown,
      thumbRef,
      thumbStyle,
      trackRef,
    };
  },
  render() {
    return h("div", {
      ref: "trackRef",
      class: ["a_color_picker_slider", this.class],
      style: {
        "--a_color_picker_slider_bg": this.background,
      },
      onPointerdown: this.onPointerDown,
    }, [
      h("div", {
        ref: "thumbRef",
        id: this.id,
        class: "a_color_picker_slider__thumb",
        style: {
          ...this.thumbStyle,
          "--a_color_picker_thumb_color": this.thumbColor,
        },
        role: "slider",
        tabindex: this.disabled ? -1 : 0,
        "aria-label": getTranslatedText({
          placeholder: this.label,
          alwaysTranslate: this.alwaysTranslate,
        }),
        "aria-valuemin": this.min,
        "aria-valuemax": this.max,
        "aria-valuenow": Math.round(this.modelValue),
        "aria-valuetext": this.valueText,
        "aria-orientation": "horizontal",
        "aria-disabled": this.disabled ? "true" : undefined,
        onKeydown: this.onKeydown,
      }),
    ]);
  },
};
