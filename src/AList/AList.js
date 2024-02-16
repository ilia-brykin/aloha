import {
  h,
} from "vue";

import AListItem from "./AListItem/AListItem";

import PlainTextAPI from "./compositionAPI/PlainTextAPI";
import TagAPI from "./compositionAPI/TagAPI";

import {
  get,
} from "lodash-es";

export default {
  name: "AList",
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
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    isDataSimpleArray: {
      type: Boolean,
      required: false,
      default: false,
    },
    isHtml: {
      type: Boolean,
      required: false,
      default: true,
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
      required: false,
      default: "span",
    },
    listItemTag: {
      type: String,
      required: false,
      default: "li",
    },
    separator: {
      type: String,
      required: false,
      default: undefined,
    },
    separatorHtml: {
      type: String,
      required: false,
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: "ul",
    },
  },
  setup(props) {
    const {
      tagLocal,
    } = TagAPI(props);

    const {
      plainText,
    } = PlainTextAPI(props);

    return {
      plainText,
      tagLocal,
    };
  },
  render() {
    if (this.isHtml) {
      return h(this.tag, {
        class: this.classMain,
      }, [
        this.data.map((item, itemIndex) => {
          const KEY = this.keyId ? get(item, this.keyId) : itemIndex;
          return h(AListItem, {
            key: KEY,
            classItem: this.classItem,
            classMain: this.classMain,
            isDataSimpleArray: this.isDataSimpleArray,
            item,
            itemIndex,
            keyChildren: this.keyChildren,
            keyId: this.keyId,
            keyLabel: this.keyLabel,
            keyLabelCallback: this.keyLabelCallback,
            labelTag: this.labelTag,
            listItemTag: this.listItemTag,
            separator: this.separator,
            separatorHtml: this.separatorHtml,
            tag: this.tag,
          }, this.$slots);
        }),
      ]);
    }

    return h(this.tagLocal, null, this.plainText);
  },
};
