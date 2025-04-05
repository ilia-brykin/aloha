import {
  computed,
  h,
} from "vue";

import AAccordionItem from "./AAccordionItem/AAccordionItem";

import DataAPI from "./compositionAPI/DataAPI";
import IndexesForOpenAPI from "./compositionAPI/IndexesForOpenAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import {
  AKeyId,
} from "../const/AKeys";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AAccordion",
  provide() {
    return {
      classBody: computed(() => this.classBody),
      classButton: computed(() => this.classButton),
      classHeader: computed(() => this.classHeader),
      disabled: computed(() => this.disabled),
      id: computed(() => this.id),
      idsForOpen: computed(() => this.idsForOpen),
      isCaret: computed(() => this.isCaret),
      keyChildren: computed(() => this.keyChildren),
      keyClassBody: computed(() => this.keyClassBody),
      keyClassButton: computed(() => this.keyClassButton),
      keyClassHeader: computed(() => this.keyClassHeader),
      keyContent: computed(() => this.keyContent),
      keyIsRender: computed(() => this.keyIsRender),
      keyIsRenderBodyByFirstOpen: computed(() => this.keyIsRenderBodyByFirstOpen),
      keyLabel: computed(() => this.keyLabel),
      readonly: computed(() => this.readonly),
      withGap: computed(() => this.withGap),
      toggle: this.toggleLocal,
    };
  },
  props: {
    alwaysOpen: {
      type: Boolean,
      required: false,
    },
    classBody: {
      type: [String, Object],
      required: false,
      default: "",
    },
    classButton: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    classHeader: {
      type: [String, Object],
      required: false,
      default: "",
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: false,
      default: uniqueId("accordion_"),
    },
    idsForOpenDefault: {
      type: Array,
      required: false,
      default: () => [],
    },
    isCaret: {
      type: Boolean,
      required: false,
      default: true,
    },
    data: {
      type: Array,
      required: true,
    },
    keyClassBody: {
      type: String,
      required: false,
      default: "classBody",
    },
    keyClassButton: {
      type: String,
      required: false,
      default: "classButton",
    },
    keyClassHeader: {
      type: String,
      required: false,
      default: "classHeader",
    },
    keyContent: {
      type: String,
      required: false,
      default: "content",
    },
    keyId: {
      type: String,
      required: false,
      default: undefined,
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
    keyLabel: {
      type: String,
      required: false,
      default: "label",
    },
    keyChildren: {
      type: String,
      required: false,
      default: "children",
    },
    prevent: {
      type: Boolean,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    stop: {
      type: Boolean,
      required: false,
    },
    withGap: {
      type: Boolean,
      required: false,
    },
    indexesForOpen: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  emits: [
    "toggle",
  ],
  setup(props, context) {
    const {
      idsForOpen,
      initIdsForOpen,
      toggleLocal,
    } = ToggleAPI(props, context);

    const {
      dataWithIds,
    } = DataAPI(props);

    const {
      initIdsFromIndexesForOpen,
    } = IndexesForOpenAPI(props, {
      idsForOpen,
      dataWithIds,
    });

    initIdsForOpen();
    initIdsFromIndexesForOpen();

    return {
      dataWithIds,
      idsForOpen,
      toggleLocal,
    };
  },
  render() {
    return h("div", {
      class: ["a_accordion"],
    }, [
      this.dataWithIds.map((item, itemIndex) => {
        return h(AAccordionItem, {
          key: item[AKeyId],
          item,
          itemIndex,
          isParentOpen: true,
          keyId: this.keyId,
        }, this.$slots);
      }),
    ]);
  },
};
