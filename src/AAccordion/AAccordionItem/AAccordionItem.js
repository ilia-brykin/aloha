import ASlot from "../../ASlot/ASlot.vue";

import {
  computed,
  inject,
  toRefs,
} from "vue";
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
    "classBoxCollapseBodyContent",
    "id",
    "indexesForOpen",
    "isFoundation",
    "keyList",
    "keyLabel",
    "keyContent",
    "tagsLocal",
  ],
  setup(props) {
    const {
      isParentOpen,
      itemIndex,
      parentIndexes,
    } = toRefs(props);
    const classMainLocal = inject("classMainLocal");
    const currentFrameworkOptions = inject("currentFrameworkOptions");
    const classItem = inject("classItem");
    const classItemHeader = inject("classItemHeader");
    const classItemHeaderButton = inject("classItemHeaderButton");
    const classBoxCollapse = inject("classBoxCollapse");
    const classBoxCollapseBody = inject("classBoxCollapseBody");

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

    const classItemLocal = computed(() => {
      return currentFrameworkOptions.value.item.class(classItem.value, isOpen.value);
    });
    const classItemHeaderLocal = computed(() => {
      return currentFrameworkOptions.value.itemHeader.class(classItemHeader.value, isOpen.value);
    });
    const classItemHeaderButtonLocal = computed(() => {
      return currentFrameworkOptions.value.itemHeaderButton.class(classItemHeaderButton.value, isOpen.value);
    });
    const classBoxCollapseLocal = computed(() => {
      return currentFrameworkOptions.value.boxCollapse.class(classBoxCollapse.value, isOpen.value);
    });
    const classBoxCollapseBodyLocal = computed(() => {
      return currentFrameworkOptions.value.boxCollapseBody.class(classBoxCollapseBody.value, isOpen.value);
    });

    return {
      classMainLocal,
      classItemLocal,
      classItemHeaderLocal,
      classItemHeaderButtonLocal,
      classBoxCollapseLocal,
      classBoxCollapseBodyLocal,
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
