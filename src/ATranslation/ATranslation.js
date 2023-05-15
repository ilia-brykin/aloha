import {
  h,
} from "vue";

import AriaLabelAPI from "./compositionAPI/AriaLabelAPI";
import ATranslationAPI from "./compositionAPI/ATranslationAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import HtmlAPI from "./compositionAPI/HtmlAPI";
import PlaceholderAPI from "./compositionAPI/PlaceholderAPI";
import TextAfterBeforeAPI from "./compositionAPI/TextAfterBeforeAPI";
import TextAPI from "./compositionAPI/TextAPI";
import TitleAPI from "./compositionAPI/TitleAPI";

export default {
  name: "ATranslation",
  props: {
    ariaLabel: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    html: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    placeholder: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    safeHtml: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    text: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    textAfter: {
      type: [String, Number, Object],
      required: false,
      default: "",
    },
    textBefore: {
      type: [String, Number, Object],
      required: false,
      default: "",
    },
    title: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const {
      translation,
    } = ATranslationAPI();

    const {
      hasTextAfter,
      hasTextBefore,
      textAfterForCurrentDevice,
      textBeforeForCurrentDevice,
    } = TextAfterBeforeAPI(props);

    const {
      hasText,
      isTranslateText,
      textForCurrentDevice,
      textLocal,
    } = TextAPI(props, {
      translation,
    });

    const {
      hasHtml,
      hasSafeHtml,
      htmlForCurrentDevice,
      htmlLocalWithBeforeAndAfter,
      isTranslateHtml,
      isTranslateSafeHtml,
      safeHtmlForCurrentDevice,
    } = HtmlAPI(props, {
      hasTextAfter,
      hasTextBefore,
      textAfterForCurrentDevice,
      textBeforeForCurrentDevice,
      translation,
    });

    const {
      titleLocalOptions,
    } = TitleAPI(props, {
      translation,
    });

    const {
      hasPlaceholder,
      isTranslatePlaceholder,
      placeholderForCurrentDevice,
      placeholderLocal,
    } = PlaceholderAPI(props, {
      translation,
    });

    const {
      ariaLabelForCurrentDevice,
      ariaLabelLocal,
      hasAriaLabel,
      isTranslateAriaLabel,
    } = AriaLabelAPI(props, {
      translation,
    });

    const {
      attributesLocal,
    } = AttributesAPI({
      ariaLabelForCurrentDevice,
      ariaLabelLocal,
      hasAriaLabel,
      hasPlaceholder,
      htmlForCurrentDevice,
      isTranslateAriaLabel,
      isTranslateHtml,
      isTranslatePlaceholder,
      isTranslateSafeHtml,
      isTranslateText,
      placeholderForCurrentDevice,
      placeholderLocal,
      safeHtmlForCurrentDevice,
      textForCurrentDevice,
      titleLocalOptions,
    });

    return {
      attributesLocal,
      hasText,
      hasTextAfter,
      hasTextBefore,
      hasHtml,
      hasSafeHtml,
      htmlLocalWithBeforeAndAfter,
      textAfterForCurrentDevice,
      textBeforeForCurrentDevice,
      textLocal,
      translation,
    };
  },
  render() {
    if (this.hasText) {
      return h(this.tag, this.attributesLocal, [
        this.textBeforeForCurrentDevice,
        this.textLocal,
        this.$slots.default && this.$slots.default(),
        this.textAfterForCurrentDevice,
      ]);
    }

    if (this.hasSafeHtml || this.hasHtml) {
      return h(this.tag, {
        ...this.attributesLocal,
        innerHTML: this.htmlLocalWithBeforeAndAfter,
      });
    }

    return h(this.tag, this.attributesLocal, [
      this.textBeforeForCurrentDevice,
      this.$slots.default && this.$slots.default(),
      this.textAfterForCurrentDevice,
    ]);
  },
};
