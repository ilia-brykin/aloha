import {
  computed,
  toRef,
} from "vue";

import {
  isNumber,
} from "lodash-es";

export default function CircleSizesAPI(props) {
  const width = toRef(props, "width");

  const sizesLocal = computed(() => {
    if (isNumber(width.value)) {
      return `height: ${ width.value }px; width: ${ width.value }px;`;
    }
    return `height: ${ width.value }; width: ${ width.value };`;
  });

  return {
    sizesLocal,
  };
}
