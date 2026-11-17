import {
  computed,
  toRef,
} from "vue";

import {
  AFormPluginOptions,
} from "../../plugins/AFormPlugin";
import {
  isBoolean,
} from "lodash-es";

export const LABEL_POSITIONS = ["float", "inset", "top"];

export function isLabelPosition(value) {
  return LABEL_POSITIONS.indexOf(value) !== -1;
}

function getLabelPositionFromBoolean(isLabelFloat) {
  return isLabelFloat ? "float" : "top";
}

/**
 * Position of the label:
 * - "float": inside the empty field, moves to the border on focus or with a value
 * - "inset": inside the field, small above the value
 * - "top": above the field
 *
 * Priority: prop labelPosition, deprecated prop isLabelFloat,
 * component plugin (propsDefault.labelPosition / isLabelFloat), AFormPlugin labelPosition, "float".
 */
export default function UiLabelPositionAPI(props, {
  pluginOptions,
} = {}) {
  const isLabelFloat = toRef(props, "isLabelFloat");
  const labelPosition = toRef(props, "labelPosition");

  const labelPositionLocal = computed(() => {
    if (isLabelPosition(labelPosition.value)) {
      return labelPosition.value;
    }
    if (isBoolean(isLabelFloat.value)) {
      return getLabelPositionFromBoolean(isLabelFloat.value);
    }
    const PROPS_DEFAULT = pluginOptions?.propsDefault || {};
    if (isLabelPosition(PROPS_DEFAULT.labelPosition)) {
      return PROPS_DEFAULT.labelPosition;
    }
    if (isBoolean(PROPS_DEFAULT.isLabelFloat)) {
      return getLabelPositionFromBoolean(PROPS_DEFAULT.isLabelFloat);
    }
    if (isLabelPosition(AFormPluginOptions.labelPosition)) {
      return AFormPluginOptions.labelPosition;
    }
    return "float";
  });

  // "float" and "inset": the label is inside the field (no placeholder, no visible label description)
  const isLabelFloatLocal = computed(() => labelPositionLocal.value !== "top");

  const isLabelInset = computed(() => labelPositionLocal.value === "inset");

  return {
    isLabelFloatLocal,
    isLabelInset,
    labelPositionLocal,
  };
}
