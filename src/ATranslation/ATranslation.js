import {
  h,
} from "vue";

import AriaLabelAPI from "./compositionAPI/AriaLabelAPI";
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
    } = TextAPI(props);

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
    });

    const {
      titleLocalOptions,
    } = TitleAPI(props);

    const {
      placeholderAttributes,
    } = PlaceholderAPI(props);

    const {
      ariaLabelAttributes,
    } = AriaLabelAPI(props);

    const {
      attributesLocal,
    } = AttributesAPI({
      htmlForCurrentDevice,
      isTranslateHtml,
      isTranslateSafeHtml,
      isTranslateText,
      safeHtmlForCurrentDevice,
      textForCurrentDevice,
      titleLocalOptions,
    });

    return {
      ariaLabelAttributes,
      attributesLocal,
      hasText,
      hasTextAfter,
      hasTextBefore,
      hasHtml,
      hasSafeHtml,
      htmlLocalWithBeforeAndAfter,
      placeholderAttributes,
      textAfterForCurrentDevice,
      textBeforeForCurrentDevice,
      textLocal,
    };
  },
  render() {
    if (this.hasText) {
      return h(this.tag, {
        ...this.attributesLocal,
        ...this.ariaLabelAttributes,
        ...this.placeholderAttributes,
      }, [
        this.textBeforeForCurrentDevice,
        this.textLocal,
        this.$slots.default && this.$slots.default(),
        this.textAfterForCurrentDevice,
      ]);
    }

    if (this.hasSafeHtml || this.hasHtml) {
      return h(this.tag, {
        ...this.attributesLocal,
        ...this.ariaLabelAttributes,
        ...this.placeholderAttributes,
        innerHTML: this.htmlLocalWithBeforeAndAfter,
      });
    }

    return h(this.tag, {
      ...this.attributesLocal,
      ...this.ariaLabelAttributes,
      ...this.placeholderAttributes,
    }, [
      this.textBeforeForCurrentDevice,
      this.$slots.default && this.$slots.default(),
      this.textAfterForCurrentDevice,
    ]);
  },
};
