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
      classHeader: computed(() => this.classHeader),
      classButton: computed(() => this.classButton),
      disabled: computed(() => this.disabled),
      id: computed(() => this.id),
      indexesForOpen: computed(() => this.indexesForOpen),
      isCaret: computed(() => this.isCaret),
      keyList: computed(() => this.keyList),
      keyLabel: computed(() => this.keyLabel),
      keyContent: computed(() => this.keyContent),
      keyClassBody: computed(() => this.keyClassBody),
      keyClassHeader: computed(() => this.keyClassHeader),
      keyIsRender: computed(() => this.keyIsRender),
      keyClassButton: computed(() => this.keyClassButton),
      keyIsRenderBodyByFirstOpen: computed(() => this.keyIsRenderBodyByFirstOpen),
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
      default: "classBody",
    },
    keyClassHeader: {
      type: String,
      required: false,
      default: "classHeader",
    },
    keyClassButton: {
      type: String,
      required: false,
      default: "classButton",
    },
    keyIsRender: {
      type: String,
      required: false,
      default: "isRender",
    },
    keyIsRenderBodyByFirstOpen: {
      type: String,
      required: false,
      default: "isRenderBodyByFirstOpen",
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
    classHeader: {
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
    keyRender: {
      type: String,
      required: false,
      default: undefined,
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
      class: ["a_accordion"],
    }, [
      this.items.map((item, itemIndex) => {
        return h(AAccordionItem, {
          key: this.keyRender || itemIndex,
          item,
          itemIndex,
          isParentOpen: true,
          keyRender: this.keyRender,
          onToggle: this.toggle,
        }, this.$slots);
      }),
    ]);
  },
};
