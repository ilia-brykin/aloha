import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../../ATranslation/compositionAPI/UtilsAPI";

export default function LabelAPI(props) {
  const elementLabel = toRef(props, "elementLabel");
  const modelIndex = toRef(props, "modelIndex");
  const modelItem = toRef(props, "modelItem");
  const modeOptions = toRef(props, "modeOptions");

  const elementTemplate = computed(() => {
    return modeOptions.value.elementTemplate || "{{ elementLabel }}";
  });

  const label = computed(() => {
    let currentLabel = getTranslatedText({
      placeholder: elementTemplate.value,
      extra: {
        elementLabel: elementLabel.value,
        ...modelItem.value,
      },
    });

    if (!modeOptions.value.hidePosition) {
      currentLabel = `${ modelIndex.value + 1 }. ${ currentLabel }`;
    }

    return currentLabel;
  });

  return {
    label,
  };
}
