import {
  h,
} from "vue";

import AListItem from "./AListItem";

export default {
  name: "AList",
  props: {
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    keyLabel: {
      type: String,
      required: false,
      default: undefined,
    },
    keyLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyChildren: {
      type: String,
      required: false,
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: "ul",
    },
    labelTag: {
      type: String,
      required: false,
      default: "span",
    },
    classMain: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    classItem: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
  },
  render() {
    return h(this.tag, {
      class: this.classMain,
    }, [
      this.data.map((item, itemIndex) => {
        return h(AListItem, {
          item,
          itemIndex,
          keyLabel: this.keyLabel,
          keyLabelCallback: this.keyLabelCallback,
          keyChildren: this.keyChildren,
          tag: this.tag,
          labelTag: this.labelTag,
          classMain: this.classMain,
          classItem: this.classItem,
        }, this.$slots);
      }),
    ]);
  },
};
