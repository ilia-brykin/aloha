import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedAttributes,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default function AttributesAPI(props) {
  const dataCount = toRef(props, "dataCount");
  const itemIndex = toRef(props, "itemIndex");
  const parentId = toRef(props, "parentId");
  const texts = toRef(props, "texts");

  const itemNumber = computed(() => {
    return itemIndex.value + 1;
  });

  const idLocal = computed(() => {
    return `${ parentId.value }_item_${ itemNumber.value }`;
  });

  const ariaLabelAttributes = computed(() => {
    return getTranslatedAttributes({
      attr: "aria-label",
      placeholder: texts.value.itemAriaLabel,
      extra: {
        count: dataCount.value,
        number: itemNumber.value,
      },
    });
  });

  return {
    ariaLabelAttributes,
    idLocal,
  };
}
