import {
  computed,
  toRef,
} from "vue";

import {
  getItemHtmlId,
  getTabHtmlId,
} from "../../../utils/utils";

import {
  AKeyIndex,
  AKeyLabel,
} from "../../../../const/AKeys";
import {
  isNil,
} from "lodash-es";

export default function AttributesAPI(props, {
  isActive = computed(() => false),
}) {
  const data = toRef(props, "data");
  const extra = toRef(props, "extra");
  const parentId = toRef(props, "parentId");
  const texts = toRef(props, "texts");

  const number = computed(() => {
    return data.value[AKeyIndex] + 1;
  });

  const id = computed(() => {
    return getTabHtmlId({ parentId: parentId.value, index: data.value[AKeyIndex] });
  });

  const ariaControls = computed(() => {
    return getItemHtmlId({ parentId: parentId.value, index: data.value[AKeyIndex] });
  });

  // roving tabindex: only the tab of the active slide is in the order of the focus
  const tabindex = computed(() => {
    return isActive.value ?
      "0" :
      "-1";
  });

  const label = computed(() => {
    const LABEL = data.value[AKeyLabel];
    return isNil(LABEL) || LABEL === "" ? undefined : `${ LABEL }`;
  });

  // name of the tab: label of the slide (key-label) or "Slide 3"
  const tabText = computed(() => {
    return label.value || texts.value.controlsSlide;
  });

  const extraLocal = computed(() => {
    return {
      ...extra.value,
      number: number.value,
    };
  });

  return {
    ariaControls,
    extraLocal,
    id,
    label,
    number,
    tabindex,
    tabText,
  };
}
