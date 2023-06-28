import {
  computed,
  ref,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

const language = ref("de");
const i18n = ref({});
const isTranslate = ref(true);

export const translation = computed(() => {
  if (isTranslate.value) {
    return i18n.value[language.value];
  }
  return {};
});

export default function ATranslationAPI() {
  return {
    i18n,
    language,
    setI18n,
    setLanguage,
    toggleTranslate,
    translation,
  };
}

export function setI18n(i18nLocal = {}) {
  i18n.value = i18nLocal;
}

export function setLanguage(languageLocal = "") {
  language.value = languageLocal;
}

export function toggleTranslate(isTranslateLocal) {
  if (isUndefined(isTranslateLocal)) {
    isTranslate.value = !isTranslate.value;
  }
  isTranslate.value = !!isTranslateLocal;
}
