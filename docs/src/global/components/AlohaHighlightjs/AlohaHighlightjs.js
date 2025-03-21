import {
  computed,
  h,
  ref,
  watch,
} from "vue";

import "highlight.js/styles/a11y-dark.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import markdown from "highlight.js/lib/languages/markdown";
import scss from "highlight.js/lib/languages/scss";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("scss", scss);


export default {
  name: "AlohaHighlightjs",
  props: {
    autodetect: {
      type: Boolean,
      required: false,
      default: true,
    },
    code: {
      type: String,
      required: true,
    },
    ignoreIllegals: {
      type: Boolean,
      required: false,
      default: true,
    },
    language: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup(props) {
    const language = ref(props.language);
    watch(() => props.language, newLanguage => {
      language.value = newLanguage;
    });

    const autodetect = computed(() => props.autodetect && !language.value);
    const cannotDetectLanguage = computed(() => {
      return !autodetect.value && !hljs.getLanguage(language.value);
    });

    const className = computed(() => {
      if (cannotDetectLanguage.value) {
        return "";
      }
      return `hljs ${ language.value }`;
    });

    const highlightedCode = computed(() => {
      // No idea what language to use, return raw code
      if (cannotDetectLanguage.value) {
        console.warn(`The language "${ language.value }" you specified could not be found.`);
        return escapeHtml(props.code);
      }
      if (autodetect.value) {
        const result = hljs.highlightAuto(props.code);
        return result.value;
      }
      const result = hljs.highlight(props.code, {
        language: language.value,
        ignoreIllegals: props.ignoreIllegals,
      });
      return result.value;
    });

    return {
      className,
      highlightedCode,
    };
  },
  render() {
    return h("pre", {}, [
      h("code", {
        class: this.className,
        innerHTML: this.highlightedCode,
        tabindex: "0",
      }),
    ]);
  },
};

export function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
