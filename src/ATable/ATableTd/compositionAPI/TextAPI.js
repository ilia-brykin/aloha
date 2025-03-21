import {
  computed,
  h,
  inject,
  toRef,
  withDirectives,
} from "vue";

import ASafeHtml from "../../../directives/ASafeHtml";
import {
  forEach,
  get,
  isUndefined,
} from "lodash-es";

export default function TextAPI(props) {
  const column = toRef(props, "column");
  const isFooter = toRef(props, "isFooter");
  const row = toRef(props, "row");

  const columnsDefaultValue = inject("columnsDefaultValue");
  const valuesForColumnDefault = inject("valuesForColumnDefault");

  const defaultValue = computed(() => {
    if (isFooter.value && "footerDefaultValue" in column.value) {
      return column.value.footerDefaultValue;
    }
    if ("defaultValue" in column.value) {
      return column.value.defaultValue;
    }
    if (!isUndefined(columnsDefaultValue.value)) {
      return columnsDefaultValue.value;
    }
    return "";
  });

  const textKeyLabel = computed(() => {
    if (isFooter.value) {
      return column.value.footerKeyLabel;
    }
    return column.value.keyLabel;
  });

  const safeHtmlKeyLabel = computed(() => {
    if (isFooter.value) {
      return column.value.footerKeyLabelSafeHtml;
    }
    return column.value.keyLabelSafeHtml;
  });

  const htmlKeyLabel = computed(() => {
    if (isFooter.value) {
      return column.value.footerKeyLabelHtml;
    }
    return column.value.keyLabelHtml;
  });

  const text = computed(() => {
    if (textKeyLabel.value) {
      return get(row.value, textKeyLabel.value);
    }
    return undefined;
  });

  const safeHtml = computed(() => {
    if (safeHtmlKeyLabel.value) {
      return get(row.value, safeHtmlKeyLabel.value);
    }
    return undefined;
  });

  const html = computed(() => {
    if (htmlKeyLabel.value) {
      return get(row.value, htmlKeyLabel.value);
    }
    return undefined;
  });

  const getTextWithDefault = textLocal => {
    let isTextInValuesForColumnDefault = false;
    forEach(valuesForColumnDefault.value, item => {
      if (textLocal === item) {
        isTextInValuesForColumnDefault = true;
        return false;
      }
    });
    if (isTextInValuesForColumnDefault) {
      return defaultValue.value;
    }
    return textLocal;
  };

  const textWithDefault = computed(() => {
    return getTextWithDefault(text.value);
  });

  const safeHtmlWithDefault = computed(() => {
    return getTextWithDefault(safeHtml.value);
  });

  const htmlWithDefault = computed(() => {
    return getTextWithDefault(html.value);
  });

  const textOrHtmlRender = computed(() => {
    if (textKeyLabel.value) {
      return h("span", null, textWithDefault.value);
    }
    if (safeHtmlKeyLabel.value) {
      return h("div", {
        innerHTML: safeHtmlWithDefault.value,
      });
    }
    if (htmlKeyLabel.value) {
      return withDirectives(h("div"), [
        [ASafeHtml, htmlWithDefault.value],
      ]);
    }
    return undefined;
  });

  return {
    textOrHtmlRender,
  };
}
