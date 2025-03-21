import {
  computed,
  toRef,
} from "vue";

import Languages from "../locale/languages";

export default function LanguagesAPI(props) {
  const languages = toRef(props, "languages");
  const lang = toRef(props, "lang");

  const languagesLocal = computed(() => {
    return {
      ...Languages,
      ...languages.value,
    };
  });

  const currentLanguage = computed(() => {
    return languagesLocal.value[lang.value];
  });

  return {
    currentLanguage,
  };
}
