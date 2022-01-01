import AAccordionItem from "./AAccordionItem/AAccordionItem.vue";

import {
  computed,
} from "vue";

import frameworks from "../const/frameworks";
import {
  cloneDeep,
  filter,
  startsWith,
  uniqueId,
} from "lodash-es";

export default {
  name: "AAccordion",
  components: {
    AAccordionItem,
  },
  props: {
    alwaysOpen: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: false,
      default: uniqueId("collapse_"),
    },
    items: {
      type: Array,
      required: true,
    },
    disabled: {
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
    classMain: {
      type: String,
      required: false,
      default: "",
    },
    classItem: {
      type: String,
      required: false,
      default: "",
    },
    classItemHeader: {
      type: String,
      required: false,
      default: "",
    },
    classItemHeaderButton: {
      type: String,
      required: false,
      default: "",
    },
    classBoxCollapse: {
      type: String,
      required: false,
      default: "",
    },
    classBoxCollapseBody: {
      type: String,
      required: false,
      default: "",
    },
    classBoxCollapseBodyContent: {
      type: String,
      required: false,
      default: "",
    },
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    tagItem: {
      type: String,
      required: false,
      default: "div",
    },
    tagItemHeader: {
      type: String,
      required: false,
      default: "div",
    },
    tagItemHeaderButton: {
      type: String,
      required: false,
      default: "button",
    },
    tagBoxCollapse: {
      type: String,
      required: false,
      default: "div",
    },
    tagBoxCollapseBody: {
      type: String,
      required: false,
      default: "div",
    },
    tagBoxCollapseBodyContent: {
      type: String,
      required: false,
      default: "div",
    },
    stop: {
      type: Boolean,
      required: false,
    },
    prevent: {
      type: Boolean,
      required: false,
    },
    framework: {
      type: String,
      required: false,
      validator: framework => frameworks.indexOf(framework) !== -1,
    },
  },
  emits: ["toggle"],
  data() {
    return {
      indexesForOpen: [],
    };
  },
  provide() {
    return {
      classMainLocal: computed(() => this.classMainLocal),
      classItemLocal: computed(() => this.classItemLocal),
      classItemHeaderLocal: computed(() => this.classItemHeaderLocal),
      classItemHeaderButton: computed(() => this.classItemHeaderButton),
      classBoxCollapse: computed(() => this.classBoxCollapse),
      classBoxCollapseBodyLocal: computed(() => this.classBoxCollapseBodyLocal),
      classBoxCollapseBodyContent: computed(() => this.classBoxCollapseBodyContent),
      id: computed(() => this.id),
      indexesForOpen: computed(() => this.indexesForOpen),
      isBootstrap: computed(() => this.isBootstrap),
      keyList: computed(() => this.keyList),
      keyLabel: computed(() => this.keyLabel),
      keyContent: computed(() => this.keyContent),
      tag: computed(() => this.tag),
      tagItem: computed(() => this.tagItem),
      tagItemHeader: computed(() => this.tagItemHeader),
      tagItemHeaderButton: computed(() => this.tagItemHeaderButton),
      tagBoxCollapse: computed(() => this.tagBoxCollapse),
      tagBoxCollapseBody: computed(() => this.tagBoxCollapseBody),
      tagBoxCollapseBodyContent: computed(() => this.tagBoxCollapseBodyContent),
    };
  },
  computed: {
    isBootstrap() {
      return this.framework === "bootstrap";
    },

    classMainLocal() {
      if (this.isBootstrap) {
        const CLASS_BOOTSTRAP = "accordion";
        if (this.classMain) {
          return `${ this.classMain } ${ CLASS_BOOTSTRAP }`;
        }
        return CLASS_BOOTSTRAP;
      }
    },

    classItemLocal() {
      if (this.isBootstrap) {
        const CLASS_BOOTSTRAP = "accordion-item";
        if (this.classItem) {
          return `${ this.classItem } ${ CLASS_BOOTSTRAP }`;
        }
        return CLASS_BOOTSTRAP;
      }
    },

    classItemHeaderLocal() {
      if (this.isBootstrap) {
        const CLASS_BOOTSTRAP = "accordion-header";
        if (this.classItemHeader) {
          return `${ this.classItemHeader } ${ CLASS_BOOTSTRAP }`;
        }
        return CLASS_BOOTSTRAP;
      }
    },

    classBoxCollapseBodyLocal() {
      if (this.isBootstrap) {
        const CLASS_BOOTSTRAP = "accordion-body";
        if (this.classBoxCollapseBody) {
          return `${ this.classBoxCollapseBody } ${ CLASS_BOOTSTRAP }`;
        }
        return CLASS_BOOTSTRAP;
      }
    },
  },
  methods: {
    toggle({ indexes, isOpen, $event }) {
      if (this.disabled) {
        return;
      }
      const INDEXES = cloneDeep(indexes);
      if (this.alwaysOpen) {
        this.toggleWithAlwaysOpen({ indexes: INDEXES, isOpen });
      } else {
        this.toggleWithoutAlwaysOpen({ indexes: INDEXES, isOpen });
      }
      this.$emit("toggle");

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
};
