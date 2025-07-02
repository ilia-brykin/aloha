import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../../ATranslation/compositionAPI/UtilsAPI";

export default function LabelAPI(props) {
  const elementLabel = toRef(props, "elementLabel");
  const elementTemplate = toRef(props, "elementTemplate");
  const hidePosition = toRef(props, "hidePosition");
  const modelIndex = toRef(props, "modelIndex");
  const modelItem = toRef(props, "modelItem");

  const label = computed(() => {
    let currentLabel = getTranslatedText({
      placeholder: elementTemplate.value,
      extra: {
        elementLabel: elementLabel.value,
        ...modelItem.value,
      },
    });

    if (!hidePosition.value) {
      currentLabel = `${ modelIndex.value + 1 }. ${ currentLabel }`;
    }

    return currentLabel;
  });

  return {
    label,
  };
}
