import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import ATabAPI from "../compositionAPI/ATabAPI";
import ContentAPI from "./compositionAPI/ContentAPI";

export default {
  name: "ATabsContent",
  props: {
    activeTabIdLocal: {
      type: [String, Number],
      required: true,
    },
    index: {
      type: Number,
      required: true,
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
    parentId: {
      type: String,
      required: true,
    },
    tab: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const {
      idForContent,
      idLocal,
      isActive,
      tabIdLocal,
    } = ATabAPI(props);

    const {
      contentLocal,
    } = ContentAPI(props);

    return {
      contentLocal,
      idForContent,
      idLocal,
      isActive,
      tabIdLocal,
    };
  },
  render() {
    let content = null;
    if (this.tab.slotContent && this.$slots[this.tab.slotContent]) {
      content = this.$slots[this.tab.slotContent]({
        activeTabId: this.activeTabIdLocal,
        contentId: this.idForContent,
        index: this.index,
        isActive: this.isActive,
        parentId: this.parentId,
        tab: this.tab,
        tabId: this.tabIdLocal,
      });
    } else if (this.$slots.content) {
      content = this.$slots.content({
        activeTabId: this.activeTabIdLocal,
        contentId: this.idForContent,
        index: this.index,
        isActive: this.isActive,
        parentId: this.parentId,
        tab: this.tab,
        tabId: this.tabIdLocal,
      });
    } else if (this.contentLocal) {
      content = h(ATranslation, {
        html: this.contentLocal,
      });
    }

    return h("div", {
      id: this.idForContent,
      "aria-labelledby": this.idLocal,
      class: [
        "a_tabs__content",
        {
          a_tabs__content_show: this.isActive,
        },
      ],
      role: "tabpanel",
    }, [
      content,
    ]);
  },
};
