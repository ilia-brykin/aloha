import ASlot from "../../ASlot/ASlot.vue";

import {
  cloneDeep,
  get,
} from "lodash-es";

export default {
  name: "AAccordionItem",
  components: {
    ASlot,
  },
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
    "classItem",
    "classItemHeaderLocal",
    "classItemHeaderButton",
    "classBoxCollapse",
    "classBoxCollapseBodyLocal",
    "classBoxCollapseBodyContent",
    "id",
    "indexesForOpen",
    "isBootstrap",
    "isFoundation",
    "keyList",
    "keyLabel",
    "keyContent",
    "tag",
    "tagItem",
    "tagItemHeaderLocal",
    "tagItemHeaderButtonLocal",
    "tagBoxCollapseLocal",
    "tagBoxCollapseBodyLocal",
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

    classItemLocal() {
      if (this.isBootstrap) {
        return this.classItemBootstrap;
      }
      if (this.isFoundation) {
        return this.classItemFoundation;
      }
    },

    classItemBootstrap() {
      const CLASS_BOOTSTRAP = "accordion-item";
      if (this.classItem) {
        return `${ this.classItem } ${ CLASS_BOOTSTRAP }`;
      }
      return CLASS_BOOTSTRAP;
    },

    classItemFoundation() {
      return [
        this.classItem,
        "accordion-item",
        {
          "is-active": this.isOpen,
        },
      ];
    },

    classItemHeaderButtonLocal() {
      if (this.isBootstrap) {
        return this.classItemHeaderButtonBootstrap;
      }
      if (this.isFoundation) {
        return this.classItemHeaderButtonFoundation;
      }
    },

    classItemHeaderButtonBootstrap() {
      return [
        this.classItemHeaderButton,
        "accordion-button",
        {
          collapsed: !this.isOpen,
        },
      ];
    },

    classItemHeaderButtonFoundation() {
      return [
        this.classItemHeaderButton,
        "accordion-title"
      ];
    },

    classBoxCollapseLocal() {
      if (this.isBootstrap) {
        return this.classBoxCollapseBootstrap;
      }
      if (this.isFoundation) {
        return this.classBoxCollapseFoundation;
      }
    },

    classBoxCollapseBootstrap() {
      return [
        this.classBoxCollapse,
        "accordion-collapse collapse",
        {
          show: this.isOpen,
        },
      ];
    },

    classBoxCollapseFoundation() {
      return [
        this.classBoxCollapse,
        "accordion-content",
      ];
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

    styleBoxCollapse() {
      if (this.isFoundation && this.isOpen) {
        return "display: block;";
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
