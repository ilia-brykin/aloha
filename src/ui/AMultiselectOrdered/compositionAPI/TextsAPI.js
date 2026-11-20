import {
  computed,
  toRef,
} from "vue";

import {
  AMultiselectOrderedTexts,
} from "../utils/texts";

export default function TextsAPI(props) {
  const texts = toRef(props, "texts");

  const textBtnDeleteTitle = computed(() => {
    return texts.value.btnDeleteTitle || AMultiselectOrderedTexts.btnDeleteTitle;
  });

  const textBtnDownTitle = computed(() => {
    return texts.value.btnDownTitle || AMultiselectOrderedTexts.btnDownTitle;
  });

  const textBtnGroupAriaLabel = computed(() => {
    return texts.value.btnGroupAriaLabel || AMultiselectOrderedTexts.btnGroupAriaLabel;
  });

  const textBtnUpTitle = computed(() => {
    return texts.value.btnUpTitle || AMultiselectOrderedTexts.btnUpTitle;
  });

  const textDeselectAll = computed(() => {
    return texts.value.deselectAll || AMultiselectOrderedTexts.deselectAll;
  });

  const textModelEmpty = computed(() => {
    return texts.value.modelEmpty || AMultiselectOrderedTexts.modelEmpty;
  });

  const textSelectAll = computed(() => {
    return texts.value.selectAll || AMultiselectOrderedTexts.selectAll;
  });

  const textGroupAllAriaLabel = computed(() => {
    return texts.value.groupAllAriaLabel || AMultiselectOrderedTexts.groupAllAriaLabel;
  });

  return {
    textBtnDeleteTitle,
    textBtnDownTitle,
    textBtnGroupAriaLabel,
    textBtnUpTitle,
    textDeselectAll,
    textGroupAllAriaLabel,
    textModelEmpty,
    textSelectAll,
  };
}
