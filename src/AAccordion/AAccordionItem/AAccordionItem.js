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
    "classMainLocal",
    "classItemLocal",
    "classItemHeaderLocal",
    "classItemHeaderButton",
    "classBoxCollapse",
    "classBoxCollapseBodyLocal",
    "classBoxCollapseBodyContent",
    "id",
    "indexesForOpen",
    "isBootstrap",
    "keyList",
    "keyLabel",
    "keyContent",
    "tag",
    "tagItem",
    "tagItemHeader",
    "tagItemHeaderButton",
    "tagBoxCollapse",
    "tagBoxCollapseBody",
    "tagBoxCollapseBodyContent",
  ],
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

    currentIndex() {
      if (this.parentIndexesString) {
        return `${ this.parentIndexesString }.${ this.itemIndex }`;
      }
      return `${ this.itemIndex }`;
    },

    parentIndexesString() {
      return this.parentIndexes.join(".");
    },

    isOpen() {
      if (!this.isParentOpen) {
        return false;
      }
      return this.indexesForOpen.indexOf(this.currentIndex) !== -1;
    },

    classItemHeaderButtonLocal() {
      if (this.isBootstrap) {
        return [
          this.classItemHeaderButton,
          "accordion-button",
          {
            collapsed: !this.isOpen,
          },
        ];
      }
    },

    classBoxCollapseLocal() {
      if (this.isBootstrap) {
        return [
          this.classBoxCollapse,
          "accordion-collapse collapse",
          {
            show: this.isOpen,
          },
        ];
      }
    },

    ariaExpanded() {
      return `${ this.isOpen }`;
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
};
