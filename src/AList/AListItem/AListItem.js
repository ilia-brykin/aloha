import {
  h,
  withDirectives,
} from "vue";

import AList from "../AList";

import ASafeHtml from "../../directives/ASafeHtml";

import ChildrenAPI from "./compositionAPI/ChildrenAPI";
import LabelAPI from "./compositionAPI/LabelAPI";

export default {
  name: "AListItem",
  props: {
    classItem: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    classMain: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    item: {
      type: [Object, String, Number, Array],
      required: true,
    },
    itemIndex: {
      type: Number,
      required: true,
    },
    isDataSimpleArray: {
      type: Boolean,
      required: false,
      default: false,
    },
    keyChildren: {
      type: String,
      required: false,
      default: undefined,
    },
    keyId: {
      type: String,
      required: false,
      default: undefined,
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
    labelTag: {
      type: String,
      required: true,
    },
    listItemTag: {
      type: String,
      required: false,
      default: "li",
    },
    tag: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const {
      children,
      hasChildren,
    } = ChildrenAPI(props);

    const {
      label,
    } = LabelAPI(props);

    return {
      children,
      hasChildren,
      label,
    };
  },
  render() {
    return h(this.listItemTag, {
      class: this.classItem
    }, [
      this.$slots.listItem ?
        this.$slots.listItem({
          item: this.item,
          itemIndex: this.itemIndex,
        }) :
        withDirectives(h(this.labelTag), [
          [ASafeHtml, this.label]
        ]),
      this.hasChildren && h(AList, {
        classItem: this.classItem,
        classMain: this.classMain,
        data: this.children,
        isDataSimpleArray: this.isDataSimpleArray,
        keyChildren: this.keyChildren,
        keyId: this.keyId,
        keyLabel: this.keyLabel,
        keyLabelCallback: this.keyLabelCallback,
        labelTag: this.labelTag,
        listItemTag: this.listItemTag,
        tag: this.tag,
      }, this.$slots),
    ]);
  },
};
