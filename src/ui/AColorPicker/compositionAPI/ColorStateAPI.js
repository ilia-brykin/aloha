import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  detectColorFormat,
  formatColor,
  getContrastTextColor,
  hsvToRgb,
  parseColor,
  rgbToHsv,
  toCssColor,
} from "../utils/colorUtils";
import {
  isEqual,
} from "lodash-es";

const COLOR_FALLBACK = { r: 255, g: 0, b: 0, a: 1 };

/**
 * State of the panel (hsva) and the colors derived from it and from the model.
 */
export default function ColorStateAPI(props, {
  currentFormat = ref("hex"),
} = {}) {
  const modelValue = toRef(props, "modelValue");
  const panelDefaultColor = toRef(props, "panelDefaultColor");
  const showAlpha = toRef(props, "showAlpha");

  const hsva = ref({ h: 0, s: 100, v: 100, a: 1 });

  /*
   * The model value as it was when the dialog was opened. As long as the color
   * and the format are not changed, this text is shown and written back,
   * so e.g. "hsl(145, 63%, 29%)" does not become "hsl(145, 64%, 29%)" by rounding.
   */
  const modelSnapshot = ref(undefined);

  const modelColor = computed(() => parseColor(modelValue.value));

  const modelCssColor = computed(() => {
    return modelColor.value ? toCssColor(modelColor.value) : undefined;
  });

  const modelTextColor = computed(() => {
    return modelColor.value ? getContrastTextColor(modelColor.value) : undefined;
  });

  const rgbaLocal = computed(() => {
    return {
      ...hsvToRgb(hsva.value),
      a: showAlpha.value ? hsva.value.a : 1,
    };
  });

  const valueLocal = computed(() => {
    if (modelSnapshot.value &&
      modelSnapshot.value.format === currentFormat.value &&
      isEqual(modelSnapshot.value.hsva, hsva.value)) {
      return modelSnapshot.value.text;
    }
    return formatColor(rgbaLocal.value, currentFormat.value, showAlpha.value);
  });

  const cssColorLocal = computed(() => toCssColor(rgbaLocal.value));

  const cssColorOpaqueLocal = computed(() => toCssColor({ ...rgbaLocal.value, a: 1 }));

  const hueCssColor = computed(() => `hsl(${ hsva.value.h }, 100%, 50%)`);

  const alphaBackground = computed(() => {
    return `linear-gradient(to right, transparent, ${ cssColorOpaqueLocal.value })`;
  });

  const alphaPercent = computed(() => Math.round(hsva.value.a * 100));

  const setColor = ({ r, g, b, a = 1 }) => {
    const HSV = rgbToHsv({ r, g, b });
    // gray, black and white have no hue: keep the current one
    const IS_HUE_KEPT = HSV.s === 0 || HSV.v === 0;
    hsva.value = {
      h: IS_HUE_KEPT ? hsva.value.h : Math.round(HSV.h),
      s: Math.round(HSV.s),
      v: Math.round(HSV.v),
      a: showAlpha.value ? a : 1,
    };
  };

  const setColorFromModel = () => {
    setColor(modelColor.value || parseColor(panelDefaultColor.value) || COLOR_FALLBACK);
    const IS_SNAPSHOT = !!modelColor.value && (showAlpha.value || modelColor.value.a === 1);
    modelSnapshot.value = IS_SNAPSHOT ?
      {
        format: detectColorFormat(modelValue.value),
        hsva: { ...hsva.value },
        text: modelValue.value.trim(),
      } :
      undefined;
  };

  const setHue = h => {
    hsva.value = { ...hsva.value, h };
  };

  const setSaturationBrightness = ({ saturation, brightness }) => {
    hsva.value = { ...hsva.value, s: saturation, v: brightness };
  };

  const setAlphaPercent = percent => {
    hsva.value = { ...hsva.value, a: percent / 100 };
  };

  return {
    alphaBackground,
    alphaPercent,
    cssColorLocal,
    cssColorOpaqueLocal,
    hsva,
    hueCssColor,
    modelColor,
    modelCssColor,
    modelTextColor,
    rgbaLocal,
    setAlphaPercent,
    setColor,
    setColorFromModel,
    setHue,
    setSaturationBrightness,
    valueLocal,
  };
}
