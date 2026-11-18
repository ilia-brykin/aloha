import {
  Comment,
  toRef,
} from "vue";

import {
  isFunction,
} from "lodash-es";

export default function SeparatorAPI(props, { slots }) {
  const length = toRef(props, "length");
  const separator = toRef(props, "separator");

  /**
   * Returns the content of the separator after the cell with the index or undefined.
   */
  const getSeparator = ({ index }) => {
    if (index >= length.value - 1) {
      return undefined;
    }
    if (slots.separator) {
      const VNODES = slots.separator({ index }) || [];
      // v-if="false" in the slot gives only a comment
      return VNODES.some(vnode => vnode.type !== Comment) ? VNODES : undefined;
    }
    if (isFunction(separator.value)) {
      return separator.value({ index });
    }
    return separator.value || undefined;
  };

  return {
    getSeparator,
  };
}
