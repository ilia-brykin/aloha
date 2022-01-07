import AAccordionItem from "./AAccordionItem/AAccordionItem.vue";

import {
  computed,
  provide,
  toRefs,
} from "vue";

import frameworks from "../const/frameworks";
import {
  frameworksApi,
} from "../API/frameworksApi";
import {
  replaceTextTemplateToASlot,
} from "../utils/utils";
import {
  cloneDeep,
  filter,
  startsWith,
  uniqueId,
} from "lodash-es";

const FRAMEWORKS_PARAMETERS = {
  bootstrap: {
    main: {
      tag: "div",
      class: classProps => [
        classProps,
        "accordion",
      ],
    },
    item: {
      tag: "div",
      class: classProps => [
        classProps,
        "accordion-item",
      ],
    },
    itemHeader: {
      tag: "div",
      class: classProps => [
        classProps,
        "accordion-header",
      ],
    },
    itemHeaderButton: {
      tag: "button",
      class: (classProps, isOpen) => [
        classProps,
        "accordion-button",
        {
          collapsed: !isOpen,
        },
      ],
    },
    boxCollapse: {
      tag: "div",
      class: (classProps, isOpen) => [
        classProps,
        "accordion-collapse collapse",
        {
          show: isOpen,
        },
      ],
    },
    boxCollapseBody: {
      tag: "div",
      class: classProps => [
        classProps,
        "accordion-body",
      ],
    },
  },
  foundation: {
    main: {
      tag: "ul",
      class: classProps => [
        classProps,
        "accordion",
      ],
    },
    item: {
      tag: "li",
      class: (classProps, isOpen) => [
        classProps,
        "accordion-item",
        {
          "is-active": isOpen,
        },
      ],
    },
    itemHeader: {
      tag: "template",
      class: () => [],
    },
    itemHeaderButton: {
      tag: "a",
      class: classProps => [
        classProps,
        "accordion-title",
      ],
    },
    boxCollapse: {
      tag: "div",
      class: classProps => [
        classProps,
        "accordion-content",
      ],
    },
    boxCollapseBody: {
      tag: "template",
      class: () => [],
    },
  },
  uikit: {
    main: {
      tag: "ul",
      class: classProps => [
        classProps,
        "uk-accordion",
      ],
    },
    item: {
      tag: "li",
      class: (classProps, isOpen) => [
        classProps,
        {
          "uk-open": isOpen
        },
      ],
    },
    itemHeader: {
      tag: "template",
      class: () => [],
    },
    itemHeaderButton: {
      tag: "a",
      class: classProps => [
        classProps,
        "uk-accordion-title",
      ],
    },
    boxCollapse: {
      tag: "div",
      class: (classProps, isOpen) => [
        classProps,
        "uk-accordion-content",
        {
          "uk-hidden": !isOpen,
        },
      ],
    },
    boxCollapseBody: {
      tag: "template",
      class: () => [],
    },
  },
};

export default {
  name: "AAccordion",
  components: {
    AAccordionItem,
  },
  provide() {
    return {
      id: computed(() => this.id),
      indexesForOpen: computed(() => this.indexesForOpen),
      keyList: computed(() => this.keyList),
      keyLabel: computed(() => this.keyLabel),
      keyContent: computed(() => this.keyContent),
      classBoxCollapseBodyContent: computed(() => this.classBoxCollapseBodyContent),
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
    },
    tagItem: {
      type: String,
      required: false,
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
      classMain,
      classItem,
      classItemHeader,
      classItemHeaderButton,
      classBoxCollapse,
      classBoxCollapseBody,
      tag,
      tagItem,
      tagItemHeader,
      tagItemHeaderButton,
      tagBoxCollapse,
      tagBoxCollapseBody,
      tagBoxCollapseBodyContent,
    } = toRefs(props);
    const {
      frameworkLocal,
      isBootstrap,
      isFoundation,
    } = frameworksApi(props);

    provide("isBootstrap", isBootstrap);
    provide("isFoundation", isFoundation);

    const currentFrameworkOptions = computed(() => {
      return FRAMEWORKS_PARAMETERS[frameworkLocal.value];
    });

    const tagsLocal = computed(() => {
      return {
        main: replaceTextTemplateToASlot(tag.value || currentFrameworkOptions.value.main.tag),
        item: replaceTextTemplateToASlot(tagItem.value || currentFrameworkOptions.value.item.tag),
        itemHeader: replaceTextTemplateToASlot(tagItemHeader.value || currentFrameworkOptions.value.itemHeader.tag),
        itemHeaderButton: replaceTextTemplateToASlot(tagItemHeaderButton.value || currentFrameworkOptions.value.itemHeaderButton.tag),
        boxCollapse: replaceTextTemplateToASlot(tagBoxCollapse.value || currentFrameworkOptions.value.boxCollapse.tag),
        boxCollapseBody: replaceTextTemplateToASlot(tagBoxCollapseBody.value || currentFrameworkOptions.value.boxCollapseBody.tag),
        boxCollapseBodyContent: replaceTextTemplateToASlot(tagBoxCollapseBodyContent.value),
      };
    });
    provide("currentFrameworkOptions", currentFrameworkOptions);
    provide("tagsLocal", tagsLocal);

    const classMainLocal = computed(() => {
      return currentFrameworkOptions.value.main.class(classMain.value);
    });
    provide("classMainLocal", classMainLocal);
    provide("classItem", classItem);
    provide("classItemHeader", classItemHeader);
    provide("classItemHeaderButton", classItemHeaderButton);
    provide("classBoxCollapse", classBoxCollapse);
    provide("classBoxCollapseBody", classBoxCollapseBody);
    return {
      classMainLocal,
      isBootstrap,
      isFoundation,
      tagsLocal,
    };
  },
  data() {
    return {
      indexesForOpen: [],
    };
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
