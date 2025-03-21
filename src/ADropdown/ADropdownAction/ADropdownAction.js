import {
  h,
} from "vue";
import {
  AButton,
  ALink,
} from "../../index";

import AttributesAPI from "./compositionAPI/AttributesAPI";

export default {
  name: "ADropdownAction",
  props: {
    action: {
      type: Object,
      required: true,
    },
    alwaysTranslate: {
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
          alwaysTranslate: this.alwaysTranslate,
          isHidden: undefined,
          callback: undefined,
          classButton: undefined,
          classExtra: undefined,
          isConfirm: undefined,
          callbackLocal: undefined,
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
          alwaysTranslate: this.alwaysTranslate,
          classButton: undefined,
          classExtra: undefined,
          isHidden: undefined,
          isConfirm: undefined,
          callbackLocal: undefined,
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
    return null;
  },
};
