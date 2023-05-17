import {
  h,
  withDirectives,
} from "vue";

import ASafeHtml from "../directives/ASafeHtml";

import AriaLabelHiddenAPI from "./compositionAPI/AriaLabelHiddenAPI";
import ClassAPI from "./compositionAPI/ClassAPI";
import IconAPI from "./compositionAPI/IconAPI";

export default {
  name: "AIcon",
  props: {
    ariLabel: {
      type: String,
      required: false,
      default: undefined,
    },
    icon: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    iconTag: {
      type: String,
      required: false,
      default: "i",
    },
    isSaveHtml: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const {
      attributesAriaLabelHidden,
    } = AriaLabelHiddenAPI(props);

    const {
      iconClass,
    } = ClassAPI(props);

    const {
      hasIcon,
      iconSvg,
    } = IconAPI(props);

    return {
      attributesAriaLabelHidden,
      hasIcon,
      iconClass,
      iconSvg,
    };
  },
  render() {
    if (!this.hasIcon) {
      return;
    }

    if (this.isSaveHtml) {
      return h(this.iconTag, {
        class: ["a_icon", this.iconClass],
        innerHTML: this.iconSvg,
        ...this.attributesAriaLabelHidden,
      });
    }

    return withDirectives(h(this.iconTag, {
      class: ["a_icon", this.iconClass],
      ...this.attributesAriaLabelHidden,
    }), [
      [ASafeHtml, this.iconSvg],
    ]);
  },
};
