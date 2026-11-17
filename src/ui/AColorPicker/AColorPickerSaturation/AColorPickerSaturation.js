import {
  h,
} from "vue";

import SaturationAPI from "./compositionAPI/SaturationAPI";
import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default {
  name: "AColorPickerSaturation",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    brightness: {
      type: Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    hue: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    saturation: {
      type: Number,
      required: true,
    },
    thumbColor: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "change",
  ],
  setup(props, context) {
    const {
      areaRef,
      areaStyle,
      onKeydown,
      onPointerDown,
      thumbRef,
      thumbStyle,
    } = SaturationAPI(props, context);

    return {
      areaRef,
      areaStyle,
      onKeydown,
      onPointerDown,
      thumbRef,
      thumbStyle,
    };
  },
  render() {
    return h("div", {
      ref: "areaRef",
      class: "a_color_picker_saturation",
      style: this.areaStyle,
      onPointerdown: this.onPointerDown,
    }, [
      h("div", {
        ref: "thumbRef",
        id: this.id,
        class: "a_color_picker_saturation__thumb",
        style: {
          ...this.thumbStyle,
          "--a_color_picker_thumb_color": this.thumbColor,
        },
        role: "slider",
        tabindex: this.disabled ? -1 : 0,
        "aria-label": getTranslatedText({
          placeholder: "_A_COLOR_PICKER_SATURATION_",
          alwaysTranslate: this.alwaysTranslate,
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": this.saturation,
        "aria-valuetext": getTranslatedText({
          placeholder: "_A_COLOR_PICKER_SATURATION_VALUE_{{saturation}}_{{brightness}}_",
          alwaysTranslate: this.alwaysTranslate,
          extra: {
            saturation: this.saturation,
            brightness: this.brightness,
          },
        }),
        "aria-disabled": this.disabled ? "true" : undefined,
        onKeydown: this.onKeydown,
      }),
    ]);
  },
};
