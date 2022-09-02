import {
  computed,
  h,
  inject,
  resolveComponent,
  toRefs,
} from "vue";

import {
  cloneDeep,
  get,
} from "lodash-es";

export default {
  name: "AAccordionItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    itemIndex: {
      type: Number,
      required: true,
    },
    isParentOpen: {
      type: Boolean,
      required: true,
    },
    parentIndexes: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  emits: ["toggle"],
  inject: [
    "classButton",
    "disabled",
    "id",
    "indexesForOpen",
    "isCaret",
    "keyList",
    "keyLabel",
    "keyContent",
    "readonly",
    "withGap",
  ],
  setup(props) {
    const {
      isParentOpen,
      itemIndex,
      parentIndexes,
    } = toRefs(props);

    const indexesForOpen = inject("indexesForOpen");
    const parentIndexesString = computed(() => {
      return parentIndexes.value.join(".");
    });

    const currentIndex = computed(() => {
      if (parentIndexesString.value) {
        return `${ parentIndexesString.value }.${ itemIndex.value }`;
      }
      return `${ itemIndex.value }`;
    });

    const isOpen = computed(() => {
      if (!isParentOpen.value) {
        return false;
      }
      return indexesForOpen.value.indexOf(currentIndex.value) !== -1;
    });

    return {
      currentIndex,
      isOpen,
    };
  },
  computed: {
    hasChildren() {
      return this.children.length !== 0;
    },

    children() {
      return get(this.item, this.keyList, []) || [];
    },

    parentIndexesForChild() {
      const PARENT_INDEXES = cloneDeep(this.parentIndexes);
      PARENT_INDEXES.push(`${ this.currentIndex }`);
      return PARENT_INDEXES;
    },

    idForCollapse() {
      return `${ this.id }_${ this.currentIndex.replace(/\./g, "_") }`;
    },

    labelLocal() {
      if (this.keyLabel) {
        return get(this.item, this.keyLabel);
      }
    },

    contentLocal() {
      if (this.keyContent) {
        return get(this.item, this.keyContent);
      }
    },

    buttonTag() {
      return this.readonly ? "div" : "button";
    },

    buttonAttributes() {
      const ATTRIBUTES = {
        class: ["a_accordion__button", this.classButton, {
          a_accordion__button_collapsed: !this.isOpen,
          a_accordion__button_has_not_caret: !this.isCaret,
        }],
      };

      if (!this.readonly) {
        ATTRIBUTES.ariaExpanded = this.isOpen;
        ATTRIBUTES["aria-controls"] = this.idForCollapse;
        ATTRIBUTES.type = "button";
        ATTRIBUTES.disabled = this.disabled;
        ATTRIBUTES.onClick = this.toggle;
      }

      return ATTRIBUTES;
    },
  },
  methods: {
    toggle($event) {
      this.$emit("toggle", {
        $event: $event,
        indexes: this.parentIndexesForChild,
        isOpen: this.isOpen,
      });
    },

    toggleFromChild(arg) {
      this.$emit("toggle", arg);
    },
  },
  render() {
    return h("div", {
      class: "a_accordion__item",
    }, [
      h("div", {
        class: "a_accordion__header",
      }, [
        h(this.buttonTag, this.buttonAttributes, [
          this.$slots.accordionButton && this.$slots.accordionButton({
            item: this.item,
            itemIndex: this.itemIndex,
            parentIndexes: this.parentIndexes,
            id: this.id,
          }),
          this.labelLocal && h("span", {
            innerHTML: this.labelLocal,
          }),
        ]),
      ]),
      h("div", {
        id: this.idForCollapse,
        class: ["a_accordion__collapse_box", {
          a_accordion__collapse_box_show: this.isOpen,
        }],
      }, [
        h("div", {
          class: "a_accordion__body",
        }, [
          (this.item.slotContent && this.$slots[this.item.slotContent]) ?
            this.$slots[this.item.slotContent]({
              item: this.item,
              itemIndex: this.itemIndex,
              parentIndexes: this.parentIndexes,
              id: this.id,
            }) : this.$slots.accordionContent ?
              this.$slots.accordionContent({
                item: this.item,
                itemIndex: this.itemIndex,
                parentIndexes: this.parentIndexes,
                id: this.id,
              }) :
              this.contentLocal && h("div", {
                innerHTML: this.contentLocal,
              }),
          this.hasChildren && h("div", {
            class: ["a_accordion", {
              a_accordion__with_gap: this.withGap,
            }],
          }, [
            this.children.map((itemChild, itemChildIndex) => {
              return h(resolveComponent("AAccordionItem"), {
                key: itemChildIndex,
                item: itemChild,
                itemIndex: itemChildIndex,
                isParentOpen: this.isOpen,
                parentIndexes: this.parentIndexesForChild,
                onToggle: this.toggleFromChild,
              }, this.$slots);
            }),
          ]),
        ]),
      ])
    ]);
  },
};
