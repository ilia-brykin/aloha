import {
  computed,
  toRef,
} from "vue";

import {
  getItemHtmlId,
} from "../../utils/utils";

import {
  getTranslatedAttributes,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default function AttributesAPI(props) {
  const dataCount = toRef(props, "dataCount");
  const hasTab = toRef(props, "hasTab");
  const itemIndex = toRef(props, "itemIndex");
  const parentId = toRef(props, "parentId");
  const texts = toRef(props, "texts");

  const idLocal = computed(() => {
    return getItemHtmlId({ parentId: parentId.value, index: itemIndex.value });
  });

  // with tabs the slide is the tabpanel of its tab, without tabs a named group
  const roleAttributes = computed(() => {
    if (hasTab.value) {
      return {
        role: "tabpanel",
      };
    }
    return {
      role: "group",
    };
  });

  const ariaLabelAttributes = computed(() => {
    return getTranslatedAttributes({
      attr: "aria-label",
      placeholder: texts.value.itemAriaLabel,
      extra: {
        count: dataCount.value,
        number: itemIndex.value + 1,
      },
    });
  });

  return {
    ariaLabelAttributes,
    idLocal,
    roleAttributes,
  };
}
