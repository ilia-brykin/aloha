import {
  computed,
  h,
} from "vue";

import AAccordionItem from "./AAccordionItem";

import {
  cloneDeep,
  filter,
  startsWith,
  uniqueId,
} from "lodash-es";

export default {
  name: "AAccordion",
  provide() {
    return {
      classBody: computed(() => this.classBody),
      classButton: computed(() => this.classButton),
      disabled: computed(() => this.disabled),
      id: computed(() => this.id),
      indexesForOpen: computed(() => this.indexesForOpen),
      isCaret: computed(() => this.isCaret),
      keyList: computed(() => this.keyList),
      keyLabel: computed(() => this.keyLabel),
      keyContent: computed(() => this.keyContent),
      keyClassBody: computed(() => this.keyClassBody),
      keyIsRender: computed(() => this.keyIsRender),
      readonly: computed(() => this.readonly),
      withGap: computed(() => this.withGap),
    };
  },
  props: {
    alwaysOpen: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: false,
      default: uniqueId("accordion_"),
    },
    items: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    keyList: {
      type: String,
      required: false,
      default: "items",
    },
    keyLabel: {
      type: String,
      required: false,
      default: "label",
    },
    keyContent: {
      type: String,
      required: false,
      default: "content",
    },
    keyClassBody: {
      type: String,
      required: false,
      default: undefined,
    },
    keyIsRender: {
      type: String,
      required: false,
      default: undefined,
    },
    isCaret: {
      type: Boolean,
      required: false,
      default: true,
    },
    stop: {
      type: Boolean,
      required: false,
    },
    prevent: {
      type: Boolean,
      required: false,
    },
    classButton: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    classBody: {
      type: [String, Object],
      required: false,
      default: "",
    },
    withGap: {
      type: Boolean,
      required: false,
    },
    indexesForOpenDefault: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  emits: [
    "toggle",
  ],
  data() {
    return {
      indexesForOpen: cloneDeep(this.indexesForOpenDefault),
    };
  },
  methods: {
    toggle({ indexes, isOpen, $event, item, itemIndex }) {
      if (this.disabled) {
        return;
      }
      const INDEXES = cloneDeep(indexes);
      if (this.alwaysOpen) {
        this.toggleWithAlwaysOpen({ indexes: INDEXES, isOpen });
      } else {
        this.toggleWithoutAlwaysOpen({ indexes: INDEXES, isOpen });
      }
      this.$emit("toggle", { indexes, isOpen, $event, item, itemIndex });

      if (this.stop) {
        $event.stopPropagation();
      }
      if (this.prevent) {
        $event.preventDefault();
      }
    },

    toggleWithAlwaysOpen({ indexes, isOpen }) {
      const CURRENT_INDEX = indexes.pop();
      if (isOpen) {
        this.indexesForOpen = filter(this.indexesForOpen, index => {
          return !startsWith(index, CURRENT_INDEX);
        });
      } else {
        this.indexesForOpen.push(CURRENT_INDEX);
      }
    },

    toggleWithoutAlwaysOpen({ indexes, isOpen }) {
      if (isOpen) {
        indexes.pop();
        this.indexesForOpen = indexes;
      } else {
        this.indexesForOpen = indexes;
      }
    },
  },
  render() {
    return h("div", {
      class: ["a_accordion", {
        a_accordion__with_gap: this.withGap,
      }],
    }, [
      this.items.map((item, itemIndex) => {
        return h(AAccordionItem, {
          key: itemIndex,
          item,
          itemIndex,
          isParentOpen: true,
          onToggle: this.toggle,
        }, this.$slots);
      }),
    ]);
  },
};
