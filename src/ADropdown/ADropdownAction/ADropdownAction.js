import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ALink from "../../ALink/ALink";

import AttributesAPI from "./compositionAPI/AttributesAPI";

export default {
  name: "ADropdownAction",
  props: {
    action: {
      type: Object,
      required: true,
    },
    useActionClass: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const {
      attributesAction,
    } = AttributesAPI(props);

    return {
      attributesAction,
    };
  },
  render() {
    if (this.action.type === "button") {
      return h("li", {
        class: this.action.liClass,
      }, [
        h(AButton, {
          ...this.attributesAction,
          isHidden: undefined,
          callback: undefined,
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
          ...this.attributesAction,
          isHidden: undefined,
        }),
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
