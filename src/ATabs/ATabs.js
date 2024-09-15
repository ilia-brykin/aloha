import {
  h,
  toRef,
  watch,
} from "vue";

import ATabsContent from "./ATabsContent/ATabsContent";
import ATabsTab from "./ATabsTab/ATabsTab";

import ActiveAPI from "./compositionAPI/ActiveAPI";

import placements from "../const/placements";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ATabs",
  props: {
    activeTabId: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    data: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_tabs_"),
    },
    isBoxed: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isChangeOutside: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isTitleHtml: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isVertical: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    keyActive: {
      type: String,
      required: false,
      default: "active",
    },
    keyContent: {
      type: String,
      required: false,
      default: "content",
    },
    keyDisabled: {
      type: String,
      required: false,
      default: undefined,
    },
    keyId: {
      type: String,
      required: false,
      default: undefined,
    },
    keyLabel: {
      type: String,
      required: false,
      default: "label",
    },
    keyTitle: {
      type: String,
      required: false,
      default: "title",
    },
    titlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: placement => placements.indexOf(placement) !== -1,
    },
  },
  emits: [
    "change",
  ],
  setup(props, context) {
    const activeTabId = toRef(props, "activeTabId");

    const {
      activeTabIdLocal,
      changeTab,
      initActiveTabIdLocal,
      setActiveTabIdLocal,
    } = ActiveAPI(props, context);

    initActiveTabIdLocal();

    watch(activeTabId, () => {
      setActiveTabIdLocal();
    });

    return {
      activeTabIdLocal,
      changeTab,
    };
  },
  render() {
    return h("div", {
      id: this.id,
      class: ["a_tabs", {
        a_tabs_boxed: this.isBoxed,
        a_tabs_vertical: this.isVertical,
      }],
    }, [
      h("div", {
        class: "a_tabs__box",
      }, [
        h("ul", {
          class: "a_tabs__list",
          role: "tablist",
        }, [
          this.data.map((tab, tabIndex) => {
            return h(ATabsTab, {
              key: tabIndex,
              activeTabIdLocal: this.activeTabIdLocal,
              disabled: this.disabled,
              index: tabIndex,
              isTitleHtml: this.isTitleHtml,
              keyDisabled: this.keyDisabled,
              keyId: this.keyId,
              keyLabel: this.keyLabel,
              keyTitle: this.keyTitle,
              parentId: this.id,
              tab,
              titlePlacement: this.titlePlacement,
              onChangeTab: this.changeTab,
            }, this.$slots);
          }),
        ]),
      ]),
      h("div", {
        class: "a_tabs__contents",
      }, [
        this.data.map((tab, tabIndex) => {
          return h(ATabsContent, {
            key: tabIndex,
            activeTabIdLocal: this.activeTabIdLocal,
            index: tabIndex,
            keyContent: this.keyContent,
            keyId: this.keyId,
            parentId: this.id,
            tab,
          }, this.$slots);
        }),
      ]),
    ]);
  },
};
