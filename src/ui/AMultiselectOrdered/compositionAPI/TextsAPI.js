import {
  computed,
  toRef,
} from "vue";

import {
  AMultiselectOrderedPluginTexts,
} from "../../../plugins/AMultiselectOrderedPlugin";

export default function TextsAPI(props) {
  const texts = toRef(props, "texts");

  const textBtnDeleteTitle = computed(() => {
    return texts.value.btnDeleteTitle || AMultiselectOrderedPluginTexts.btnDeleteTitle;
  });

  const textBtnDownTitle = computed(() => {
    return texts.value.btnDownTitle || AMultiselectOrderedPluginTexts.btnDownTitle;
  });

  const textBtnGroupAriaLabel = computed(() => {
    return texts.value.btnGroupAriaLabel || AMultiselectOrderedPluginTexts.btnGroupAriaLabel;
  });

  const textBtnUpTitle = computed(() => {
    return texts.value.btnUpTitle || AMultiselectOrderedPluginTexts.btnUpTitle;
  });

  const textDeselectAll = computed(() => {
    return texts.value.deselectAll || AMultiselectOrderedPluginTexts.deselectAll;
  });

  const textModelEmpty = computed(() => {
    return texts.value.modelEmpty || AMultiselectOrderedPluginTexts.modelEmpty;
  });

  const textSelectAll = computed(() => {
    return texts.value.selectAll || AMultiselectOrderedPluginTexts.selectAll;
  });

  const textGroupAllAriaLabel = computed(() => {
    return texts.value.groupAllAriaLabel || AMultiselectOrderedPluginTexts.groupAllAriaLabel;
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
