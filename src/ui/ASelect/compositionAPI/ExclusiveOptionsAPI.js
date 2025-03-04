import {
  computed,
  toRef,
} from "vue";

import AKeyId from "../../../const/AKeyId";
import AKeyLabel from "../../../const/AKeyLabel";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  keyBy,
} from "lodash-es";

export default function ExclusiveOptionsAPI(props) {
  const exclusiveOptionLabel = toRef(props, "exclusiveOptionLabel");
  const exclusiveOptionValue = toRef(props, "exclusiveOptionValue");
  const extra = toRef(props, "extra");
  const isExclusiveOptionEnabled = toRef(props, "isExclusiveOptionEnabled");

  const exclusiveOption = computed(() => {
    if (isExclusiveOptionEnabled.value) {
      return {
        [AKeyId]: exclusiveOptionValue.value,
        [AKeyLabel]: getTranslatedText({
          placeholder: exclusiveOptionLabel.value,
          extra: extra.value,
        }),
      };
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
