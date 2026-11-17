import {
  computed,
  toRef,
} from "vue";

import {
  isSameColor,
  parseColor,
  toCssColor,
} from "../utils/colorUtils";

export default function PredefineAPI(props, {
  rgbaLocal = computed(() => ({})),
  setColor = () => {},
}) {
  const predefine = toRef(props, "predefine");

  const predefineLocal = computed(() => {
    const ITEMS = [];
    (predefine.value || []).forEach(value => {
      const COLOR = parseColor(value);
      if (COLOR) {
        ITEMS.push({
          value,
          color: COLOR,
          cssColor: toCssColor(COLOR),
          isSelected: isSameColor(COLOR, rgbaLocal.value),
        });
      }
    });
    return ITEMS;
  });

  const selectPredefine = item => {
    setColor(item.color);
  };

  return {
    predefineLocal,
    selectPredefine,
  };
}
