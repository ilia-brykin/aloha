import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
  isPlaceholderTranslate,
} from "../../../../ATranslation/compositionAPI/UtilsAPI";

import {
  get,
} from "lodash-es";

export default function GroupAPI(props) {
  const alwaysTranslate = toRef(props, "alwaysTranslate");
  const data = toRef(props, "data");
  const keyGroup = toRef(props, "keyGroup");
  const keyGroupLabelCallback = toRef(props, "keyGroupLabelCallback");
  const mode = toRef(props, "mode");
  const translateGroup = toRef(props, "translateGroup");

  const groupLabel = computed(() => {
    if (!mode.value === "one_per_group" || !keyGroup.value) {
      return undefined;
    }
    const groupKey = get(data.value, keyGroup.value);
    if (!groupKey) {
      return undefined;
    }

    let groupLabel = groupKey;
    if (keyGroupLabelCallback.value) {
      groupLabel = keyGroupLabelCallback.value({ item: data.value, inDropdown: false, group: groupKey });
    }

    if (translateGroup.value && isPlaceholderTranslate(groupLabel)) {
      return getTranslatedText({
        placeholder: groupLabel,
        alwaysTranslate: alwaysTranslate.value,
      });
    }

    return groupLabel;
  });

  return {
    groupLabel,
  };
}
