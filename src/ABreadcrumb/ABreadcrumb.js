import {
  h,
} from "vue";

import ALink from "../ALink/ALink";
import ATranslation from "../ATranslation/ATranslation";

import {
  getTranslatedAttributes,
} from "../ATranslation/compositionAPI/UtilsAPI";

// @vue/component
export default {
  name: "ABreadcrumb",
  props: {
    ariaLabel: {
      type: String,
      required: false,
      default: "_A_BREADCRUMB_ARIA_LABEL_",
    },
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    separator: {
      type: String,
      required: false,
      default: "›",
    },
  },
  render() {
    if (!this.items?.length) {
      return null;
    }

    return h("nav", {
      class: "a_breadcrumb",
      ...getTranslatedAttributes({ attr: "aria-label", placeholder: this.ariaLabel }),
    }, [
      h("ol", {
        class: "a_breadcrumb__list",
        role: "list",
      }, this.items.map((item, index) => {
        const isCurrent = index === this.items.length - 1;
        const isLink = !isCurrent && !!(item.to || item.href);

        return h("li", {
          key: item.id ?? index,
          class: "a_breadcrumb__item",
        }, [
          index > 0 && h("span", {
            class: "a_breadcrumb__separator",
            "aria-hidden": "true",
          }, this.separator),
          isLink ?
            h(ALink, {
              class: "a_breadcrumb__link",
              text: item.label,
              href: item.href,
              to: item.to,
              attributes: item.to ? { ariaCurrentValue: "false" } : undefined,
            }) :
            h(ATranslation, {
              tag: "span",
              text: item.label,
              class: isCurrent ? "a_breadcrumb__current" : undefined,
              "aria-current": isCurrent ? "page" : undefined,
            }),
        ]);
      })),
    ]);
  },
};
