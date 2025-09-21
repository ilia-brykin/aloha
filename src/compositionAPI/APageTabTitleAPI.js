import {
  computed,
  onMounted,
  ref,
  toRef,
  watch,
} from "vue";

import ATranslationAPI from "../ATranslation/compositionAPI/ATranslationAPI";
import UtilsAPI from "../ATranslation/compositionAPI/UtilsAPI";

import {
  isBrowser,
} from "../utils/isBrowser";

const baseTitle = ref("");

export default function APageTabTitleAPI(props) {
  const title = toRef(props, "title");
  const extra = toRef(props, "extra");

  const {
    translationChanges,
  } = ATranslationAPI();

  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const baseTitleTranslated = computed(() => {
    if (!translationChanges.value) {
      return undefined;
    }
    if (isPlaceholderTranslate(baseTitle.value)) {
      return getTranslatedText({
        placeholder: baseTitle.value,
      });
    }
    return baseTitle.value;
  });

  const titleTranslated = computed(() => {
    if (!translationChanges.value) {
      return undefined;
    }
    if (isPlaceholderTranslate(title.value)) {
      return getTranslatedText({
        placeholder: title.value,
        extra: extra.value,
      });
    }
    return title.value;
  });

  const setPageTabTitle = () => {
    if (!isBrowser()) {
      return;
    }
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

  onMounted(() => {
    setPageTabTitle();
  });


  watch(titleTranslated, () => {
    setPageTabTitle();
  });
}

export function setBaseTitle(baseTitleArg = "") {
  baseTitle.value = baseTitleArg;
}
