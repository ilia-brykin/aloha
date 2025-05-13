import {
  h,
  withDirectives,
} from "vue";
import {
  AIcon,
} from "../../../index";

import ASafeHtml from "../../../directives/ASafeHtml";


export default {
  name: "ASelectIconSlot",
  inheritAttrs: false,
  props: {
    inDropdown: {
      type: Boolean,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    labelFiltered: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  render() {
    return h("span", null, [
      h(AIcon, {
        icon: this.icon,
      }),
      this.inDropdown ?
        withDirectives(h("span", {
          class: "a_ml_2",
        }), [
          [ASafeHtml, this.labelFiltered],
        ]) :
        h("span", {
          class: "a_ml_2",
        }, this.label),
    ]);
  },
};
