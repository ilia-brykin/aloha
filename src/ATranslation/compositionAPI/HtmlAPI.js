import {
  computed,
  toRef,
} from "vue";

import {
  sanitizeLocal,
} from "../../utils/utils";

import AMobileAPI from "../../compositionAPI/AMobileAPI";
import ATranslationAPI from "./ATranslationAPI";
import UtilsAPI from "./UtilsAPI";

import {
  forEach,
  isArray,
  isNil,
  isPlainObject,
  isUndefined,
} from "lodash-es";

export default function HtmlAPI(props, {
  hasTextAfter = computed(() => false),
  hasTextBefore = computed(() => false),
  textAfterForCurrentDevice = computed(() => ""),
  textBeforeForCurrentDevice = computed(() => ""),
}) {
  const alwaysTranslate = toRef(props, "alwaysTranslate");
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

  const {
    translationChanges,
  } = ATranslationAPI();

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

  const isSafeHtmlArray = computed(() => {
    return isArray(safeHtml.value);
  });

  const isHtmlArray = computed(() => {
    return isArray(html.value);
  });

  const hasSafeHtml = computed(() => {
    if (isSafeHtmlArray.value) {
      return safeHtml.value.length > 0;
    }
    return !isUndefined(safeHtmlForCurrentDevice.value);
  });

  const hasHtml = computed(() => {
    if (isHtmlArray.value) {
      return html.value.length > 0;
    }
    return !isUndefined(htmlForCurrentDevice.value);
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

  const htmlLocalOptions = computed(() => {
    const HTML_LOCAL_OPTIONS = {
      safeHtml: undefined,
      html: undefined,
      dataTranslateHtml: undefined,
      dataTranslateSafeHtml: undefined,
    };
    if (!translationChanges.value) {
      return HTML_LOCAL_OPTIONS;
    }
    if (hasSafeHtml.value) {
      const SAFE_HTML_LIST = isSafeHtmlArray.value ?
        safeHtml.value :
        [safeHtmlForCurrentDevice.value];
      let safeHtmlCombined = "";
      let dataTranslateSafeHtml = "";
      forEach(SAFE_HTML_LIST, safeHtmlEl => {
        if (!safeHtmlEl && safeHtmlEl !== 0) {
          return;
        }
        if (safeHtmlCombined) {
          safeHtmlCombined += " ";
          dataTranslateSafeHtml += " ";
        }
        if (isPlaceholderTranslate(safeHtmlEl)) {
          safeHtmlCombined += getTranslatedText({
            placeholder: safeHtmlEl,
            extra: extra.value,
            alwaysTranslate: alwaysTranslate.value,
          });
          dataTranslateSafeHtml += safeHtmlEl;
        } else {
          safeHtmlCombined += safeHtmlEl;
        }
      });

      HTML_LOCAL_OPTIONS.safeHtml = safeHtmlCombined || undefined;
      HTML_LOCAL_OPTIONS.dataTranslateSafeHtml = dataTranslateSafeHtml || undefined;
    } else if (hasHtml.value) {
      const HTML_LIST = isHtmlArray.value ?
        html.value :
        [htmlForCurrentDevice.value];
      let htmlCombined = "";
      let dataTranslateHtml = "";
      forEach(HTML_LIST, htmlEl => {
        if (!htmlEl && htmlEl !== 0) {
          return;
        }
        if (htmlCombined) {
          htmlCombined += " ";
          dataTranslateHtml += " ";
        }
        if (isPlaceholderTranslate(htmlEl)) {
          htmlCombined += sanitizeLocal(getTranslatedText({
            placeholder: htmlEl,
            extra: extra.value,
            alwaysTranslate: alwaysTranslate.value,
          }));
          dataTranslateHtml += htmlEl;
        } else {
          htmlCombined += sanitizeLocal(htmlEl);
        }
      });

      HTML_LOCAL_OPTIONS.html = isNil(htmlCombined) ? undefined : htmlCombined;
      HTML_LOCAL_OPTIONS.dataTranslateHtml = isNil(dataTranslateHtml) ? undefined : dataTranslateHtml;
    }

    return HTML_LOCAL_OPTIONS;
  });

  const htmlLocalWithBeforeAndAfter = computed(() => {
    return `${ textBeforeHtml.value }${ htmlLocalOptions.value.safeHtml || htmlLocalOptions.value.html }${ textAfterHtml.value }`;
  });

  return {
    hasHtml,
    hasSafeHtml,
    htmlLocalOptions,
    htmlLocalWithBeforeAndAfter,
  };
}
