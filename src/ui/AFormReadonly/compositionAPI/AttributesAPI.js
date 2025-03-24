import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function AttributesAPI(props) {
  const id = toRef(props, "id");
  const helpText = toRef(props, "helpText");
  const label = toRef(props, "label");
  const labelScreenReader = toRef(props, "labelScreenReader");

  const isRangeProvide = inject("isRangeProvide", false);

  const labelId = computed(() => {
    return `${ id.value }_label`;
  });

  const helpTextId = computed(() => {
    return `${ id.value }_help_text`;
  });

  const valueId = computed(() => {
    return `${ id.value }_value`;
  });

  const ariaLabelledby = computed(() => {
    if (isRangeProvide.value) {
      return undefined;
    }

    if (label.value || labelScreenReader.value) {
      return labelId.value;
    }

    return undefined;
  });

  const ariaDescribedby = computed(() => {
    if (isRangeProvide.value) {
      return undefined;
    }

    if (!isNil(helpText.value) && helpText.value !== "") {
      return `${ valueId.value } ${ helpTextId.value }`;
    }

    return `${ valueId.value }`;
  });

  const role = computed(() => {
    if (isRangeProvide.value) {
      return undefined;
    }

    return "group";
  });

  return {
    ariaDescribedby,
    ariaLabelledby,
    helpTextId,
    isRangeProvide,
    labelId,
    role,
    valueId,
  };
}
