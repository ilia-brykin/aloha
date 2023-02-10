import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ALink from "../../ALink/ALink";

export default {
  name: "ADropdownAction",
  props: {
    action: {
      type: Object,
      required: true,
    },
  },
  render() {
    if (this.action.type === "button") {
      return h("li", {
        class: this.action.liClass,
      }, [
        h(AButton, {
          class: "a_dropdown__item",
          ...this.action,
          onClick: this.action.callback,
        }),
      ]);
    }
    if (this.action.type === "divider") {
      return h("li", {
        class: [
          "a_dropdown__divider",
          this.action.liClass,
        ],
      });
    }
    if (this.action.type === "link") {
      return h("li", {
        class: this.action.liClass,
      }, [
        h(ALink, {
          class: "a_dropdown__item",
          ...this.action,
        })
      ]);
    }
    if (this.action.type === "template" &&
      this.action.slotName &&
      this.$slots[this.action.slotName]) {
      return this.$slots[this.action.slotName]({
        action: this.action,
      });
    }
    return "";
  },
};
