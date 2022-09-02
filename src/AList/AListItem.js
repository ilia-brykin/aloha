import {
  computed,
  h,
  resolveComponent,
  toRef,
} from "vue";

import {
  get,
  isArray,
  isFunction,
  isObject,
} from "lodash-es";

export default {
  name: "AListItem",
  props: {
    item: {
      type: [Object, String, Number],
      required: true,
    },
    itemIndex: {
      type: Number,
      required: true,
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
      required: true,
    },
    labelTag: {
      type: String,
      required: true,
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
  setup(props) {
    const item = toRef(props, "item");
    const itemIndex = toRef(props, "itemIndex");
    const keyLabel = toRef(props, "keyLabel");
    const keyLabelCallback = toRef(props, "keyLabelCallback");
    const isItemObject = computed(() => {
      return isObject(item.value);
    });

    const label = computed(() => {
      if (isFunction(keyLabelCallback.value)) {
        return keyLabelCallback.value({ item: item.value, itemIndex: itemIndex.value });
      }
      if (isItemObject.value) {
        if (keyLabel.value) {
          return get(item.value, keyLabel.value);
        }
      }
      return item.value;
    });

    const keyChildren = toRef(props, "keyChildren");
    const children = computed(() => {
      if (!keyChildren.value || !isItemObject.value) {
        return [];
      }
      return get(item.value, keyChildren.value) || [];
    });

    const hasChildren = computed(() => {
      return isArray(children.value) && children.value.length > 0;
    });

    return {
      children,
      hasChildren,
      label,
    };
  },
  render() {
    return h("li", {
      class: this.classItem
    }, [
      this.$slots.listItem ?
        this.$slots.listItem({ item: this.item, itemIndex: this.itemIndex }) :
        h(this.labelTag, {
          innerHTML: this.label,
        }),
      this.hasChildren && h(this.tag, {
        class: this.classMain,
      }, [
        this.children.map((item, itemIndex) => {
          return h(resolveComponent("AListItem"), {
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
      ]),
    ]);
  },
};
