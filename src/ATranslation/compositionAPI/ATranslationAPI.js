import {
  computed,
  ref,
  watch,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

const language = ref("de");
export let i18n = {};
const timeTranslation = ref(new Date());
export const timeTranslationLastChanged = ref(new Date());
export let translation = {};
export const isTranslate = ref(true);

export const watchList = computed(() => {
  return [
    language.value,
    timeTranslation.value,
    isTranslate.value,
  ];
});

watch(watchList, () => {
  _updateTranslation();
}, {
  immediate: true,
});

export default function ATranslationAPI() {
  return {
    isTranslate,
    language,
    setI18n,
    setLanguage,
    toggleTranslate,
    translationChanges: timeTranslationLastChanged,
    updateI18n,
    updateI18nForLanguage,
    updateTranslation,
  };
}

export function setI18n(i18nLocal = {}) {
  i18n = i18nLocal;
}

export function updateI18n(i18nLocal = {}) {
  i18n = {
    ...i18n,
    ...i18nLocal,
  };
}

export function updateI18nForLanguage({ i18n: i18nLocal = {}, language }) {
  i18n[language] = i18n[language] || {};
  i18n[language] = {
    ...(i18n[language] || {}),
    ...i18nLocal,
  };
}

export function setLanguage(languageLocal = "") {
  language.value = languageLocal;
}

export function toggleTranslate(isTranslateLocal) {
  if (isUndefined(isTranslateLocal)) {
    isTranslate.value = !isTranslate.value;
  } else {
    isTranslate.value = !!isTranslateLocal;
  }
}

function _updateTranslation() {
  translation = i18n[language.value];
  timeTranslationLastChanged.value = new Date();
}

export function updateTranslation() {
  timeTranslation.value = new Date();
}
