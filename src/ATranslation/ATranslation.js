import {
  h,
} from "vue";
import {
  isPlainObject,
  isString,
  get,
} from "lodash-es";

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
  inject: ["i18n"],
  computed: {
    textBeforeHtml() {
      return this.textBefore ? `<span>${ this.textBefore }</span>` : "";
    },

    textAfterHtml() {
      return this.textAfter ? `<span>${ this.textAfter }</span>` : "";
    },

    htmlLocal() {
      let html = this.html;

      if (this.isTranslateHtml) {
        html = this.getTranslatedText({
          placeholder: this.html,
        });
      }
      return `${ this.textBeforeHtml }${ html }${ this.textAfterHtml }`;
    },

    isTranslateHtml() {
      return !(!this.html || !this.isPlaceholderTranslate(this.html));
    },

    textLocal() {
      if (this.isTranslateText) {
        return this.getTranslatedText({
          placeholder: this.text,
        });
      }
      return this.text;
    },

    isTranslateText() {
      return !(!this.text || !this.isPlaceholderTranslate(this.text));
    },

    titleLocal() {
      if (this.isTranslateTitle) {
        return this.getTranslatedText({
          placeholder: this.title,
        });
      }
      return this.title;
    },

    isTranslateTitle() {
      return !(!this.title || !this.isPlaceholderTranslate(this.title));
    },

    placeholderLocal() {
      if (this.isTranslatePlaceholder) {
        return this.getTranslatedText({
          placeholder: this.placeholder,
        });
      }
      return this.placeholder;
    },

    isTranslatePlaceholder() {
      return !(!this.placeholder || !this.isPlaceholderTranslate(this.placeholder));
    },

    ariaLabelLocal() {
      if (this.isTranslateAriaLabel) {
        return this.getTranslatedText({
          placeholder: this.ariaLabel,
        });
      }
      return this.ariaLabel;
    },

    isTranslateAriaLabel() {
      return !(!this.ariaLabel || !this.isPlaceholderTranslate(this.ariaLabel));
    },

    attributesLocal() {
      const ATTRIBUTES = {};
      if (this.isTranslateText) {
        ATTRIBUTES["data-translate-text"] = this.text;
      }
      if (this.isTranslateHtml) {
        ATTRIBUTES["data-translate-html"] = this.html;
      }
      if (this.html) {
        ATTRIBUTES.innerHTML = this.htmlLocal;
      }
      if (this.title) {
        ATTRIBUTES.title = this.titleLocal;
      }
      if (this.isTranslateTitle) {
        ATTRIBUTES["data-translate-title"] = this.title;
      }
      if (this.placeholder) {
        ATTRIBUTES.placeholder = this.placeholderLocal;
      }
      if (this.isTranslatePlaceholder) {
        ATTRIBUTES["data-translate-placeholder"] = this.placeholder;
      }
      if (this.ariaLabel) {
        ATTRIBUTES["aria-label"] = this.ariaLabelLocal;
      }
      if (this.isTranslateAriaLabel) {
        ATTRIBUTES["data-translate-aria-label"] = this.ariaLabel;
      }
      return ATTRIBUTES;
    },

    translation() {
      return this.i18n[this.$root.$i18n.language];
    },

    textLocalWithBeforeAndAfter() {
      return `${ this.textBefore }${ this.textLocal }${ this.textAfter }`;
    },
  },
  methods: {
    isPlaceholderTranslate(text) {
      return !(!isString(text) ||
        text[0] !== "_" ||
        text[text.length - 1] !== "_");
    },

    replaceText({ text = "", object }) {
      if (!isPlainObject(object)) {
        return text;
      }
      let textClone = text;
      let searchIndexStart = 0;
      while (true) {
        const firstIndex = textClone.indexOf("{{", searchIndexStart);
        const lastIndex = textClone.indexOf("}}", searchIndexStart);

        if (firstIndex === -1 || lastIndex === -1) {
          break;
        }

        const PATH = textClone.slice(firstIndex + 2, lastIndex).trim();
        const valueFromObject = get(object, PATH);

        textClone = this.spliceString({
          text: textClone,
          replaceText: valueFromObject,
          firstIndex,
          lastindex: lastIndex + 2,
        });
        searchIndexStart = firstIndex + `${ valueFromObject }`.length;
      }
      return textClone;
    },

    spliceString({
      text = "",
      replaceText = "",
      firstIndex,
      lastindex,
    }) {
      return `${ text.slice(0, firstIndex) }${ replaceText }${ text.slice(lastindex, text.length) }`;
    },


    getTranslatedText({ placeholder }) {
      if (this.extra) {
        return this.replaceText({
          text: this.translation[placeholder],
          object: this.extra,
        });
      }
      return this.translation[placeholder];
    },
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
