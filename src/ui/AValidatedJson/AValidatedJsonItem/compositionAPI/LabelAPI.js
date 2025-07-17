import {
  computed,
  toRef,
} from "vue";

import AValidatedJsonErrorLabelsAPI from "../../compositionAPI/AValidatedJsonErrorLabelsAPI";
import {
  getTranslatedText,
} from "../../../../ATranslation/compositionAPI/UtilsAPI";

import {
  AKeyId,
} from "../../../../const/AKeys";

export default function LabelAPI(props) {
  const elementLabel = toRef(props, "elementLabel");
  const elementTemplate = toRef(props, "elementTemplate");
  const hidePosition = toRef(props, "hidePosition");
  const mode = toRef(props, "mode");
  const modelIndex = toRef(props, "modelIndex");
  const modelItem = toRef(props, "modelItem");
  const parentId = toRef(props, "parentId");

  const {
    setErrorLabel,
  } = AValidatedJsonErrorLabelsAPI();

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
    const ID = mode.value === "list" ? modelIndex.value : modelItem.value[AKeyId];
    setErrorLabel({ label: currentLabel, id: ID, parentId: parentId.value });

    return currentLabel;
  });

  return {
    label,
  };
}
