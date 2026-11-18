import {
  computed,
  toRef,
} from "vue";

import {
  AVATAR_COLORS_AUTO,
} from "../const";

/**
 * Returns always the same color for the same text, so a person keeps its color.
 */
export function getColorForText(text = "") {
  // FNV-1a: similar names get different colors. The hash needs bitwise operations.
  /* eslint-disable no-bitwise */
  let hash = 2166136261;
  for (const CHAR of String(text)) {
    hash ^= CHAR.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return AVATAR_COLORS_AUTO[(hash >>> 0) % AVATAR_COLORS_AUTO.length];
  /* eslint-enable no-bitwise */
}

export default function ColorAPI(props) {
  const color = toRef(props, "color");
  const name = toRef(props, "name");

  const colorClass = computed(() => {
    if (color.value === "auto") {
      return `a_avatar_${ name.value ? getColorForText(name.value) : "gray" }`;
    }
    return `a_avatar_${ color.value }`;
  });

  return {
    colorClass,
  };
}
