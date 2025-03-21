import {
  h,
} from "vue";

import AriaLabelAPI from "./compositionAPI/AriaLabelAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import HtmlAPI from "./compositionAPI/HtmlAPI";
import PlaceholderAPI from "./compositionAPI/PlaceholderAPI";
import RestAttributesAPI from "./compositionAPI/RestAttributesAPI";
import TextAPI from "./compositionAPI/TextAPI";
import TextAfterBeforeAPI from "./compositionAPI/TextAfterBeforeAPI";
import TitleAPI from "./compositionAPI/TitleAPI";

export default {
  name: "ATranslation",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
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
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    placeholder: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    safeHtml: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    text: {
      type: [String, Number, Object, Array],
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
      textLocalOptions,
    } = TextAPI(props);

    const {
      hasHtml,
      hasSafeHtml,
      htmlLocalOptions,
      htmlLocalWithBeforeAndAfter,
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
      hasPlaceholder,
      placeholderAttributes,
    } = PlaceholderAPI(props);

    const {
      ariaLabelAttributes,
      hasAriaLabel,
    } = AriaLabelAPI(props);

    const {
      attributesLocal,
      hasAttributesLocal,
    } = AttributesAPI({
      htmlLocalOptions,
      textLocalOptions,
      titleLocalOptions,
    });

    const {
      hasRestAttributes,
    } = RestAttributesAPI({
      hasAriaLabel,
      hasAttributesLocal,
      hasPlaceholder,
      hasTextAfter,
      hasTextBefore,
    });

    return {
      ariaLabelAttributes,
      attributesLocal,
      hasText,
      hasTextAfter,
      hasTextBefore,
      hasHtml,
      hasRestAttributes,
      hasSafeHtml,
      htmlLocalWithBeforeAndAfter,
      placeholderAttributes,
      textAfterForCurrentDevice,
      textBeforeForCurrentDevice,
      textLocalOptions,
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
        this.textLocalOptions.text,
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

    return (this.hasRestAttributes || this.$slots.default) && h(this.tag, {
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
