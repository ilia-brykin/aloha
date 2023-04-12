import {
  h,
  withDirectives,
} from "vue";

import ASafeHtml from "../directives/ASafeHtml";

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
      type: [String, Number],
      required: false,
    },
    html: {
      type: [String, Number],
      required: false,
    },
    title: {
      type: [String, Number, Array],
      required: false,
    },
    placeholder: {
      type: [String, Number],
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
      type: [String, Number],
      required: false,
      default: "",
    },
    textAfter: {
      type: [String, Number],
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
      titleLocalOptions,
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
      isTranslateAriaLabel,
      isTranslateHtml,
      isTranslatePlaceholder,
      isTranslateText,
      placeholderLocal,
      titleLocalOptions,
    });

    return {
      attributesLocal,
      htmlLocal,
      textLocal,
      textLocalWithBeforeAndAfter,
      translation,
    };
  },
  render() {
    if (this.htmlLocal) {
      return withDirectives(h(this.tag, this.attributesLocal), [
        [ASafeHtml, this.htmlLocal],
      ]);
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
