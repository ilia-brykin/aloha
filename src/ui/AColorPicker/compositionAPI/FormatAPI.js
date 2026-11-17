import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  COLOR_FORMATS,
  detectColorFormat,
} from "../utils/colorUtils";
import {
  isArray,
  uniq,
} from "lodash-es";

/**
 * Formats from the prop colorFormats (string or array, in the given order)
 * and the format that is currently used in the dialog.
 */
export default function FormatAPI(props) {
  const colorFormats = toRef(props, "colorFormats");
  const modelValue = toRef(props, "modelValue");

  const colorFormatsLocal = computed(() => {
    const FORMATS = isArray(colorFormats.value) ? colorFormats.value : [colorFormats.value];
    const VALID = uniq(FORMATS).filter(format => COLOR_FORMATS.indexOf(format) !== -1);
    return VALID.length ? VALID : ["hex"];
  });

  const currentFormat = ref(colorFormatsLocal.value[0]);

  const isFormatSwitch = computed(() => colorFormatsLocal.value.length > 1);

  const nextFormat = computed(() => {
    const INDEX = colorFormatsLocal.value.indexOf(currentFormat.value);
    return colorFormatsLocal.value[(INDEX + 1) % colorFormatsLocal.value.length];
  });

  // The format of the model wins, if it is allowed. Otherwise the first format.
  const setFormatFromModel = () => {
    const FORMAT = detectColorFormat(modelValue.value);
    currentFormat.value = colorFormatsLocal.value.indexOf(FORMAT) !== -1 ?
      FORMAT :
      colorFormatsLocal.value[0];
  };

  const switchFormat = () => {
    currentFormat.value = nextFormat.value;
  };

  return {
    colorFormatsLocal,
    currentFormat,
    isFormatSwitch,
    nextFormat,
    setFormatFromModel,
    switchFormat,
  };
}
