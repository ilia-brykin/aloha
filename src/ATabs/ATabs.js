import {
  h,
  toRef,
  watch,
} from "vue";

import ATabsContent from "./ATabsContent/ATabsContent";
import ATabsTab from "./ATabsTab/ATabsTab";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import KeyboardAPI from "./compositionAPI/KeyboardAPI";
import {
  getTranslatedAttributes,
} from "../ATranslation/compositionAPI/UtilsAPI";

import placements from "../const/placements";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ATabs",
  props: {
    /*
     * name of the tab list for screen readers, e.g. when the page has several tabs
     * auto: the arrows open the focused tab at once; manual: the arrows only move the focus, Enter or Space opens the tab (WAI-ARIA), e.g. for content that loads long
     */
    activation: {
      type: String,
      required: false,
      default: "auto",
      validator: value => ["auto", "manual"].indexOf(value) !== -1,
    },
    ariaLabel: {
      type: String,
      required: false,
      default: undefined,
    },
    ariaLabelledby: {
      type: String,
      required: false,
      default: undefined,
    },
    // v-model:active-tab-id
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
    // all: every content is rendered (hidden with CSS); active: only the active content; once: a content is rendered when its tab is opened first and then kept
    renderContent: {
      type: String,
      required: false,
      default: "all",
      validator: value => ["all", "active", "once"].indexOf(value) !== -1,
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
    "update:activeTabId",
  ],
  setup(props, context) {
    const activeTabId = toRef(props, "activeTabId");

    const {
      activeTabIdShown,
      changeTab,
      initActiveTabIdLocal,
      setActiveTabIdLocal,
      tabs,
    } = ActiveAPI(props, context);

    const {
      onKeydownTablist,
    } = KeyboardAPI(props, {
      changeTab,
      tabs,
    });

    initActiveTabIdLocal();

    watch(activeTabId, () => {
      setActiveTabIdLocal();
    });

    return {
      activeTabIdShown,
      changeTab,
      onKeydownTablist,
      tabs,
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
          "aria-orientation": this.isVertical ? "vertical" : undefined,
          "aria-labelledby": this.ariaLabelledby,
          ...getTranslatedAttributes({ attr: "aria-label", placeholder: this.ariaLabel }),
          onKeydown: this.onKeydownTablist,
        }, [
          this.data.map((tab, tabIndex) => {
            return h(ATabsTab, {
              key: this.tabs[tabIndex].tabId,
              activeTabIdLocal: this.activeTabIdShown,
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
            key: this.tabs[tabIndex].tabId,
            activeTabIdLocal: this.activeTabIdShown,
            index: tabIndex,
            keyContent: this.keyContent,
            keyId: this.keyId,
            parentId: this.id,
            renderContent: this.renderContent,
            tab,
          }, this.$slots);
        }),
      ]),
    ]);
  },
};
