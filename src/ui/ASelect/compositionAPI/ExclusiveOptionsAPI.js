import {
  computed,
  toRef,
} from "vue";

import {
  extractTextFromHtml,
} from "../../../utils/utils";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  AKeyId,
  AKeyLabel,
  AKeyLabelSearch,
} from "../../../const/AKeys";
import {
  keyBy,
} from "lodash-es";

export default function ExclusiveOptionsAPI(props) {
  const exclusiveOptionLabel = toRef(props, "exclusiveOptionLabel");
  const exclusiveOptionValue = toRef(props, "exclusiveOptionValue");
  const extra = toRef(props, "extra");
  const isExclusiveOptionEnabled = toRef(props, "isExclusiveOptionEnabled");
  const searchTextInHtml = toRef(props, "searchTextInHtml");

  const exclusiveOption = computed(() => {
    if (isExclusiveOptionEnabled.value) {
      const LABEL = getTranslatedText({
        placeholder: exclusiveOptionLabel.value,
        extra: extra.value,
      });
      const OPTIONS = {
        [AKeyId]: exclusiveOptionValue.value,
        [AKeyLabel]: LABEL,
      };

      if (searchTextInHtml.value) {
        OPTIONS[AKeyLabelSearch] = extractTextFromHtml(LABEL);
      }

      return OPTIONS;
    }

    return undefined;
  });

  const exclusiveDataKeyByKeyIdLocal = computed(() => {
    return keyBy([exclusiveOption.value], AKeyId);
  });

  return {
    exclusiveOption,
    exclusiveDataKeyByKeyIdLocal,
  };
}
