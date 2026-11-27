import {
  h,
  nextTick,
} from "vue";

import AButton from "../AButton/AButton";
import AIcon from "../AIcon/AIcon";
import ALink from "../ALink/ALink";
import ATranslation from "../ATranslation/ATranslation";

import {
  getTranslatedAttributes,
} from "../ATranslation/compositionAPI/UtilsAPI";

// @vue/component
export default {
  name: "ABreadcrumb",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    ariaLabel: {
      type: String,
      required: false,
      default: "_A_BREADCRUMB_ARIA_LABEL_",
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    maxItems: {
      type: Number,
      required: false,
      default: undefined,
      validator: value => value >= 2,
    },
    separator: {
      type: String,
      required: false,
      default: "›",
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  computed: {
    // number of items hidden behind the "…" button: all except the first and the last maxItems - 1
    hiddenCount() {
      if (this.isExpanded || !this.maxItems || this.items.length <= this.maxItems) {
        return 0;
      }
      return this.items.length - this.maxItems;
    },
  },
  watch: {
    // a new trail (e.g. a new page) starts collapsed again
    items() {
      this.isExpanded = false;
    },
  },
  methods: {
    async expand() {
      this.isExpanded = true;
      await nextTick();
      // the button is gone: move the focus to the first item that was hidden
      const ITEM = this.$el?.querySelectorAll(".a_breadcrumb__item")[1];
      const TARGET = ITEM?.querySelector("a") || ITEM;
      if (TARGET === ITEM && ITEM) {
        ITEM.setAttribute("tabindex", "-1");
      }
      TARGET?.focus();
    },

    renderSeparator(index) {
      if (index === 0 || !this.separator) {
        return null;
      }
      return h("span", {
        class: "a_breadcrumb__separator",
        "aria-hidden": "true",
      }, this.separator);
    },

    renderItem(item, index) {
      const IS_CURRENT = index === this.items.length - 1;
      const IS_LINK = !IS_CURRENT && !!(item.to || item.href);
      const EXTRA = item.extra || this.extra;

      return h("li", {
        key: item.id ?? index,
        class: "a_breadcrumb__item",
      }, [
        this.renderSeparator(index),
        IS_LINK ?
          h(ALink, {
            class: "a_breadcrumb__link",
            alwaysTranslate: this.alwaysTranslate,
            extra: EXTRA,
            href: item.href,
            iconLeft: item.icon,
            text: item.label,
            to: item.to,
            attributes: item.to ? { ariaCurrentValue: "false" } : undefined,
          }) :
          h("span", {
            class: ["a_breadcrumb__text", { a_breadcrumb__current: IS_CURRENT }],
            "aria-current": IS_CURRENT ? "page" : undefined,
          }, [
            item.icon && h(AIcon, {
              class: "a_breadcrumb__icon",
              icon: item.icon,
            }),
            h(ATranslation, {
              alwaysTranslate: this.alwaysTranslate,
              extra: EXTRA,
              tag: "span",
              text: item.label,
            }),
          ]),
      ]);
    },

    renderMore() {
      return h("li", {
        key: "a_breadcrumb__more",
        class: "a_breadcrumb__item",
      }, [
        this.renderSeparator(1),
        h(AButton, {
          class: "a_btn a_btn_link a_breadcrumb__more",
          alwaysTranslate: this.alwaysTranslate,
          extra: { count: this.hiddenCount },
          text: "…",
          textAriaHidden: true,
          textScreenReader: "_A_BREADCRUMB_SHOW_HIDDEN_",
          title: "_A_BREADCRUMB_SHOW_HIDDEN_",
          type: "button",
          onClick: this.expand,
        }),
      ]);
    },
  },
  render() {
    if (!this.items?.length) {
      return null;
    }

    const CHILDREN = this.hiddenCount ?
      [
        this.renderItem(this.items[0], 0),
        this.renderMore(),
        ...this.items
          .map((item, index) => ({ item, index }))
          .slice(1 + this.hiddenCount)
          .map(({ item, index }) => this.renderItem(item, index)),
      ] :
      this.items.map((item, index) => this.renderItem(item, index));

    return h("nav", {
      class: "a_breadcrumb",
      ...getTranslatedAttributes({ attr: "aria-label", placeholder: this.ariaLabel, extra: this.extra }),
    }, [
      h("ol", {
        class: "a_breadcrumb__list",
        role: "list",
      }, CHILDREN),
    ]);
  },
};
