import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

const SIZES_DEPRECATED = {
  big: "large",
  medium: undefined,
};

/**
 * Props of the old ARate (2.x). They still work, but will be removed in 4.0.
 */
export default function DeprecatedAPI(props) {
  const allowHalf = toRef(props, "allowHalf");
  const color = toRef(props, "color");
  const colors = toRef(props, "colors");
  const halfIcon = toRef(props, "halfIcon");
  const icon = toRef(props, "icon");
  const iconFill = toRef(props, "iconFill");
  const icons = toRef(props, "icons");
  const max = toRef(props, "max");
  const rating = toRef(props, "rating");
  const size = toRef(props, "size");
  const voidIcon = toRef(props, "voidIcon");

  const maxLocal = computed(() => {
    return isNil(rating.value) ? max.value : rating.value;
  });

  const allowHalfLocal = computed(() => {
    return isNil(halfIcon.value) ? allowHalf.value : halfIcon.value;
  });

  const colorsLocal = computed(() => {
    return isNil(colors.value) ? color.value : colors.value;
  });

  const iconsLocal = computed(() => {
    return isNil(icons.value) ? iconFill.value : icons.value;
  });

  const voidIconLocal = computed(() => {
    return isNil(voidIcon.value) ? icon.value : voidIcon.value;
  });

  const sizeLocal = computed(() => {
    if (size.value in SIZES_DEPRECATED) {
      return SIZES_DEPRECATED[size.value];
    }
    return size.value;
  });

  return {
    allowHalfLocal,
    colorsLocal,
    iconsLocal,
    maxLocal,
    sizeLocal,
    voidIconLocal,
  };
}
