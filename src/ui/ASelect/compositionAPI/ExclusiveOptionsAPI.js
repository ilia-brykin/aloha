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
  const exclusiveOptionValue = toRef(props, "exclusiveOptionValue");
  const exclusiveOptionLabel = toRef(props, "exclusiveOptionLabel");

  const exclusiveOption = computed(() => {
    return {
      [AKeyId]: exclusiveOptionValue.value,
      [AKeyLabel]: getTranslatedText({
        placeholder: exclusiveOptionLabel.value,
      }),
    };
  });

  const exclusiveDataKeyByKeyIdLocal = computed(() => {
    return keyBy([exclusiveOption.value], AKeyId);
  });

  return {
    exclusiveOption,
    exclusiveDataKeyByKeyIdLocal,
  };
}
