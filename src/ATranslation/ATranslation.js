import {
  h,
} from "vue";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import ATranslationAPI from "./compositionAPI/ATranslationAPI";
import HtmlAPI from "./compositionAPI/HtmlAPI";
import TextAPI from "./compositionAPI/TextAPI";
import TitleAPI from "./compositionAPI/TitleAPI";
import PlaceholderAPI from "./compositionAPI/PlaceholderAPI";
import AriaLabelAPI from "./compositionAPI/AriaLabelAPI";

export default {
  name: "ATranslation",
  props: {
    text: {
      type: String,
      required: false,
    },
    html: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    ariaLabel: {
      type: String,
      required: false,
    },
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    extra: {
      type: Object,
      required: false,
    },
    textBefore: {
      type: String,
      required: false,
      default: "",
    },
    textAfter: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup(props) {
    const {
      translation,
    } = ATranslationAPI();

    const {
      htmlLocal,
      isTranslateHtml,
    } = HtmlAPI(props, {
      translation,
    });

    const {
      isTranslateText,
      textLocal,
      textLocalWithBeforeAndAfter,
    } = TextAPI(props, {
      translation,
    });

    const {
      isTranslateTitle,
      titleLocal,
    } = TitleAPI(props, {
      translation,
    });

    const {
      isTranslatePlaceholder,
      placeholderLocal,
    } = PlaceholderAPI(props, {
      translation,
    });

    const {
      ariaLabelLocal,
      isTranslateAriaLabel,
    } = AriaLabelAPI(props, {
      translation,
    });

    const {
      attributesLocal,
    } = AttributesAPI(props, {
      ariaLabelLocal,
      htmlLocal,
      isTranslateAriaLabel,
      isTranslateHtml,
      isTranslatePlaceholder,
      isTranslateText,
      isTranslateTitle,
      placeholderLocal,
      titleLocal,
    });

    return {
      attributesLocal,
      htmlLocal,
      textLocal,
      textLocalWithBeforeAndAfter,
    };
  },
  render() {
    if (this.htmlLocal) {
      return h(this.tag, this.attributesLocal);
    }
    if (this.textLocal) {
      return h(this.tag, this.attributesLocal, [
        this.textLocalWithBeforeAndAfter,
        this.$slots.default && this.$slots.default(),
      ]);
    }
    return h(this.tag, this.attributesLocal, this.$slots.default && this.$slots.default());
  },
};
