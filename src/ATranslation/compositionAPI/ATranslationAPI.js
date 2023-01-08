import {
  computed,
  ref,
} from "vue";


const language = ref("de");
const i18n = ref({});
export const translation = computed(() => {
  return i18n.value[language.value];
});

export default function ATranslationAPI() {
  return {
    i18n,
    language,
    setI18n,
    setLanguage,
    translation,
  };
}

export function setI18n(i18nLocal = {}) {
  i18n.value = i18nLocal;
}

export function setLanguage(languageLocal = "") {
  language.value = languageLocal;
}
