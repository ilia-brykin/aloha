import AAccordionItem from "./AAccordionItem/AAccordionItem.vue";

import {
  computed,
  provide,
} from "vue";

import frameworks from "../const/frameworks";
import {
  frameworksApi,
} from "../API/frameworksApi";
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
  provide() {
    return {
      classMainLocal: computed(() => this.classMainLocal),
      classItem: computed(() => this.classItem),
      classItemHeaderLocal: computed(() => this.classItemHeaderLocal),
      classItemHeaderButton: computed(() => this.classItemHeaderButton),
      classBoxCollapse: computed(() => this.classBoxCollapse),
      classBoxCollapseBodyLocal: computed(() => this.classBoxCollapseBodyLocal),
      classBoxCollapseBodyContent: computed(() => this.classBoxCollapseBodyContent),
      id: computed(() => this.id),
      indexesForOpen: computed(() => this.indexesForOpen),
      keyList: computed(() => this.keyList),
      keyLabel: computed(() => this.keyLabel),
      keyContent: computed(() => this.keyContent),
      tag: computed(() => this.tag),
      tagItem: computed(() => this.tagItem),
      tagItemHeaderLocal: computed(() => this.tagItemHeaderLocal),
      tagItemHeaderButtonLocal: computed(() => this.tagItemHeaderButtonLocal),
      tagBoxCollapseLocal: computed(() => this.tagBoxCollapseLocal),
      tagBoxCollapseBodyLocal: computed(() => this.tagBoxCollapseBodyLocal),
      tagBoxCollapseBodyContent: computed(() => this.tagBoxCollapseBodyContent),
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
    },
    tagItemHeaderButton: {
      type: String,
      required: false,
    },
    tagBoxCollapse: {
      type: String,
      required: false,
    },
    tagBoxCollapseBody: {
      type: String,
      required: false,
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
  setup(props) {
    const {
      isBootstrap,
      isFoundation,
    } = frameworksApi(props);

    provide("isBootstrap", isBootstrap);
    provide("isFoundation", isFoundation);

    return {
      isBootstrap,
      isFoundation,
    };
  },
  data() {
    return {
      indexesForOpen: [],
    };
  },
  computed: {
    classMainLocal() {
      if (this.isBootstrap || this.isFoundation) {
        const CLASS_BOOTSTRAP = "accordion";
        if (this.classMain) {
          return `${ this.classMain } ${ CLASS_BOOTSTRAP }`;
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

    tagItemHeaderLocal() {
      if (this.tagItemHeader) {
        return this.tagItemHeader;
      }
      if (this.isBootstrap) {
        return "div";
      }
      if (this.isFoundation) {
        return "a-slot";
      }
    },

    tagItemHeaderButtonLocal() {
      if (this.tagItemHeaderButton) {
        return this.tagItemHeaderButton;
      }
      if (this.isBootstrap) {
        return "button";
      }
      if (this.isFoundation) {
        return "a";
      }
    },

    tagBoxCollapseLocal() {
      if (this.tagBoxCollapse) {
        return this.tagBoxCollapse;
      }
      if (this.isBootstrap) {
        return "div";
      }
      if (this.isFoundation) {
        return "div";
      }
    },

    tagBoxCollapseBodyLocal() {
      if (this.tagBoxCollapseBody) {
        return this.tagBoxCollapseBody;
      }
      if (this.isBootstrap) {
        return "div";
      }
      if (this.isFoundation) {
        return "a-slot";
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
