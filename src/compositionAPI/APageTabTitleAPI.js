import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

import ATranslationAPI from "../ATranslation/compositionAPI/ATranslationAPI";
import UtilsAPI from "../ATranslation/compositionAPI/UtilsAPI";

const baseTitle = ref("");

export default function APageTabTitleAPI(props) {
  const title = toRef(props, "title");
  const extra = toRef(props, "extra");

  const {
    translation,
  } = ATranslationAPI();
  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const baseTitleTranslated = computed(() => {
    if (isPlaceholderTranslate(baseTitle.value)) {
      return getTranslatedText({
        placeholder: baseTitle.value,
        translationObj: translation.value,
      });
    }
    return baseTitle.value;
  });

  const titleTranslated = computed(() => {
    if (isPlaceholderTranslate(title.value)) {
      return getTranslatedText({
        placeholder: title.value,
        translationObj: translation.value,
        extra: extra.value,
      });
    }
    return title.value;
  });

  const setPageTabTitle = () => {
    let pageTitle = "";
    if (titleTranslated.value) {
      pageTitle = titleTranslated.value;
      if (baseTitleTranslated.value) {
        pageTitle += ` - ${ baseTitleTranslated.value }`;
      }
    } else if (baseTitleTranslated.value) {
      pageTitle = baseTitleTranslated.value;
    }
    document.title = pageTitle;
  };

  setPageTabTitle();

  watch(title, () => {
    setPageTabTitle();
  });
}

export function setBaseTitle(baseTitleArg = "") {
  baseTitle.value = baseTitleArg;
}
