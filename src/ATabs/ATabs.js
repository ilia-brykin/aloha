import {
  h,
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
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_tabs_"),
    },
    data: {
      type: Array,
      required: true,
    },
    indexActiveTab: {
      type: Number,
      required: false,
      default: undefined,
    },
    isChangeOutside: {
      type: Boolean,
      required: false,
    },
    isBoxed: {
      type: Boolean,
      required: false,
    },
    isVertical: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
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
    const {
      changeTab,
      indexActiveTabLocal,
      initTabActiveIndex,
    } = ActiveAPI(props, context);

    initTabActiveIndex();

    return {
      indexActiveTabLocal,
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
              tab,
              index: tabIndex,
              parentId: this.id,
              indexActiveTabLocal: this.indexActiveTabLocal,
              disabled: this.disabled,
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
            tab,
            index: tabIndex,
            parentId: this.id,
            indexActiveTabLocal: this.indexActiveTabLocal,
          }, this.$slots);
        }),
      ]),
    ]);
  },
};
