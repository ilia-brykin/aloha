import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";
import UtilsAPI from "./UtilsAPI";

import {
  sanitizeLocal,
} from "../../utils/utils";

import {
  isPlainObject,
  isUndefined,
} from "lodash-es";

export default function HtmlAPI(props, {
  hasTextAfter = computed(() => false),
  hasTextBefore = computed(() => false),
  textAfterForCurrentDevice = computed(() => ""),
  textBeforeForCurrentDevice = computed(() => ""),
  translation = computed(() => ({})),
}) {
  const extra = toRef(props, "extra");
  const html = toRef(props, "html");
  const safeHtml = toRef(props, "safeHtml");

  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const {
    isMobileWidth,
  } = AMobileAPI();

  const safeHtmlForCurrentDevice = computed(() => {
    if (isPlainObject(safeHtml.value)) {
      if (isMobileWidth.value) {
        return safeHtml.value.mobile;
      }
      return safeHtml.value.desktop;
    }
    return safeHtml.value;
  });

  const htmlForCurrentDevice = computed(() => {
    if (isPlainObject(html.value)) {
      if (isMobileWidth.value) {
        return html.value.mobile;
      }
      return html.value.desktop;
    }
    return html.value;
  });

  const hasSafeHtml = computed(() => {
    return !isUndefined(safeHtmlForCurrentDevice.value);
  });

  const hasHtml = computed(() => {
    return !isUndefined(htmlForCurrentDevice.value);
  });

  const isTranslateSafeHtml = computed(() => {
    return !(!hasSafeHtml.value || !isPlaceholderTranslate(safeHtml.value));
  });

  const isTranslateHtml = computed(() => {
    return !(!hasHtml.value || !isPlaceholderTranslate(html.value));
  });

  const textBeforeHtml = computed(() => {
    return hasTextBefore.value ?
      `<span>${ textBeforeForCurrentDevice.value }</span>` :
      "";
  });

  const textAfterHtml = computed(() => {
    return hasTextAfter.value ?
      `<span>${ textAfterForCurrentDevice.value }</span>` :
      "";
  });

  const htmlLocal = computed(() => {
    if (hasSafeHtml.value) {
      if (isTranslateSafeHtml.value) {
        return getTranslatedText({
          placeholder: safeHtmlForCurrentDevice.value,
          translationObj: translation.value,
          extra: extra.value
        });
      }
      return safeHtmlForCurrentDevice.value;
    }
    if (hasHtml.value) {
      if (isTranslateHtml.value) {
        return sanitizeLocal(getTranslatedText({
          placeholder: htmlForCurrentDevice.value,
          translationObj: translation.value,
          extra: extra.value
        }));
      }
      return sanitizeLocal(htmlForCurrentDevice.value);
    }
    return undefined;
  });

  const htmlLocalWithBeforeAndAfter = computed(() => {
    return `${ textBeforeHtml.value }${ htmlLocal.value }${ textAfterHtml.value }`;
  });

  return {
    hasHtml,
    hasSafeHtml,
    htmlForCurrentDevice,
    htmlLocalWithBeforeAndAfter,
    isTranslateHtml,
    isTranslateSafeHtml,
    safeHtmlForCurrentDevice,
  };
}
