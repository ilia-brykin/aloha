import {
  h,
} from "vue";

import ATranslation from "../ATranslation/ATranslation";

// @vue/component
export default {
  name: "ASkipLink",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    targetId: {
      type: String,
      required: false,
      default: "main",
    },
    text: {
      type: String,
      required: false,
      default: "_A_SKIP_LINK_TEXT_",
    },
  },
  methods: {
    /*
     * the focus is moved by script: with a hash router "#main" would change the route,
     * and a browser does not focus an element like <main> without tabindex
     */
    skip($event) {
      const TARGET = document.getElementById(this.targetId);
      if (!TARGET) {
        return;
      }
      $event.preventDefault();
      if (!TARGET.hasAttribute("tabindex")) {
        TARGET.setAttribute("tabindex", "-1");
        // only needed for this focus: without it a click into the content would show a focus ring
        TARGET.addEventListener("blur", () => TARGET.removeAttribute("tabindex"), { once: true });
      }
      TARGET.focus();
      TARGET.scrollIntoView?.();
    },
  },
  render() {
    return h("a", {
      class: "a_skip_link",
      href: `#${ this.targetId }`,
      onClick: this.skip,
    }, [
      h(ATranslation, {
        alwaysTranslate: this.alwaysTranslate,
        extra: this.extra,
        tag: "span",
        text: this.text,
      }),
    ]);
  },
};
